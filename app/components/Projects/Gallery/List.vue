<template>
  <div class="items">
    <Swiper :spaceBetween="16" :slidesPerView="1.15" :slidesPerGroup="1">
      <SwiperSlide>
        <ProjectsGalleryItem class="list-item" name="Майами" period="Июн. 2026" :photoUrl="Image" />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectsGalleryItem class="list-item" name="Династия" period="Июн. 2026" :photoUrl="Image" />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectsGalleryItem class="list-item" name="Эль-Пасо" period="Июн. 2026" :photoUrl="Image" />
      </SwiperSlide>
    </Swiper>
    <div class="text-center btn-wrap">
      <BaseLinkNext class="w-full-sm" href="/">Все проекты</BaseLinkNext>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Image from '@/assets/images/temp/proj-gal.jpg';
  import { Swiper, SwiperSlide } from 'swiper/vue';
</script>

<style scoped lang="scss">
  .list-item {
    display: block;
    width: 100%;
  }

  .btn-wrap {
    margin-top: 22px;
  }
</style>
