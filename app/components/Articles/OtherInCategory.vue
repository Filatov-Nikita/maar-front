<template>
  <section>
    <BaseHeaderSec class="title" design="secondary" :size="grid.lg ? 'lg' : 'sm'">
      Другое по этой теме
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
  </section>
</template>

<script setup lang="ts">
  const grid = useAppGrid();

  const props = defineProps<{
    currentId: string,
  }>();

  const key = computed(() => `articles-other-${props.currentId}`);
  const api = useNuxtApp().$api;
  const items = useDataOrFail(
    await useAsyncData(
      key,
      () => api.articles.all({ cnt: 8, hideid: props.currentId })
    ),
  );
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 20px;

    @include lg {
      margin-bottom: 32px;
    }
  }

  .items {
    @include row();
    @include gap(0px, 16px);
    @include gap-md(40px, 20px);
    @include gap-lg(75px, 50px);
    max-width: 1000px;
  }

  .list-item {
    @include col();
    @include size(100%);
    @include size-md(50%);
  }
</style>
