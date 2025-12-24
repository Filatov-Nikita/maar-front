<template>
  <section class="floor-one">
    <div class="wrap">
      <div ref="col1Ref" class="col1">
        <h3 class="title">{{ floorNumber }} этаж</h3>
        <HousesFloorPlaces :items="places" />
      </div>
      <div ref="col2Ref" class="col2">
        <div class="img-wrap">
          <BaseServerImage
            :width="1488"
            :height="1656"
            :image="floorMapImg"
            loading="lazy"
          />
        </div>
      </div>
      <div ref="col3Ref" class="col3">
        <HousesFloorGallery class="floor-gal" :images="gallery" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { ImageItem } from '@/types/shared';
  import { throttle } from 'throttle-debounce';

  defineProps<{
    floorNumber: number,
    places: string[],
    floorMapImg: string,
    gallery: ImageItem[],
  }>();

  const grid = useAppGrid();

  const col1Ref = ref<HTMLElement | null>(null);
  const col2Ref = ref<HTMLElement | null>(null);
  const col3Ref = ref<HTMLElement | null>(null);
  const col3Height = ref('200px');

  onMounted(() => {
    calcFn();
    window.addEventListener('resize', calcFn);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', calcFn);
  })

  const calcFn = throttle(300, calcSliderHeight);

  function calcSliderHeight() {
    if(col1Ref.value && col2Ref.value && col3Ref.value && grid.value.lg) {
      const header = col3Ref.value.querySelector<HTMLElement>('.title');
      const h1 = header?.offsetHeight ?? 0;
      const mt = parseFloat(
        header ? window.getComputedStyle(header).marginBottom : '0'
      );
      const max = col1Ref.value.offsetHeight > col2Ref.value.offsetHeight
        ? col1Ref.value.offsetHeight
        : col2Ref.value.offsetHeight;
      col3Height.value = Math.floor(max - h1 - mt) + 'px';
    }
  }
</script>

<style scoped lang="scss">
  .floor-one {
    padding-top: 20px;
    border-top: 1px solid var(--color-dark-1-2);

    @include lg {
      padding-top: 32px;
    }
  }

  .title {
    font-size: 35px;
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: 25px;

    @include lg {
      font-size: 55px;
      margin-bottom: 40px;
    }
  }

  .wrap {
    @include row();
    @include gap(0px, 40px);
    @include gap-lg(60px, 0px);

    @include lg {
      align-items: flex-start;
    }
  }

  .col1, .col2, .col3 {
    @include col();
  }

  .col1 {
    @include size(100%);
    @include size-lg(20%);
  }

  .col2 {
    @include size(100%);
    @include size-lg(60%);
  }

  .col3 {
    @include size(100%);
    @include size-lg(20%);
  }

  .floor-gal :deep(.slider) {
    @include lg {
      height: v-bind(col3Height);
    }
  }

  .img-wrap {
    margin: 0 auto;
    max-width: 550px;

    @include lg {
      max-width: 800px;
    }
  }
</style>
