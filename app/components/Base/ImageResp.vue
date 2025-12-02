<template>
  <picture v-if="pictute">
    <source v-if="xl" :width="xl.width" :height="xl.height" :srcset="xl.url" :media="`(min-width: ${$thresholds.lg}px)`" />
    <source v-if="md" :width="md.width" :height="md.height" :srcset="md.url" :media="`(min-width: ${$thresholds.md}px)`" />
    <source :width="width" :height="height" :srcset="url" media="(min-width: 0px)" />
    <img v-bind="$attrs" :width="width" :height="height" :src="url" :alt="alt" :loading="loading" />
  </picture>
  <img v-else v-bind="$attrs" :width="width" :height="height" :src="url" :alt="alt" :loading="loading" />
</template>

<script setup lang="ts">
  interface Params {
    url: string,
    width?: string | number,
    height?: string | number,
  }

  withDefaults(
    defineProps<{
      url: string,
      width?: string | number,
      height?: string | number,
      loading?: 'lazy',
      alt?: string,
      pictute?: boolean,
      xl?: Params,
      md?: Params,
    }>(),
    {
      pictute: false,
    }
  );

  defineOptions({
    inheritAttrs: false,
  });
</script>
