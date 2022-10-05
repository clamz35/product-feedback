export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const http = $fetch.create({
    baseURL: config.BASE_URL,
    headers: [["Authorization", `bearer ${config.API_KEY}`]],
  });

  return {
    provide: {
      http,
    },
  };
});
