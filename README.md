# eslint-config-smartthings

[![NPM](https://nodei.co/npm/<package>.png)](https://npmjs.org/package/<package>)

SmartThing's ESLint config, following our style guide.
Based on [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript)

### eslint-config-smartthings

Lints ES6+ but does not lint React. Requires `eslint` and `babel-eslint`.

- Add `"extends": "smartthings"` to your .eslintrc

### eslint-config-smartthings/react

Contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint`, `babel-eslint`, and `eslint-plugin-react`.

- Add `"extends": "smartthings/react"` to your .eslintrc

### eslint-config-smartthings/legacy

Lints ES5 and below. Only requires `eslint`.

- Add `"extends": "smartthings/legacy"` to your .eslintrc

## Resources
- https://github.com/eslint/eslint
- https://github.com/babel/babel-eslint
- https://github.com/yannickcr/eslint-plugin-react
