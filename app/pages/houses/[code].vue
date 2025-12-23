<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <h1 class="h1 bread-mb">{{ house.name }}</h1>
      <HousesListShort />
    </div>
  </main>
</template>

<script setup lang="ts">
  const bread = useBreadcrumbsStore();
  bread.setPathsNames('index', 'houses');

  const api = useNuxtApp().$api;
  const route = useRoute();
  const code = computed(() => route.params.code as string);
  const res = await useAsyncData(code, () => api.houses.show(code.value));
  const data = useDataOrFail(res);
  const house = computed(() => data.value[0]);

  bread.appendPath({
    name: house.value.name,
    to: { name: 'houses-code', params: { code: code.value } },
  });
</script>
