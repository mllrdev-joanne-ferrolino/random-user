module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/prettier',
		'@vue/prettier/@typescript-eslint',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/no-deprecated-slot-attribute': 'off',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/interface-name-prefix': 'off',
		// we disable 'no-shadow' and enable '@typescript-eslint/no-shadow' as documented in:
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'vue/no-unused-components':
			process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'vue/no-unused-vars':
			process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'@typescript-eslint/no-empty-function':
			process.env.NODE_ENV === 'production' ? 'error' : 'warn',
	},
};
