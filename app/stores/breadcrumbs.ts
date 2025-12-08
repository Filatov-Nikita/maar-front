import type { RouteLocationRaw } from 'vue-router';

export interface PathItem {
  name: string,
  href?: string,
  to?: RouteLocationRaw,
}

export const useBreadcrumbsStore = defineStore('breadcrumbsStore', () => {
  const paths = {
    'index': {
      name: 'Главная',
      to: { name: 'index' },
    },
    'contacts': {
      name: 'Контакты',
      to: { name: 'contacts' },
    },
    'articles': {
      name: 'Журнал',
      to: { name: 'articles' },
    },
  } as const satisfies Record<string, PathItem>;

  const items = ref<PathItem[]>([]);

  function setPaths(paths: PathItem[]) {
    items.value = paths;
  }

  function setPathsNames(...args: Array<keyof typeof paths>) {
    items.value = [];
    args.forEach(arg => {
      const item = paths[arg];
      if(!item) throw new Error(`${arg} не найден`);
      items.value.push(item);
    });
  }

  return {
    items,
    setPaths,
    setPathsNames,
  }
});
