<template>
  <div
    class="l-main"
    :class="[`l-main--${design}`]"
  >
    <BlockHeader class="l-header" :showedMenu="showed" @update:showed="toggle" />
    <BlockNavMenu :showed="showed" @update:showed="toggle" />
    <slot></slot>
    <BlockFooter class="l-footer" />
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const design = computed(() => route.meta.design ?? 'base');

  const showed = ref(false);

  function toggle(val: boolean) {
    showed.value = val;
  }
</script>


<style scoped lang="scss">
  .l-header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5000;
    background-color: var(--bg-header);
  }

  .l-main {
    position: relative;
    background-color: var(--bg-body);
    &--white {
      --bg-header: var(--color-white);
      --bg-footer: var(--color-app-bg);
      --bg-body: var(--color-white);
    }

    &--base {
      --bg-header: var(--color-app-bg);
      --bg-footer: var(--color-app-bg);
      --bg-body: var(--color-app-bg);
    }
  }

  .l-footer {
    background-color: var(--bg-footer);
  }
</style>
