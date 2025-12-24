<template>
  <div class="items">
    <div class="item"
      v-for="(item, index) in items"
    >
      <span class="index">{{ index + 1 }}.</span>
      <p class="name">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    items: string[],
  }>();
</script>

<style scoped lang="scss">
  .item {
    display: flex;
    gap: 10px;
    font-size: 15px;
    line-height: 1.2;
    & + & {
      margin-top: 5px;
    }
  }

  .index {
    width: 24px;
    flex-shrink: 0;
  }

  .name {
    flex-grow: 1;
    letter-spacing: -0.03em;
  }
</style>
