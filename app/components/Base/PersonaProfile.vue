<template>
  <div class="profile">
    <div class="photo-wrap">
      <img class="photo" width="118" height="118" :src="url" :alt="name" loading="lazy" />
    </div>
    <div class="text-body">
      <p class="name">{{ name }}</p>
      <p class="position">{{ position }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      name: string,
      position: string,
      photoUrl?: string | null,
      server?: boolean,
      fallback?: string,
    }>(),
    {
      server: false,
      fallback: '/images/no-photo-sq.jpg',
    }
  );

  const config = useRuntimeConfig().public;

  const url = computed(() => {
    if(!props.photoUrl) return props.fallback;
    else if(props.server) return config.filesBase + props.photoUrl;
    return props.photoUrl;
  });
</script>

<style scoped lang="scss">
  .profile {
    display: flex;
    align-items: flex-end;
    gap: 12px;
  }

  .photo-wrap {
    padding-bottom: 4px;
  }

  .photo {
    width: 59px;
    height: 59px;

    @include lg {
      width: 70px;
      height: 70px;
    }
  }

  .text-body {
    flex-grow: 1;
  }

  .name, .position {
    font-size: 15px;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  .name {
    opacity: 0.5;
  }
</style>
