<template>
  <img v-if="image" :width="size.width" :height="size.height" :src="fullPath" />
  <img v-else :width="imageFallback.width" :height="imageFallback.height" :src="imageFallback.src" />
</template>

<script setup lang="ts">
  import type { ImageItem } from '@/types/shared';

  const props = defineProps<{
    image: ImageItem | string | null,
    width?: number,
    height?: number,
    fallback?: {
      width: number,
      height: number,
      src: string,
    },
  }>();

  const config = useRuntimeConfig().public;

  const fullPath = computed(() => {
    if(!props.image) return '';
    const src = typeof props.image === 'string' ? props.image : props.image.src;
    if(src.match(/^https?/) !== null) return src;
    return config.filesBase + src;
  });

  const imageFallback = computed(() => {
    if(props.fallback) return props.fallback;
    return {
      width: '1280',
      height: '720',
      src: '/images/no-photo.jpg',
    }
  });

  const size = computed(() => {
    if(typeof props.image === 'string') {
      return { width: props.width, height: props.height };
    }
    return { width: props.image?.width, height: props.image?.height };
  });
</script>
