module.exports = {
	postcss: {
		plugins: [
			require('tailwindcss')('./src/tailwind.config.js'),
			require('autoprefixer'),
		],
	},
};
