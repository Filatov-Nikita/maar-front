<template>
  <div v-if="items && items.length > 0">
    <div class="decor-wrap">
      <img
        class="w-full"
        width="221"
        height="129"
        src="@/assets/images/articles/cubes.svg"
        alt="кубики"
        loading="lazy"
      >
    </div>
    <BaseHeaderSec class="title" :size="grid.lg ? 'lg' : 'sm'" design="secondary">
      Рекомендуем
    </BaseHeaderSec>
    <div class="items">
      <ArticlesListItem
        class="list-item"
        v-for="item in items"
        :key="item.code"
        :item="item"
        hidePhoto
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const grid = useAppGrid();
  const api = useNuxtApp().$api;
  const items = useDataOrFail(
    await useAsyncData(() => api.articles.all({ type: '8', cnt: 5 }))
  );
</script>

<style scoped lang="scss">
  .list-item {
    display: block;
    width: 100%;

    & + & {
      margin-top: 16px;
    }
  }

  .title {
    margin-bottom: 17px;

    @include xl {
      margin-bottom: 50px;
    }
  }

  .decor-wrap {
    max-width: 220px;
    margin-bottom: 60px;
  }
</style>
