<template>
  <BaseModal v-model="showed">
    <template #after>
      <button class="btn-close" type="button" @click="showed = false">
        <BaseIcon name="close" fit />
      </button>
    </template>
    <div class="full-size">
      <Swiper
        class="full-size slider"
        :spaceBetween="16"
        :initialSlide="initialSlide"
        :modules="modules"
        navigation
      >
        <SwiperSlide
          class="full-size"
          v-for="image in images"
        >
          <div class="full-size img-wrap">
            <BaseServerImage class="img" :image="image" loading="lazy" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
  import type { ImageItem } from '@/types/shared';
  import { Navigation } from 'swiper/modules';

  defineProps<{
    images: ImageItem[],
    initialSlide: number,
  }>();

  const showed = defineModel('showed', { default: false });

  const modules = [ Navigation ];
</script>

<style scoped lang="scss">
  .slider {
    --swiper-theme-color: var(--color-white);
    --swiper-navigation-size: 24px;
  }

  .btn-close {
    position: absolute;
    top: 16px;
    right: 16px;
    display: block;
    width: 32px;
    height: 32px;
    padding: 6px;
    z-index: 10;
    color: var(--color-white);
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
</style>
