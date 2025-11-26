<template>
  <component
    class="header-sec"
    :class="[ `header-sec--${size}`, `header-sec--${design}` ]"
    :is="tag"
  >
    <span>/</span> <slot></slot>
  </component>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      tag?: string,
      size?: 'sm' | 'md',
      design?: 'primary' | 'secondary',
    }>(),
    {
      tag: 'h2',
      size: 'sm',
      design: 'primary',
    },
  );
</script>

<style scoped lang="scss">
  .header-sec {
    letter-spacing: -0.04em;
    line-height: 1;

    &--sm {
      font-size: 15px;
    }

    &--md {
      font-size: 21px;
    }

    &--secondary {
      opacity: 0.5;
    }
  }
</style>
