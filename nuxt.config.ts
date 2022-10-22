import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
	rootDir: 'src/',
	telemetry: false,
	typescript: {
		shim: false,
		strict: true,
	},
	nitro: {
		compressPublicAssets: { brotli: true },
		publicAssets: [{ maxAge: 10000 }],
	},
	components: {
		dirs: [
			{
				path: '~/components/ui/form',
				global: true,
			},
			'~/components',
			'~/features/home',
			'~/features/feedback',
			'~/enums',
			'~/constants',
		],
	},
	tailwindcss: {
		exposeConfig: true,
	},
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
	],
	runtimeConfig: {
		SERVER_BASE_URL: process.env.SERVER_BASE_URL ?? process.env.BASE_URL,
		public: {
			API_KEY: process.env.API_KEY,
			BASE_URL: process.env.BASE_URL,
		},
	},

	build: {
		transpile: [
			'@fortawesome/vue-fontawesome',
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/free-regular-svg-icons',
			'@fortawesome/free-solid-svg-icons',
		],
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
});
