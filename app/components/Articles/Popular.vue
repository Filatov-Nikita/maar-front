<template>
  <div v-if="items && items.length > 0">
    <BaseHeaderSec class="title" :size="grid.lg ? 'lg' : 'sm'" design="secondary">
      Популярное
    </BaseHeaderSec>
    <div class="items">
      <ArticlesListItem
        class="list-item"
        v-for="(item, index) in items"
        :key="item.code"
        :item="item"
        :hidePhoto="index > 0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const grid = useAppGrid();
  const api = useNuxtApp().$api;
  const items = useDataOrFail(
    await useAsyncData(() => api.articles.all({ type: '7', cnt: 5 }))
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
</style>
