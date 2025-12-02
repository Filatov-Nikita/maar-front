<template>
  <div class="items" v-if="grid.lg">
    <TeamListItem class="item-one" name="Герасимова Алёна" position="Арт-директор дизайн-студии" :photoUrl="Image" />
    <TeamListItem class="item-one" name="Герасимова Алёна" position="Арт-директор дизайн-студии" :photoUrl="Image" />
    <TeamListItem class="item-one" name="Герасимова Алёна" position="Арт-директор дизайн-студии" :photoUrl="Image" />
    <TeamListItem class="item-one" name="Герасимова Алёна" position="Арт-директор дизайн-студии" :photoUrl="Image" />
    <TeamListItem class="item-one" name="Герасимова Алёна" position="Арт-директор дизайн-студии" :photoUrl="Image" />
    <TeamListItem class="item-one" name="Герасимова Алёна" position="Арт-директор дизайн-студии" :photoUrl="Image" />
  </div>
  <Swiper v-else :spaceBetween="16" :slidesPerView="1.15" :slidesPerGroup="1">
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

  const grid = useAppGrid();
</script>


<style scoped lang="scss">
  .items {
    @include row();
    @include gap(16px, 60px);
  }

  .item-one {
    @include col();
    @include size(25%);
  }
</style>
