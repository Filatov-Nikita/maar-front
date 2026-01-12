<template>
  <div v-if="items && items.length > 0">
    <div class="grid">
      <div class="left" v-if="grid.lg">
        <ArticlesListItem
          v-if="items[0]"
          class="list-item"
          :item="items[0]"
        />
      </div>
      <div class="right">
        <BaseHeaderSec class="title" :size="grid.lg ? 'lg' : 'sm'" design="secondary">
          Новое
        </BaseHeaderSec>
        <div class="items">
          <template
            v-for="(item, index) in items"
            :key="item.code"
          >
            <ArticlesListItem
              v-if="!grid.lg || index > 0"
              class="list-item"
              :hidePhoto="index > 0"
              :item="item"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const grid = useAppGrid();
  const api = useNuxtApp().$api;
  const items = useDataOrFail(
    await useAsyncData(() => api.articles.all({ type: '6', cnt: 5 }))
  );
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 17px;

    @include xl {
      margin-bottom: 50px;
    }
  }

  .list-item {
    display: block;
    width: 100%;

    & + & {
      margin-top: 16px;
    }
  }

  .grid {
    @include row();
    @include gap(0px, 0px);
    @include gap-lg(40px, 0px);
    @include gap-xl(100px, 0px);
  }

  .left {
    @include col();
    @include size(100%);
    @include size-lg(60%);
  }

  .right {
    @include col();
    @include size(100%);
    @include size-lg(40%);
  }
</style>
