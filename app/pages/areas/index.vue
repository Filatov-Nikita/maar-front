<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <h1 class="h1 title">Участки на продажу в&nbsp;лучших локациях Московской области</h1>
      <AreasList :items="items" />
    </div>
  </main>
</template>

<script setup lang="ts">
  useBreadcrumbsStore().setPathsNames('index', 'areas');
  const api = useNuxtApp().$api;
  const items = useDataOrFail(
    await useAsyncData(() => api.areas.all()),
  );
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 20px;
    max-width: 330px;

    @include lg {
      max-width: 430px;
    }
  }
</style>
