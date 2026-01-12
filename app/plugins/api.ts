import createHousesRepo from '@/repositories/houses';
import createArticlesRepo from '@/repositories/articles';

export default defineNuxtPlugin({
  name: 'api',
  dependsOn: [ 'fetch' ],
  setup() {
    const nuxtApp = useNuxtApp();
    const appFetch = nuxtApp.$appFetch;

    const houses = createHousesRepo(appFetch);
    const articles = createArticlesRepo(appFetch);

    return {
      provide: {
        api: {
          houses,
          articles,
        }
      }
    }
  },
});
