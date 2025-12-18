# SHACL Engine WASM Build
#
# Compiles shacl-engine to WebAssembly for use in Go and other WASM runtimes.
# Excludes SPARQL/Comunica dependencies for a lightweight build.

# Configuration - Node.js
NODE_BIN := $(HOME)/.nvm/versions/node/v24.12.0/bin
NPM := $(NODE_BIN)/npm
NPX := $(NODE_BIN)/npx
NODE := $(NODE_BIN)/node

# Configuration - WASM tools
JAVY := $(HOME)/bin/javy
WASMTIME := $(HOME)/.wasmtime/bin/wasmtime

# Configuration - Go
GO_BIN := $(HOME)/sdk/go1.25.5/bin
GO := $(GO_BIN)/go
GO_PKG_DIR := go/shacl

# Output files
WASM_BUNDLE := wasm-javy.bundle.js
WASM_OUTPUT := shacl-engine.wasm
WASM_API_MIN := wasm-api.min.js

# Javy options
JAVY_OPTS := -J event-loop=y -J javy-stream-io=y -J text-encoding=y

.PHONY: all clean install bundle wasm test test-wasm test-go go-build help

all: wasm go ## Build everything (WASM + Go)

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: node_modules ## Install npm dependencies

node_modules: package.json
	PATH="$(NODE_BIN):$(PATH)" $(NPM) install
	@touch node_modules

bundle: $(WASM_BUNDLE) ## Bundle JS for Javy

$(WASM_BUNDLE): wasm-javy.js Validator.js lib/*.js node_modules
	PATH="$(NODE_BIN):$(PATH)" $(NPX) esbuild wasm-javy.js \
		--bundle \
		--format=iife \
		--minify \
		--outfile=$(WASM_BUNDLE)

wasm: $(WASM_OUTPUT) ## Compile to WebAssembly

$(WASM_OUTPUT): $(WASM_BUNDLE)
	$(JAVY) build $(WASM_BUNDLE) -o $(WASM_OUTPUT) $(JAVY_OPTS)
	@echo "Built $(WASM_OUTPUT) ($$(ls -lh $(WASM_OUTPUT) | awk '{print $$5}'))"

# Standalone minified JS API (for non-WASM use)
api: $(WASM_API_MIN) ## Build minified JS API

$(WASM_API_MIN): wasm-api.js Validator.js lib/*.js node_modules
	PATH="$(NODE_BIN):$(PATH)" $(NPX) esbuild wasm-api.js \
		--bundle \
		--format=esm \
		--minify \
		--outfile=$(WASM_API_MIN)

test: node_modules ## Run JS API tests
	PATH="$(NODE_BIN):$(PATH)" $(NODE) test-wasm-api.js

test-wasm: $(WASM_OUTPUT) ## Run WASM tests with wasmtime
	@echo "=== Test: Invalid data (should fail validation) ==="
	@cat test-input.json | $(WASMTIME) $(WASM_OUTPUT)
	@echo ""
	@echo "=== Test: Valid data (should pass validation) ==="
	@cat test-valid-input.json | $(WASMTIME) $(WASM_OUTPUT)
	@echo ""

clean: ## Remove build artifacts
	rm -f $(WASM_BUNDLE) $(WASM_OUTPUT) $(WASM_API_MIN)

distclean: clean ## Remove all generated files including node_modules
	rm -rf node_modules

# Size report
size: $(WASM_OUTPUT) ## Show file sizes
	@echo "Bundle sizes:"
	@echo "  JS bundle:     $$(ls -lh $(WASM_BUNDLE) | awk '{print $$5}')"
	@echo "  WASM:          $$(ls -lh $(WASM_OUTPUT) | awk '{print $$5}')"
	@echo "  WASM (gzip):   $$(gzip -c $(WASM_OUTPUT) | wc -c | awk '{printf "%.0fK", $$1/1024}')"

# Go targets
go: $(GO_PKG_DIR)/shacl-engine.wasm ## Build Go package

$(GO_PKG_DIR)/shacl-engine.wasm: $(WASM_OUTPUT)
	cp $(WASM_OUTPUT) $(GO_PKG_DIR)/
	cd $(GO_PKG_DIR) && $(GO) mod tidy

test-go: go ## Run Go tests
	cd $(GO_PKG_DIR) && $(GO) test -v

bench-go: go ## Run Go benchmarks
	cd $(GO_PKG_DIR) && $(GO) test -bench=. -benchmem

go-clean: ## Clean Go build artifacts
	rm -f $(GO_PKG_DIR)/shacl-engine.wasm
	rm -rf $(GO_PKG_DIR)/go.sum
