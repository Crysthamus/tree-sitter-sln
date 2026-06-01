/**
 * @file A tree-sitter grammar for Visual Studio Solution (.sln) files
 * @author Crysthamus <crysthamus@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check
export default grammar({
	name: "sln",

	rules: {
		document: ($) =>
			seq($.header, repeat($.project_block), optional($.global_block)),

		header: ($) =>
			seq(
				"Microsoft Visual Studio Solution File, Format Version",
				field("version", $.version),
				choice("# Visual Studio", "# Visual Studio Version"),
				field("version", $.version),
				repeat($.property),
			),

		property: ($) =>
			seq(field("name", $.identifier), "=", field("version", $.version)),

		project_block: ($) =>
			seq(
				"Project",
				"(",
				field("guid", $.guid),
				")",
				"=",
				field("name", $.string),
				",",
				field("path", $.string),
				",",
				field("guid", $.guid),
				repeat($.project_section),
				"EndProject",
			),

		project_section: ($) =>
			seq(
				"ProjectSection",
				"(",
				field("name", $.identifier),
				")",
				"=",
				field("type", $.section_type),
				repeat($.key_value_pair),
				"EndProjectSection",
			),

		global_block: ($) => seq("Global", repeat($.global_section), "EndGlobal"),

		global_section: ($) =>
			seq(
				"GlobalSection",
				"(",
				field("name", $.identifier),
				")",
				"=",
				field("type", $.section_type),
				repeat($.key_value_pair),
				"EndGlobalSection",
			),

		key_value_pair: ($) =>
			seq(field("key", $.key), "=", field("value", $.value)),

		key: ($) =>
			choice(
				$.guid_key,
				$.identifier,
				prec(-1, $.config_key),
				prec(-2, $.guid),
				prec(-3, $.string),
			),

		value: ($) =>
			choice(
				$.config_value,
				$.identifier,
				prec(-1, $.guid),
				prec(-2, $.string),
			),

		guid_key: ($) =>
			seq(
				field("key", $.guid),
				".",
				field("mode", $.identifier),
				"|",
				field("arch", $.arch_identifier),
				optional(seq(".", field("prop", $.string))),
			),

		config_key: ($) =>
			seq(field("mode", $.identifier), "|", field("arch", $.arch_identifier)),

		config_value: ($) =>
			seq(field("mode", $.identifier), "|", field("arch", $.arch_identifier)),

		section_type: () =>
			choice("preSolution", "postSolution", "preProject", "postProject"),

		version: () => new RustRegex("\\d+(?:\\.\\d+)*(?: +[a-zA-Z0-9.\\-]+)?"),

		identifier: () => new RustRegex("[A-Z][a-zA-Z]*"),

		string: () =>
			choice(new RustRegex('"[^"]*"'), new RustRegex("[a-zA-Z0-9._/\\\\$-]+")),

		guid: () =>
			new RustRegex(
				'"?\\{?[0-9A-Fa-f]{8}-(?:[0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}\\}?"?',
			),

		arch_identifier: () =>
			choice("Any CPU", new RustRegex("[a-zA-Z0-9_\\\\-]+")),
	},
});
