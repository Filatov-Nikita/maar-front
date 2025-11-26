<template>
  <component class="link-next" :is="tag">
    <span>
      <slot></slot>
    </span>
    <span class="icon">
      <BaseIcon name="arrow-right-long" fit />
    </span>
  </component>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      tag?: string,
    }>(),
    { tag: 'a' },
  );
</script>

<style scoped lang="scss">
  .link-next {
    padding: 8px 0;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    letter-spacing: -0.03em;
    line-height: 1;
    font-size: 21px;
    font-weight: 400;

    &:hover {
      opacity: 0.7;
    }
  }

  .icon {
    width: 26px;
    height: 16px;
  }
</style>
