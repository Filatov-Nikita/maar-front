<template>
  <div>
    <p class="title" v-if="grid.lg">
      Фотографии<br/>интерьера
    </p>
    <BaseHeaderSec v-else class="title" tag="p" :size="grid.md ? 'md' : 'sm'" design="secondary">
      Фотографии интерьера
    </BaseHeaderSec>
    <div class="slider-wrap">
      <Swiper
        class="slider"
        :spaceBetween="6"
        :modules="modules"
        :slidesPerView="'auto'"
        freeMode
        :direction="grid.lg ? 'vertical' : 'horizontal'"
      >
        <SwiperSlide
          class="slide"
          v-for="(image, index) in images"
        >
          <button class="img-wrap" type="button" @click="activeIndex = index; showedModal = true">
            <BaseServerImage class="img" :image="image" loading="lazy" />
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
    <HousesFloorGalleryModal
      v-model:showed="showedModal"
      :images="images"
      :initialSlide="activeIndex"
    />
  </div>
</template>

<script setup lang="ts">
  import { FreeMode } from 'swiper/modules';
  import type { ImageItem } from '@/types/shared';

  defineProps<{
    images: ImageItem[],
  }>();

  const grid = useAppGrid();

  const modules = [ FreeMode ];

  const showedModal = ref(false);
  const activeIndex = ref(0);
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 20px;

    @include lg {
      font-size: 25px;
      line-height: 1;
      letter-spacing: -0.02em;
      text-align: right;
      margin-bottom: 45px;
    }
  }

  .img-wrap {
    opacity: 0.7;
    display: block;
    width: 80px;

    &:hover {
      opacity: 1;
    }

    @include md {
      width: 110px;
    }

    @include lg {
      margin-left: auto;
    }
  }

  .slide {
    width: auto;

    @include lg {
      width: 100%;
      height: auto;
    }
  }

  .img {
    width: 100%;
    border-radius: 2px;
  }
</style>
