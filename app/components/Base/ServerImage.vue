<template>
  <img v-if="image" :width="image.width" :height="image.height" :src="fullPath" />
  <img v-else :width="imageFallback.width" :height="imageFallback.height" :src="imageFallback.src" />
</template>

<script setup lang="ts">
  import type { ImageItem } from '@/types/shared';

  const props = defineProps<{
    image: ImageItem | null,
    fallback?: {
      width: number,
      height: number,
      src: string,
    },
  }>();

  const config = useRuntimeConfig().public;

  const fullPath = computed(() => {
    if(!props.image) return '';
    if(props.image.src.match(/^https?/) !== null) return props.image.src;
    return config.filesBase + props.image.src;
  });

  const imageFallback = computed(() => {
    if(props.fallback) return props.fallback;
    return {
      width: '1280',
      height: '720',
      src: '/images/no-photo.jpg',
    }
  });
</script>
