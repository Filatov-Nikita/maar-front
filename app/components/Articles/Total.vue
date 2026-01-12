<template>
  <div v-if="items && items.length > 0">
    <BaseHeaderSec class="title" :size="grid.lg ? 'lg' : 'sm'" design="secondary">
      Все статьи
    </BaseHeaderSec>
    <div class="items">
      <TransitionGroup name="articles">
        <ArticlesListItem
          class="list-item"
          v-for="(item, index) in itemsList"
          :key="item.code"
          :item="item"
          hidePhoto
        />
      </TransitionGroup>
    </div>
    <div v-show="canShow" class="btn-wrap">
      <BaseBtnShowMore @click="showMore" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const grid = useAppGrid();
  const api = useNuxtApp().$api;
  const items = useDataOrFail(
    await useAsyncData(() => api.articles.all({ cnt: 50 }))
  );

  const { itemsList, canShow, showMore } = usePugLocal(items, 8);
</script>

<style scoped lang="scss">
  .items {
    @include row();
    @include gap(0px, 16px);
    @include gap-lg(75px, 50px);
    @include lg {
      max-width: 1000px;
    }
  }

  .list-item {
    @include col();
    @include size(100%);
    @include size-lg(50%);
  }

  .title {
    margin-bottom: 17px;

    @include xl {
      margin-bottom: 50px;
    }
  }

  .btn-wrap {
    margin-top: 26px;

    @include xl {
      margin-top: 60px;
    }
  }

  .articles {
    &-enter-active {
      animation-name: fadeIn;
      animation-duration: 300ms;
    }
  }
</style>
