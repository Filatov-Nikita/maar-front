<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="main">
        <div class="contacts">
          <BaseHeaderSec tag="p" design="secondary" size="md">Контакты</BaseHeaderSec>
          <div class="contacts__items">
            <div class="contacts__link">
              <BaseLinkPrimary size="md" href="/">telegram</BaseLinkPrimary>
            </div>
            <div class="contacts__link">
              <BaseLinkPrimary size="md" href="/">whatsapp</BaseLinkPrimary>
            </div>
            <div class="contacts__link">
              <BaseLinkPrimary size="md" href="/">обратный звонок</BaseLinkPrimary>
            </div>
          </div>
        </div>
        <div class="menu">
          <BaseHeaderSec tag="p" design="secondary" size="md">Меню</BaseHeaderSec>
          <div class="menu__items">
            <div class="menu__link-wrap">
              <NuxtLink class="menu-link" to="/">Компания</NuxtLink>
            </div>
            <div class="menu__link-wrap">
              <NuxtLink class="menu-link" to="/">Объекты</NuxtLink>
            </div>
            <div class="menu__link-wrap">
              <NuxtLink class="menu-link" to="/">Дизайн-проекты</NuxtLink>
            </div>
            <div class="menu__link-wrap">
              <NuxtLink class="menu-link" to="/">Клиентский сервис</NuxtLink>
            </div>
            <div class="menu__link-wrap">
              <NuxtLink class="menu-link" to="/">Журнал</NuxtLink>
            </div>
            <div class="menu__link-wrap">
              <NuxtLink class="menu-link" to="/">Строительство</NuxtLink>
            </div>
            <div class="menu__link-wrap">
              <NuxtLink class="menu-link" to="/">Дизайн интерьера</NuxtLink>
            </div>
            <div class="menu__link-wrap">
              <NuxtLink class="menu-link" to="/">Участки</NuxtLink>
            </div>
            <div class="menu__link-wrap">
              <NuxtLink class="menu-link" to="/">Контакты</NuxtLink>
            </div>
            <div class="menu__link-wrap">
              <NuxtLink class="menu-link" to="/">
                <span>Вакансии</span>
                <span class="menu-link__icon">
                  <BaseIcon name="external" fit />
                </span>
              </NuxtLink>
            </div>
            <div class="menu__link-wrap">
              <NuxtLink class="menu-link" to="/">
                <span>Instagram</span>
                <span class="menu-link__icon">
                  <BaseIcon name="external" fit />
                </span>
              </NuxtLink>
            </div>
            <div class="menu__link-wrap">
              <NuxtLink class="menu-link" to="/">
                <span>Telegram</span>
                <span class="menu-link__icon">
                  <BaseIcon name="external" fit />
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="finish">
        <p>©&nbsp;Maar, 1999–{{ currentYear }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import BaseIcon from '../Base/BaseIcon.vue';

  const { currentYear } = useNuxtApp().$dates;
</script>

<style scoped lang="scss">
  .main {}

  .finish {
    border-top: 1px solid var(--color-dark-1-2);
    padding: 12px 0 22px;
    font-size: 13px;
    line-height: 1.2;
    letter-spacing: -0.01em;

    p {
      opacity: 0.5;
    }
  }

  .menu, .contacts {
    padding: 16px 0 50px;
    border-top: 1px solid var(--color-dark-1-2);
  }

  .contacts {
    width: 100%;

    &__items {
      margin-top: 50px;
    }

    &__link {
      & + & {
        margin-top: 16px;
      }
    }
  }

  .menu {
    width: 100%;

    &__link-wrap {
      & + & {
        margin-top: 20px;
      }
    }

    &__items {
      margin-top: 45px;
    }
  }

  .menu-link {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 17px;
    line-height: 1.2;
    letter-spacing: -0.03em;

    &:hover {
      opacity: 0.7;
    }

    &__icon {
      width: 10px;
      height: 10px;
    }
  }
</style>
