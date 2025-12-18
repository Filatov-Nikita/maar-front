<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="main">
        <div class="contacts">
          <BaseHeaderSec tag="p" design="secondary" :size="grid.lg ? 'lg' : 'md'">
            Контакты
          </BaseHeaderSec>
          <div class="contacts__items">
            <div class="contacts__link">
              <BaseLinkPrimary :size="grid.xl ? 'lg' : 'md'" href="/">telegram</BaseLinkPrimary>
            </div>
            <div class="contacts__link">
              <BaseLinkPrimary :size="grid.xl ? 'lg' : 'md'" href="/">whatsapp</BaseLinkPrimary>
            </div>
            <div class="contacts__link">
              <BaseLinkPrimary :size="grid.xl ? 'lg' : 'md'" href="/">обратный звонок</BaseLinkPrimary>
            </div>
          </div>
        </div>
        <div class="menu">
          <BaseHeaderSec tag="p" design="secondary" :size="grid.lg ? 'lg' : 'md'">
            Меню
          </BaseHeaderSec>
          <div class="menu__items">
            <div class="menu__col1">
              <div class="menu__link-wrap">
                <NuxtLink class="menu-link" :to="{ name: 'about' }">Компания</NuxtLink>
              </div>
              <div class="menu__link-wrap">
                <NuxtLink class="menu-link" :to="{ name: 'houses' }">Объекты</NuxtLink>
              </div>
              <div class="menu__link-wrap">
                <NuxtLink class="menu-link" :to="{ name: 'architecture' }">Архитектурное бюро</NuxtLink>
              </div>
              <div class="menu__link-wrap">
                <NuxtLink class="menu-link" :to="{ name: 'service' }">Клиентский сервис</NuxtLink>
              </div>
              <div class="menu__link-wrap">
                <NuxtLink class="menu-link" :to="{ name: 'articles' }">Журнал</NuxtLink>
              </div>
            </div>
            <div class="menu__col2">
              <div class="menu__link-wrap">
                <NuxtLink class="menu-link" :to="{ name: 'building' }">Строительство</NuxtLink>
              </div>
              <div class="menu__link-wrap">
                <NuxtLink class="menu-link" :to="{ name: 'design' }">Дизайн интерьера</NuxtLink>
              </div>
              <div class="menu__link-wrap">
                <NuxtLink class="menu-link" to="/">Участки</NuxtLink>
              </div>
              <div class="menu__link-wrap">
                <NuxtLink class="menu-link" :to="{ name: 'contacts' }">Контакты</NuxtLink>
              </div>
            </div>
            <div class="menu__col3">
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
      </div>
      <div class="finish">
        <p>©&nbsp;Maar, 1999–{{ currentYear }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const { currentYear } = useNuxtApp().$dates;
  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .main {
    @include row();
    @include gap(0px, 0px);

    @include lg {
      flex-direction: row-reverse;
    }
  }

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
    @include col();
    @include size(100%);
    @include size-lg(30%);

    &__items {
      margin-top: 50px;

      @include lg {
        margin-top: 65px;
      }
    }

    &__link {
      & + & {
        margin-top: 16px;
      }
    }
  }

  .menu {
    @include col();
    @include size(100%);
    @include size-lg(70%);

    @include lg {
      padding-right: 30px;
    }

    &__items {
      margin-top: 45px;
      flex-direction: column;

      @include lg {
        flex-direction: row;
        column-gap: 30px;
        margin-top: 75px;
      }
    }

    &__col1, &__col2, &__col3, &__items {
      display: flex;
      flex-wrap: wrap;
      row-gap: 20px;
    }

    &__col1, &__col2, &__col3 {
      flex-direction: column;

      @include lg {
        flex-grow: 1;
      }
    }
  }

  .menu-link {
    display: inline-flex;
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
