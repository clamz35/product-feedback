import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
	rootDir: 'src/',
	telemetry: false,
	ssr: true,
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
		public: {
			API_KEY: process.env.API_KEY,
			BASE_URL: process.env.BASE_URL,
		},
	},

	typescript: {
		strict: true,
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
