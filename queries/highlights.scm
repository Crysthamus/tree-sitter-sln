"Project" @keyword
"EndProject" @keyword
"Global" @keyword
"EndGlobal" @keyword
"ProjectSection" @keyword
"EndProjectSection" @keyword
"GlobalSection" @keyword
"EndGlobalSection" @keyword

(project_section name: (identifier) @function)
(global_section name: (identifier) @function)

(guid_key mode: (identifier) @function)
(config_key mode: (identifier) @function)
(config_value mode: (identifier) @function)

(arch_identifier) @variable

(string) @string
(identifier) @string

(guid) @constant
(section_type) @constant

(version) @number

"=" @operator
"," @punctuation.delimiter
"|" @punctuation.delimiter
"." @punctuation.delimiter
["(" ")"] @punctuation.bracket
