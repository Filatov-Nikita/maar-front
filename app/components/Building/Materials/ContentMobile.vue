<template>
  <div class="grid">
    <div class="items">
      <article
        class="item"
        v-for="item in items"
      >
        <div class="icon">
          <BaseIcon :name="item.icon" fit />
        </div>
        <p class="text" v-html="item.text"></p>
      </article>
    </div>
    <div class="img-wrap">
      <BaseImageResp
        class="w-full"
        pictute
        width="740"
        height="800"
        :url="house2"
        :md="{
          width: '1044',
          height: '584',
          url: house2Xl
        }"
        loading="lazy"
        alt="фото дома в стиле хайтек"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import house2 from '@/assets/images/building/house2.jpg';
  import house2Xl from '@/assets/images/building/house2-xl.jpg';

  interface Item {
    icon: string,
    text: string,
  }

  defineProps<{
    items: Item[],
  }>();
</script>

<style scoped lang="scss">
  .items {
    @include row();
    @include gap(16px, 32px);
  }

  .item {
    @include col();
    @include size(50%);
  }

  .icon {
    width: 52px;
    height: 52px;
  }

  .text {
    margin-top: 16px;
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.03em;
    max-width: 300px;
  }

  .img-wrap {
    margin-top: 57px;
  }
</style>
