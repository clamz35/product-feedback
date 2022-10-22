export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	const http = $fetch.create({
		baseURL: config.SERVER_BASE_URL ?? config.BASE_URL,
		headers: [['Authorization', `bearer ${config.API_KEY}`]],
	});

	return {
		provide: {
			http,
		},
	};
});
