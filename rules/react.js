module.exports = {
	'parser': 'babel-eslint',
	'plugins': [
		'react'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		}
	},
	'rules': {
		// Prevent missing displayName in a React component definition
		'react/display-name': 0,
		// Forbid certain props on Components
		'react/forbid-component-props': 2,
		// Checks all JSX components and verifies that no forbidden propsTypes are used.
		'react/forbid-prop-types': 0,
		// Enforce boolean attributes notation in JSX
		'react/jsx-boolean-value': 2,
		// Enforce the closing bracket location for JSX multiline elements.
		'react/jsx-closing-bracket-location': [2, {
			'selfClosing': 'after-props',
			'nonEmpty': 'after-props'
		}],
		// Enforce or disallow spaces inside of curly braces in JSX attributes
		'react/jsx-curly-spacing': [2, 'always', {
			'allowMultiline': true
		}],
		// Enforce or disallow spaces around equal signs in JSX attributes
		'react/jsx-equals-spacing': [2, 'never'],
		// Restrict file extensions that may contain JSX
		'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
		// Enforce position of the first prop in JSX
		'react/jsx-first-prop-new-line': 0,
		// Ensures that any component or prop methods used to handle events are correctly prefixed.
		'react/jsx-handler-names': [2, {
			'eventHandlerPrefix': 'handle',
			'eventHandlerPropPrefix': 'on'
		}],
		// This option validates a specific indentation style for props.
		'react/jsx-indent-props': [2, 'tab'],
		// Validate JSX indentation
		'react/jsx-indent': [2, 'tab'],
		// Enforce a key prop--namely, one present in an array literal or an arrow function expression.
		'react/jsx-key': 2,
		// Limiting the maximum of props on a single line can improve readability.
		'react/jsx-max-props-per-line': 0,
		// No .bind() or Arrow Functions in JSX Props
		'react/jsx-no-bind': [2, {
			'ignoreRefs': false,
			'allowArrowFunctions': true,
			'allowBind': false
		}],
		// Prevent comments from being inserted as text nodes
		'react/jsx-no-comment-textnodes': 2,
		// Prevent duplicate props in JSX
		'react/jsx-no-duplicate-props': [2, { 'ignoreCase': true }],
		// Prevent usage of unwrapped JSX strings
		'react/jsx-no-literals': 0,
		// Prevent usage of unsafe target='\_blank'
		'react/jsx-no-target-blank': 2,
		// Disallow undeclared variables in JSX
		'react/jsx-no-undef': 2,
		// Enforce PascalCase for user-defined JSX components
		'react/jsx-pascal-case': 2,
		// Enforce props alphabetical sorting
		'react/jsx-sort-props': 0,
		// Validate spacing before closing bracket in JSX
		'react/jsx-space-before-closing': [2, 'always'],
		// Prevent React to be incorrectly marked as unused
		'react/jsx-uses-react': 2,
		// Prevent variables used in JSX to be incorrectly marked as unused
		'react/jsx-uses-vars': 2,
		// Prevent missing parentheses around multilines JSX
		'react/jsx-wrap-multilines': 2,
		// Prevent usage of dangerous JSX properties
		'react/no-danger': 0,
		// Prevent problem with children and props.dangerouslySetInnerHTML
		'react/no-danger-with-children': 2,
		// Prevent usage of deprecated methods
		'react/no-deprecated': 2,
		// Prevent usage of setState in componentDidMount
		'react/no-did-mount-set-state': 2,
		// Prevent usage of setState in componentDidUpdate
		'react/no-did-update-set-state': 2,
		// Prevent direct mutation of this.state
		'react/no-direct-mutation-state': 2,
		// Prevent usage of findDOMNode
		'react/no-find-dom-node': 2,
		// Prevent usage of isMounted
		'react/no-is-mounted': 2,
		// Prevent multiple component definition per file
		'react/no-multi-comp': 2,
		// Prevent usage of the return value of React.render
		'react/no-render-return-value': 2,
		// Prevent usage of setState
		'react/no-set-state': 0,
		// Prevent usage of unknown DOM property
		'react/no-unknown-property': 2,
		// Prefer es6 class instead of createClass for React Components
		'react/prefer-es6-class': 2,
		// Enforce stateless React Components to be written as a pure function
		'react/prefer-stateless-function': 1,
		// Prevent missing props validation in a React component definition
		'react/prop-types': 2,
		// Prevent missing React when using JSX
		'react/react-in-jsx-scope': 2,
		// Enforce React components to have a shouldComponentUpdate method
		'react/require-optimization': 0,
		// Prevent extra closing tags for components without children
		'react/self-closing-comp': 2,
		// Enforce component methods order
		'react/sort-comp': [2, {
			'order': [
				'lifecycle',
				'/^on.+$/',
				'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
				'everything-else',
				'/^render.+$/',
				'render'
			]
		}],
		// Enforce propTypes declarations alphabetical sorting
		'react/sort-prop-types': 0
	}
};
