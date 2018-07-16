module.exports = {
	extends: [
		'eslint-config-smartthings/rules/best-practices',
		'eslint-config-smartthings/rules/errors',
		'eslint-config-smartthings/rules/node',
		'eslint-config-smartthings/rules/strict',
		'eslint-config-smartthings/rules/style',
		'eslint-config-smartthings/rules/variables'
	],
	env: {
		browser: true,
		node: true,
		amd: false,
		mocha: false,
		jasmine: false
	},
	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true,
			modules: true
		}
	},
	globals: {},
	rules: {}
};
