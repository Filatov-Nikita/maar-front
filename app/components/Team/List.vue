<template>
  <Swiper :spaceBetween="16" :slidesPerView="1.15" :slidesPerGroup="1">
    <SwiperSlide>
      <TeamListItem name="Герасимова Алёна" position="Арт-директор дизайн-студии" :photoUrl="Image" />
    </SwiperSlide>
    <SwiperSlide>
      <TeamListItem name="Герасимова Алёна" position="Арт-директор дизайн-студии" :photoUrl="Image" />
    </SwiperSlide>
      <SwiperSlide>
      <TeamListItem name="Герасимова Алёна" position="Арт-директор дизайн-студии" :photoUrl="Image" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import Image from '@/assets/images/temp/team.jpg';
  import { Swiper, SwiperSlide } from 'swiper/vue';
</script>
