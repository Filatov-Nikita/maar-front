<template>
  <article class="item">
    <div class="title-wrap" @click="showed = !showed">
      <span class="icon">
        <BaseIcon name="dash" fit />
      </span>
      <component class="title" :is="titleTag">
        <slot class="title" name="title"></slot>
      </component>
    </div>
    <SlideUpDown class="body-wrap" :active="showed" :duration="300">
      <div class="text">
        <slot name="text"></slot>
      </div>
    </SlideUpDown>
  </article>
</template>

<script setup lang="ts">
  //@ts-ignore
  import SlideUpDown from 'vue-slide-up-down';

  defineProps<{
    titleTag: string,
  }>();

  const showed = ref(false);
</script>

<style scoped lang="scss">
  .item {
    padding: 20px 0 18px;
    border-top: 1px solid var(--color-black-1-2);

    &:last-child {
      border-bottom: 1px solid var(--color-black-1-2);
    }
  }

  .title-wrap {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .title {
    font-size: 19px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  .text {
    font-size: 15px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    padding-top: 18px;
    padding-left: 41px;
  }

  .icon {
    margin-top: 13px;
    flex-shrink: 0;
    width: 25px;
    height: 2px;
  }
</style>
