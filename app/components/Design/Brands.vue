<template>
  <section>
    <div class="grid">
      <div class="left">
        <BaseHeaderSec class="title2" tag="div" size="sm" design="secondary">
          Комплектация
        </BaseHeaderSec>
        <BaseImageResp
          pictute
          width="738"
          height="800"
          :url="img"
          :md="{
            width: '1392',
            height: '1246',
            url: imgXl,
          }"
          alt="прототип комнаты"
          loading="lazy"
        />
      </div>
      <div class="right">
        <h2 class="title">
          Комплектуем интерьеры исключительно оригинальной техникой и&nbsp;мебелью европейских брендов. Не&nbsp;используем реплики.
        </h2>
        <ListsBrands class="list1" v-if="grid.md" :rows="col1" />
      </div>
    </div>
    <div class="items-wrap">
      <div class="items" v-if="grid.md">
        <ListsBrands
          class="item"
          v-for="col in cols"
          :rows="col"
        />
      </div>
      <div class="items-wrap" v-else>
        <div class="items">
          <Transition
            v-for="rows in colsList"
            appear
            name="anim"
          >
            <ListsBrands class="item item-sm" :rows="rows" />
          </Transition>
        </div>
        <div class="btn-wrap" v-if="!grid.lg && canShow">
          <ListsBrandsButtonShow @click="showMore" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import img from '@/assets/images/design/complekt.jpg';
  import imgXl from '@/assets/images/design/complekt-xl.jpg';
  import { items } from '@/components/Lists/Brands/model/data';
  import useListBrands from '@/components/Lists/Brands/model/useListBrands';

  const grid = useAppGrid();

  const { canShow, colsList, showMore } = useListBrands();

  const col1 = computed(() => items[0] ?? []);
  const cols = computed(() => items.slice(1));
</script>

<style scoped lang="scss">
  .title {
    font-size: 30px;
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: 44px;
    max-width: 585px;

    @include lg {
      text-indent: 120px;
      margin-bottom: 0;
    }

    @include xl {
      text-indent: 200px;
    }
  }

  .anim {
    &-enter-active {
      animation-name: fadeInUp;
      animation-duration: 800ms;
    }
  }

  .btn-wrap {
    margin-top: 24px;
  }

  .grid {
    @include row();
    @include gap(0px, 80px);
    @include gap-md(16px, 0px);
  }

  .left, .right {
    @include col();
    @include size(100%);
    @include size-md(50%);
  }

  .left {
    position: relative;
  }

  .right {
    @include lg {
      padding-top: 16px;
      border-top: 1px solid var(--color-black-1-2);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 30px;
    }
  }

  .items-wrap {
    @include md {
      margin-top: 150px;
    }
  }

  .items {
    @include row();
    @include gap(0px, 0px);
    @include gap-md(16px, 0px);
  }

  .item {
    @include col();
    @include size(100%);
    @include size-md(50%);
  }

  .list1 {
    border-bottom: 1px solid var(--color-black-1-2);
  }

  .title2 {
    position: absolute;
    top: 14px;
    left: 18px;
  }
</style>
