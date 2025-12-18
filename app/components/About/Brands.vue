<template>
  <section>
    <h2 class="title">
      Комплектуем интерьеры исключительно оригинальной техникой и&nbsp;мебелью европейских брендов. Не&nbsp;используем реплики.
    </h2>
    <div class="items">
      <Transition
        v-for="rows in colsList"
        appear
        name="anim"
      >
        <ListsBrands class="item" :rows="rows" />
      </Transition>
    </div>
    <div class="btn-wrap" v-if="!grid.lg && canShow">
      <ListsBrandsButtonShow @click="showMore" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import useListBrands from '@/components/Lists/Brands/model/useListBrands';

  const grid = useAppGrid();

  const { canShow, colsList, showMore } = useListBrands();
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
