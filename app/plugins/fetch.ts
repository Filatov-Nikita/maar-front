export default defineNuxtPlugin({
  name: 'fetch',
  setup() {
    const config = useRuntimeConfig().public;

    const appFetch = $fetch.create({
      baseURL: config.apiBase,
      retry: false,
    });

    return {
      provide: {
        appFetch,
      }
    }
  }
});
