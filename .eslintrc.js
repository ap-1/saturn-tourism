// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	plugins: ["simple-import-sort"],
	settings: {
		react: {
			version: "detect",
		},
	},
	extends: [
		"next/core-web-vitals",
		"eslint:recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"plugin:unicorn/recommended",
		"plugin:react-hooks/recommended",
	],
	rules: {
		"no-console": "error",
		"react/react-in-jsx-scope": "off",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
	},
};
