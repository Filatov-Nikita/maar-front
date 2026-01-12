<template>
  <section>
    <h2 class="title">
      Комплектуем интерьеры исключительно оригинальной техникой и&nbsp;мебелью европейских брендов. Не&nbsp;используем реплики.
    </h2>
    <div class="items">
      <Transition
        v-for="rows in colslist"
        appear
        name="anim"
      >
        <ListsBrands class="item" :rows="rows" />
      </Transition>
    </div>
    <div class="btn-wrap" v-if="!grid.lg && canShow">
      <BaseBtnShowMore class="w-full" @click="showMore" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { items } from '@/components/Lists/Brands/model/data';

  const grid = useAppGrid();

  const { canShow, itemsList, showMore } = usePugLocal(shallowRef(items), 1);

  const colslist = computed(() => {
    if(grid.value.lg) return items;
    return itemsList.value;
  });
</script>

<style scoped lang="scss">
  .title {
    font-weight: 400;
    font-size: 30px;
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: 45px;

    @include lg {
      max-width: 600px;
      margin-left: auto;
      text-indent: 240px;
    }
  }

  .items {
    @include row();
    @include gap(0px, 0px);
    @include gap-lg(16px, 0px);
  }

  .item {
    @include col();
    @include size(100%);
    @include size-lg(33.3%);
  }

  .btn-wrap {
    margin-top: 16px;
  }

  .anim {
    &-enter-active {
      animation-name: fadeInUp;
      animation-duration: 800ms;
    }
  }
</style>
