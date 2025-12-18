// Package shacl provides SHACL validation using a WebAssembly-compiled engine.
//
// This package wraps the shacl-engine JavaScript library compiled to WebAssembly,
// providing a pure Go interface for validating RDF data against SHACL shapes.
package shacl

import (
	"bytes"
	"context"
	_ "embed"
	"encoding/json"
	"fmt"
	"sync"

	"github.com/tetratelabs/wazero"
	"github.com/tetratelabs/wazero/imports/wasi_snapshot_preview1"
)

//go:embed shacl-engine.wasm
var wasmBytes []byte

// ValidationResult represents the result of SHACL validation.
type ValidationResult struct {
	Conforms bool              `json:"conforms"`
	Results  []ValidationError `json:"results"`
}

// ValidationError represents a single SHACL validation error.
type ValidationError struct {
	FocusNode                 string   `json:"focusNode"`
	Severity                  string   `json:"severity"`
	SourceConstraintComponent string   `json:"sourceConstraintComponent"`
	SourceShape               string   `json:"sourceShape"`
	Path                      string   `json:"path,omitempty"`
	Value                     string   `json:"value,omitempty"`
	Message                   []string `json:"message,omitempty"`
}

// ErrorResult is returned when the WASM module encounters an error.
type ErrorResult struct {
	Error   bool   `json:"error"`
	Message string `json:"message"`
	Stack   string `json:"stack,omitempty"`
}

// Validator provides SHACL validation capabilities.
type Validator struct {
	runtime wazero.Runtime
	module  wazero.CompiledModule
	mu      sync.Mutex
}

// NewValidator creates a new SHACL validator instance.
// The validator compiles the WASM module once and reuses it for all validations.
func NewValidator(ctx context.Context) (*Validator, error) {
	runtime := wazero.NewRuntime(ctx)

	// Instantiate WASI for stdin/stdout support
	wasi_snapshot_preview1.MustInstantiate(ctx, runtime)

	// Compile the module (can be reused)
	compiled, err := runtime.CompileModule(ctx, wasmBytes)
	if err != nil {
		runtime.Close(ctx)
		return nil, fmt.Errorf("failed to compile WASM module: %w", err)
	}

	return &Validator{
		runtime: runtime,
		module:  compiled,
	}, nil
}

// Close releases resources associated with the validator.
func (v *Validator) Close(ctx context.Context) error {
	return v.runtime.Close(ctx)
}

// ValidateInput is the input format for SHACL validation.
type ValidateInput struct {
	Shapes string `json:"shapes"`
	Data   string `json:"data"`
}

// Validate validates RDF data against SHACL shapes.
//
// Both shapes and data should be in N-Triples format.
// Returns the validation result or an error if validation fails.
func (v *Validator) Validate(ctx context.Context, shapes, data string) (*ValidationResult, error) {
	v.mu.Lock()
	defer v.mu.Unlock()

	input := ValidateInput{
		Shapes: shapes,
		Data:   data,
	}

	inputJSON, err := json.Marshal(input)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal input: %w", err)
	}

	// Create stdin/stdout buffers
	stdin := bytes.NewReader(inputJSON)
	stdout := new(bytes.Buffer)

	// Configure module with stdin/stdout
	config := wazero.NewModuleConfig().
		WithStdin(stdin).
		WithStdout(stdout).
		WithStderr(stdout). // Capture stderr too
		WithName("")        // Anonymous module name for each instantiation

	// Instantiate and run the module
	mod, err := v.runtime.InstantiateModule(ctx, v.module, config)
	if err != nil {
		return nil, fmt.Errorf("failed to instantiate WASM module: %w", err)
	}
	defer mod.Close(ctx)

	// Parse output
	output := stdout.Bytes()
	if len(output) == 0 {
		return nil, fmt.Errorf("no output from WASM module")
	}

	// Check if it's an error response
	var errResult ErrorResult
	if err := json.Unmarshal(output, &errResult); err == nil && errResult.Error {
		return nil, fmt.Errorf("validation error: %s", errResult.Message)
	}

	// Parse as validation result
	var result ValidationResult
	if err := json.Unmarshal(output, &result); err != nil {
		return nil, fmt.Errorf("failed to parse validation result: %w (output: %s)", err, string(output))
	}

	return &result, nil
}

// ValidateString is a convenience method that returns whether the data conforms.
func (v *Validator) ValidateString(ctx context.Context, shapes, data string) (bool, error) {
	result, err := v.Validate(ctx, shapes, data)
	if err != nil {
		return false, err
	}
	return result.Conforms, nil
}
