module.exports = {
	'rules': {
		// enforce spacing inside array brackets
		'array-bracket-spacing': 0,
		// enforce consistent spacing inside single-line blocks
		'block-spacing': [2, 'always'],
		// enforce one true brace style
		'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
		// require camel case names
		'camelcase': [2, { 'properties': 'never' }],
		// require or disallow trailing commas
		'comma-dangle': [2, 'never'],
		// enforce spacing before and after comma
		'comma-spacing': [2, { 'before': false, 'after': true }],
		// enforce one true comma style
		'comma-style': [2, 'last'],
		// require or disallow padding inside computed properties
		'computed-property-spacing': 0,
		// enforces consistent naming when capturing the current execution context
		'consistent-this': 0,
		// enforce newline at the end of file, with no multiple empty lines
		'eol-last': 2,
		// require or disallow spacing between function identifiers and their invocations
		'func-call-spacing': [2, 'never'],
		// require function expressions to have a name
		'func-names': 1,
		// enforces use of function declarations or expressions
		'func-style': [2, 'declaration', { 'allowArrowFunctions': true }],
		// this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
		'id-length': [2, { 'min': 2, 'properties': 'never' }],
		// this option sets a specific tab width for your code
		'indent': [2, 'tab', { 'SwitchCase': 1 }],
		// specify whether double or single quotes should be used in JSX attributes
		'jsx-quotes': 2,
		// enforces spacing between keys and values in object literal properties
		'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
		// enforce spacing before and after keywords
		'keyword-spacing': [2, { 'before': true, 'after': true, 'overrides': {}}],
		// enforce position of line comments
		'line-comment-position': 0,
		// enforces empty lines around comments
		'lines-around-comment': 0,
		// require or disallow newlines around directives
		'lines-around-directive': 0,
		// disallow mixed 'LF' and 'CRLF' as linebreaks
		'linebreak-style': 0,
		// enforce a maximum depth that blocks can be nested
		'max-depth': 0,
		// enforce a maximum line length
		'max-len': 0,
		// enforce a maximum file length
		'max-lines': 0,
		// specify the maximum depth callbacks can be nested
		'max-nested-callbacks': 0,
		// enforce a maximum number of parameters in function definitions
		'max-params': 0,
		// enforce a maximum number of statements allowed in function blocks
		'max-statements': 0,
		// enforce a maximum number of statements allowed per line
		'max-statements-per-line': 0,
		// enforce newlines between operands of ternary expressions
		'multiline-ternary': 0,
		// require a capital letter for constructors
		'new-cap': [2, { 'newIsCap': true }],
		// disallow the omission of parentheses when invoking a constructor with no arguments
		'new-parens': 2,
		// allow/disallow an empty newline after var statement
		'newline-after-var': 0,
		// require newline before return statement
		'newline-before-return': 0,
		// disallow use of the Array constructor
		'no-array-constructor': 2,
		// disallow bitwise operators
		'no-bitwise': 0,
		// disallow use of the continue statement
		'no-continue': 0,
		// disallow comments inline after code
		'no-inline-comments': 0,
		// disallow if as the only statement in an else block
		'no-lonely-if': 2,
		// disallow mixes of different operators
		'no-mixed-operators': 2,
		// disallow mixed spaces and tabs for indentation
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		// disallow multiple empty lines
		'no-multiple-empty-lines': [2, { 'max': 2 }],
		// disallow negated conditions
		'no-negated-condition': 1,
		// disallow nested ternary expressions
		'no-nested-ternary': 2,
		// disallow use of the Object constructor
		'no-new-object': 2,
		// disallow the unary operators ++ and --
		'no-plusplus': 0,
		// disallow specified syntax
		'no-restricted-syntax': 0,
		// disallow tabs
		'no-tabs': 0,
		// disallow the use of ternary operators
		'no-ternary': 0,
		// disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 2,
		// disallow dangling underscores in identifiers
		'no-underscore-dangle': 0,
		// disallow the use of Boolean literals in conditional expressions
		'no-unneeded-ternary': 0,
		// disallow whitespace before properties
		'no-whitespace-before-property': 2,
		// enforce consistent line breaks inside braces
		'object-curly-newline': 0,
		// require or disallow padding inside curly braces
		'object-curly-spacing': [2, 'always'],
		// enforce placing object properties on separate lines
		'object-property-newline': 0,
		// require or disallow newlines around var declarations
		'one-var-declaration-per-line': [2, 'always'],
		// allow just one var statement per function
		'one-var': [2, 'never'],
		// require assignment operator shorthand where possible or prohibit it entirely
		'operator-assignment': 0,
		// enforce operators to be placed before or after line breaks
		'operator-linebreak': 0,
		// enforce padding within blocks
		'padded-blocks': [2, 'never'],
		// require quotes around object literal property names
		'quote-props': 0,
		// specify whether double or single quotes should be used
		'quotes': [2, 'single', 'avoid-escape'],
		// require JSDoc comments
		'require-jsdoc': 0,
		// require identifiers to match the provided regular expression
		'id-match': 0,
		// enforce spacing before and after semicolons
		'semi-spacing': [2, { 'before': false, 'after': true }],
		// require or disallow use of semicolons instead of ASI
		'semi': [2, 'always'],
		// requires object keys to be sorted
		'sort-keys': 0,
		// sort variables within the same declaration block
		'sort-vars': 0,
		// require or disallow space before blocks
		'space-before-blocks': 2,
		// require or disallow space before function opening parenthesis
		'space-before-function-paren': [2, {
			'anonymous': 'always',
			'named': 'never'
		}],
		// require or disallow spaces inside parentheses
		'space-in-parens': [2, 'never'],
		// require spaces around operators
		'space-infix-ops': 2,
		// Require or disallow spaces before/after unary operators
		'space-unary-ops': 0,
		// require or disallow a space immediately following the // or /* in a comment
		'spaced-comment': [2, 'always', {
			'exceptions': ['-', '+'],
			'markers': ['=', '!']           // space here to support sprockets directives
		}],
		// require or disallow the Unicode BOM
		'unicode-bom': [2, 'never'],
		// require regex literals to be wrapped in parentheses
		'wrap-regex': 0
	}
};
