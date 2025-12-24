<template>
  <div class="gallery-primary">
    <Swiper
      class="main-slider"
      :spaceBetween="16"
      :slidesPerView="1"
      :slidesPerGroup="1"
      :navigation="{
        prevEl,
        nextEl,
      }"
      :modules="modules1"
      :thumbs="{ swiper: swiper2 }"
      @swiper="swiper1 = $event"
    >
      <SwiperSlide
        v-for="image in images"
      >
        <BaseServerImage class="w-full" :image="image" loading="lazy" />
      </SwiperSlide>
      <button class="nav-btn nav-btn--prev" ref="prevEl" type="button">
        <BaseIcon name="arrow-slide-left" fit />
      </button>
      <button class="nav-btn nav-btn--next" ref="nextEl" type="button">
        <BaseIcon name="arrow-slide-right" fit />
      </button>
    </Swiper>
    <div class="slider-mini-wrap">
      <Swiper
        class="swiper2"
        :spaceBetween="6"
        :slidesPerView="4"
        :slidesPerGroup="4"
        :modules="modules2"
        freeMode
        watchSlidesProgress
        @swiper="swiper2 = $event"
      >
        <SwiperSlide
          v-for="image in images"
        >
          <button class="btn-img" type="button">
            <BaseServerImage class="w-full" :image="image" loading="lazy" />
          </button>
        </SwiperSlide>
      </Swiper>
      <button type="button" class="btn-next" @click="mainNext">
        <BaseIcon class="btn-next__icon" name="arrow-mini-next" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ImageItem } from '@/types/shared';
  import type { Swiper as SwiperInst } from 'swiper/types';
  import { Thumbs, FreeMode, Navigation } from 'swiper/modules';

  defineProps<{
    images: ImageItem[],
  }>();

  const prevEl = ref<HTMLElement | null>(null);
  const nextEl = ref<HTMLElement | null>(null);
  const swiper1 = ref<SwiperInst | null>(null);
  const swiper2 = ref<SwiperInst | null>(null);
  const modules1 = [ Thumbs, Navigation ];
  const modules2 = [ Thumbs, FreeMode ];

  function mainNext() {
    swiper1.value?.slideNext();
  }
</script>

<style scoped lang="scss">
  .main-slider {
    margin-bottom: 10px;
  }

  .btn-img {
    width: 100%;
    height: auto;
    opacity: 0.7;
  }

  .swiper2 {
    flex-grow: 1;
  }

  .swiper2 :deep(.swiper-slide-thumb-active .btn-img) {
    opacity: 1;
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    width: 32px;
    height: 32px;
    padding: 6px;

    &--prev {
      left: 10px;
    }

    &--next {
      right: 10px;
    }
  }

  .slider-mini-wrap {
    display: flex;
  }

  .btn-next {
    width: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &__icon {
      width: 12px;
      height: 12px;
    }
  }
</style>
