<template>
  <header class="header">
    <div class="wrapper">
      <div class="header-body">
        <NuxtLink class="logo-link" :to="{ name: 'index' }">
          <img class="w-full" width="58" height="13" src="~/assets/images/logo.svg" alt="логотип МААР" />
        </NuxtLink>
        <button class="menu-btn" type="button">
          <span class="menu-btn__icon">
            <BaseIcon name="burger" fit />
          </span>
          <span>Меню</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .header-body {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  .logo-link {
    width: 58px;

    &:hover {
      opacity: 0.8;
    }
  }

  .menu-btn {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    line-height: 1.3;
    font-weight: 400;
    letter-spacing: -0.03em;

    &:hover {
      opacity: 0.8;
    }

    &__icon {
      width: 11px;
      height: 5px;
      color: var(--color-black);
    }
  }
</style>
