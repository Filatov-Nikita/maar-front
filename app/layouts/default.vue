<template>
  <div class="l-main">
    <BlockHeader class="l-header" :showedMenu="showed" @update:showed="toggle" />
    <BlockNavMenu :showed="showed" @update:showed="toggle" />
    <slot></slot>
    <BlockFooter />
  </div>
</template>

<script setup lang="ts">
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
  }

  .l-main {
    position: relative;
  }
</style>
