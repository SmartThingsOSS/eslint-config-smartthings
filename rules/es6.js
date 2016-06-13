module.exports = {
	'env': {
		'es6': true
	},
	'parserOptions': {
		'ecmaVersion': 6,
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true
		}
	},
	'rules': {
		// require braces around arrow function bodies
		'arrow-body-style': 0,
		// require parens in arrow function arguments
		'arrow-parens': 0,
		// require space before/after arrow function's arrow
		'arrow-spacing': 0,
		// verify super() callings in constructors
		'constructor-super': 2,
		// enforce the spacing around the * in generator functions
		'generator-star-spacing': 0,
		// disallow modifying variables of class declarations
		'no-class-assign': 2,
		// disallow arrow functions where they could be confused with comparisons
		'no-confusing-arrow': 2,
		// disallow modifying variables that are declared using const
		'no-const-assign': 2,
		// disallow duplicate name in class members
		'no-dupe-class-members': 2,
		// disallow duplicate module imports
		'no-duplicate-imports': 2,
		// disallow Symbol Constructor
		'no-new-symbol': 2,
		// disallow specified modules when loaded by import
		'no-restricted-imports': 0,
		// disallow to use this/super before super() calling in constructors.
		'no-this-before-super': 2,
		// disallow unnecessary computed property keys in object literals
		'no-useless-computed-key': 2,
		// disallow renaming import, export, and destructured assignments to the same name
		'no-useless-rename': 0,
		// disallow unnecessary constructors
		'no-useless-constructor': 2,
		// require let or const instead of var
		'no-var': 2,
		// require method and property shorthand syntax for object literals
		'object-shorthand': 0,
		// require arrow functions as callbacks
		'prefer-arrow-callback': [2, { 'allowNamedFunctions': true }],
		// suggest using of const declaration for variables that are never modified after declared
		'prefer-const': 2,
		// suggest using Reflect methods where applicable
		'prefer-reflect': 0,
		// require rest parameters instead of arguments
		'prefer-rest-params': 0,
		// suggest using the spread operator instead of .apply()
		'prefer-spread': 0,
		// require template literals instead of string concatenation
		'prefer-template': 2,
		// disallow generator functions that do not have yield
		'require-yield': 0,
		// enforce spacing between rest and spread operators and their expressions
		'rest-spread-spacing': [2, 'never'],
		// enforce sorted import declarations within modules
		'sort-imports': 0,
		// require or disallow spacing around embedded expressions of template strings
		'template-curly-spacing': [2, 'never'],
		// require or disallow spacing around the * in yield* expressions
		'yield-star-spacing': [2, 'after']
	}
};
