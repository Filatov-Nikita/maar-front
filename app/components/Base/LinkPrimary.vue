<template>
  <component class="link-primary" :class="[ `link-primary--${size}` ]" :is="tag">
    <span>
      <slot></slot>
    </span>
    <span class="icon" :class="[ `icon--${size}` ]">
      <BaseIcon name="arrow-right-short" fit />
    </span>
  </component>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      tag?: string,
      size?: 'sm' | 'md',
    }>(),
    {
      tag: 'a',
      size: 'sm',
    },
  );
</script>

<style scoped lang="scss">
  .link-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid var(--color-black-1-2);
    line-height: 1;

    &--sm {
      font-size: 17px;
      letter-spacing: -0.01em;
      padding-bottom: 4px;
    }

    &--md {
      font-size: 27px;
      letter-spacing: -0.04em;
      padding-bottom: 6px;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .icon {
    &--sm {
      width: 9px;
      height: 9px;
    }

    &--md {
      width: 18px;
      height: 14px;
    }
  }
</style>
