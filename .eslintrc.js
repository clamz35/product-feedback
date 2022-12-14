module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
	],
	parserOptions: {
		ecmaVersion: 13,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],

	overrides: [
		{
			files: ['*.ts', '*.vue'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'error',
			},
		},
	],

	rules: {
		'no-unused-expressions': 'off',
		'vue/no-v-html': 'off',
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-nested-ternary': 'error',
		'no-unneeded-ternary': 'error',
		'func-style': ['error', 'expression'],
		'no-extra-semi': ['error'],
		'no-async-promise-executor': ['error'],
		'no-await-in-loop': ['error'],
		'no-multi-assign': ['error'],
		'no-multi-str': ['error'],
		'no-new': ['error'],
		'no-return-await': ['error'],
		'no-template-curly-in-string': ['warn'],
		'prefer-template': ['warn'],
	},
};
