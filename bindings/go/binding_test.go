package tree_sitter_sln_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_sln "github.com/crysthamus/tree-sitter-sln/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_sln.Language())
	if language == nil {
		t.Errorf("Error loading Visual Studio Solution grammar")
	}
}
