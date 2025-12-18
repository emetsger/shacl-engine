package shacl

import (
	"context"
	"strings"
	"testing"
)

const testShapes = `<http://example.org/PersonShape> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/shacl#NodeShape> .
<http://example.org/PersonShape> <http://www.w3.org/ns/shacl#targetClass> <http://example.org/Person> .
<http://example.org/PersonShape> <http://www.w3.org/ns/shacl#property> <http://example.org/PersonShape-name> .
<http://example.org/PersonShape-name> <http://www.w3.org/ns/shacl#path> <http://example.org/name> .
<http://example.org/PersonShape-name> <http://www.w3.org/ns/shacl#minCount> "1"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.org/PersonShape-name> <http://www.w3.org/ns/shacl#maxCount> "1"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.org/PersonShape-name> <http://www.w3.org/ns/shacl#datatype> <http://www.w3.org/2001/XMLSchema#string> .
`

const validData = `<http://example.org/alice> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/Person> .
<http://example.org/alice> <http://example.org/name> "Alice" .
`

const invalidDataMissingName = `<http://example.org/bob> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/Person> .
`

const invalidDataTooManyNames = `<http://example.org/charlie> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/Person> .
<http://example.org/charlie> <http://example.org/name> "Charlie" .
<http://example.org/charlie> <http://example.org/name> "Chuck" .
`

func TestValidator_ValidData(t *testing.T) {
	ctx := context.Background()

	v, err := NewValidator(ctx)
	if err != nil {
		t.Fatalf("failed to create validator: %v", err)
	}
	defer v.Close(ctx)

	result, err := v.Validate(ctx, testShapes, validData)
	if err != nil {
		t.Fatalf("validation failed: %v", err)
	}

	if !result.Conforms {
		t.Errorf("expected valid data to conform, got %d violations", len(result.Results))
		for _, r := range result.Results {
			t.Logf("  violation: %s - %v", r.FocusNode, r.Message)
		}
	}
}

func TestValidator_InvalidDataMissingName(t *testing.T) {
	ctx := context.Background()

	v, err := NewValidator(ctx)
	if err != nil {
		t.Fatalf("failed to create validator: %v", err)
	}
	defer v.Close(ctx)

	result, err := v.Validate(ctx, testShapes, invalidDataMissingName)
	if err != nil {
		t.Fatalf("validation failed: %v", err)
	}

	if result.Conforms {
		t.Error("expected invalid data to not conform")
	}

	if len(result.Results) != 1 {
		t.Errorf("expected 1 violation, got %d", len(result.Results))
	}

	if len(result.Results) > 0 {
		r := result.Results[0]
		if r.FocusNode != "http://example.org/bob" {
			t.Errorf("expected focus node 'http://example.org/bob', got '%s'", r.FocusNode)
		}
		if !strings.Contains(r.SourceConstraintComponent, "MinCount") {
			t.Errorf("expected MinCount constraint, got '%s'", r.SourceConstraintComponent)
		}
	}
}

func TestValidator_InvalidDataTooManyNames(t *testing.T) {
	ctx := context.Background()

	v, err := NewValidator(ctx)
	if err != nil {
		t.Fatalf("failed to create validator: %v", err)
	}
	defer v.Close(ctx)

	result, err := v.Validate(ctx, testShapes, invalidDataTooManyNames)
	if err != nil {
		t.Fatalf("validation failed: %v", err)
	}

	if result.Conforms {
		t.Error("expected invalid data to not conform")
	}

	if len(result.Results) != 1 {
		t.Errorf("expected 1 violation, got %d", len(result.Results))
	}

	if len(result.Results) > 0 {
		r := result.Results[0]
		if r.FocusNode != "http://example.org/charlie" {
			t.Errorf("expected focus node 'http://example.org/charlie', got '%s'", r.FocusNode)
		}
		if !strings.Contains(r.SourceConstraintComponent, "MaxCount") {
			t.Errorf("expected MaxCount constraint, got '%s'", r.SourceConstraintComponent)
		}
	}
}

func TestValidator_ValidateString(t *testing.T) {
	ctx := context.Background()

	v, err := NewValidator(ctx)
	if err != nil {
		t.Fatalf("failed to create validator: %v", err)
	}
	defer v.Close(ctx)

	conforms, err := v.ValidateString(ctx, testShapes, validData)
	if err != nil {
		t.Fatalf("validation failed: %v", err)
	}
	if !conforms {
		t.Error("expected valid data to conform")
	}

	conforms, err = v.ValidateString(ctx, testShapes, invalidDataMissingName)
	if err != nil {
		t.Fatalf("validation failed: %v", err)
	}
	if conforms {
		t.Error("expected invalid data to not conform")
	}
}

func TestValidator_ReuseValidator(t *testing.T) {
	ctx := context.Background()

	v, err := NewValidator(ctx)
	if err != nil {
		t.Fatalf("failed to create validator: %v", err)
	}
	defer v.Close(ctx)

	// Run multiple validations with the same validator
	for i := 0; i < 5; i++ {
		result, err := v.Validate(ctx, testShapes, validData)
		if err != nil {
			t.Fatalf("validation %d failed: %v", i, err)
		}
		if !result.Conforms {
			t.Errorf("validation %d: expected valid data to conform", i)
		}
	}
}

func BenchmarkValidate(b *testing.B) {
	ctx := context.Background()

	v, err := NewValidator(ctx)
	if err != nil {
		b.Fatalf("failed to create validator: %v", err)
	}
	defer v.Close(ctx)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, err := v.Validate(ctx, testShapes, validData)
		if err != nil {
			b.Fatalf("validation failed: %v", err)
		}
	}
}
