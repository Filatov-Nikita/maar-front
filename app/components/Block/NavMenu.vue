<template>
  <Teleport to="body">
    <Transition name="menu-anim">
      <div v-if="showed" class="menu">
        <BlockHeader class="menu-header" :showedMenu="showed" @update:showed="updateShowed" />
        <div class="menu-body">
          <nav class="nav" @click="onClick">
            <div class="nav__link-wrap">
              <NuxtLink class="nav__link" to="/">
                Главная
              </NuxtLink>
            </div>
            <div class="nav__link-wrap">
              <NuxtLink class="nav__link" to="/">
                Компания
              </NuxtLink>
            </div>
            <div class="nav__link-wrap">
              <NuxtLink class="nav__link" :to="{ name: 'houses' }">
                Объекты
              </NuxtLink>
            </div>
            <div class="nav__link-wrap">
              <NuxtLink class="nav__link" to="/">
                Дизайн-проекты
              </NuxtLink>
            </div>
            <div class="nav__link-wrap">
              <NuxtLink class="nav__link" :to="{ name: 'service' }">
                Клиентский сервис
              </NuxtLink>
            </div>
            <div class="nav__link-wrap">
              <NuxtLink class="nav__link" :to="{ name: 'articles' }">
                Журнал
              </NuxtLink>
            </div>
            <div class="nav__link-wrap">
              <NuxtLink class="nav__link" to="/">
                Строительство
              </NuxtLink>
            </div>
            <div class="nav__link-wrap">
              <NuxtLink class="nav__link" to="/">
                Дизайн интерьера
              </NuxtLink>
            </div>
            <div class="nav__link-wrap">
              <NuxtLink class="nav__link" to="/">
                Участки
              </NuxtLink>
            </div>
            <div class="nav__link-wrap">
              <NuxtLink class="nav__link" :to="{ name: 'contacts' }">
                Контакты
              </NuxtLink>
            </div>
          </nav>
        </div>
        <div class="menu-footer">
          <div class="wrapper">
            <p class="menu-footer__text">©&nbsp;Maar, 1999–{{ currentYear }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  defineProps<{
    showed: boolean,
  }>();

  const emit = defineEmits<{
    (event: 'update:showed', value: boolean): void,
  }>();

  const { currentYear } = useNuxtApp().$dates;

  function updateShowed(value: boolean) {
    emit('update:showed', value);
  }

  function onClick(e: Event) {
    const target = e.target as HTMLElement;
    if(target.classList.contains('nav__link')) {
      updateShowed(false);
    }
  }
</script>

<style scoped lang="scss">
  .menu {
    position: fixed;
    z-index: 9000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--color-app-bg);
    display: flex;
    flex-direction: column;
  }

  .menu-body {
    overflow-x: hidden;
    height: fit-content;
    width: 100%;
    margin: auto;
    padding: 0 16px;
  }

  .menu-header {
    margin-bottom: 20px;
  }

  .menu-footer {
    margin-top: 10px;
    padding: 18px 0;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: -0.01em;

    &__text {
      opacity: 0.5;
    }
  }

  .menu-anim {
    &-enter-from {
      opacity: 0;
    }

    &-enter-active, &-leave-active {
      transition: opacity 300ms;
    }

    &-leave-active {
      opacity: 0;
    }
  }

  .nav {
    @include lg {
      max-width: 50%;
      margin-left: auto;
    }


    &__link-wrap {
      & + & {
        margin-top: 22px;
      }
    }

    &__link {
      font-size: 25px;
      line-height: 1;
      letter-spacing: -0.04em;

      &:hover {
        opacity: 0.8;
      }

      @include xl {
        font-size: 35px;
      }
    }
  }
</style>
