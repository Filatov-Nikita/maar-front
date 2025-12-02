<template>
  <div class="profile">
    <div class="photo-wrap">
      <img class="photo" width="118" height="118" :src="photoUrl" :alt="name" loading="lazy" />
    </div>
    <div class="text-body">
      <p class="name">{{ name }}</p>
      <p class="position">{{ position }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    name: string,
    position: string,
    photoUrl: string,
  }>();
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
