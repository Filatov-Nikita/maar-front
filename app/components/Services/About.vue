<template>
  <section>
    <div class="head">
      <BaseHeaderSec v-show="grid.lg" class="subtitle" size="md" design="secondary" tag="p">
        Сервис Maar
      </BaseHeaderSec>
      <h2 class="title">
        <span class="title__num">
          <svg class="w-full h-full" viewBox="0 0 120 176" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M94.929 20.8772L18.0122 115.068H94.929V20.8772ZM120 115.068V129.876H110.02V176H94.929V129.876H0V116.281L95.1724 0H110.02V115.068H120Z" fill="#2B2A28"/>
          </svg>
        </span>
        <span class="title__text">сервисных<br>преимущества,<br>которые вы<br>получаете</span>
      </h2>
      <span class="title__icon">
        <BaseIcon fit name="star" />
      </span>
    </div>
    <div class="wrap">
      <div class="items">
        <article class="item">
          <div class="item__img-wrap">
            <img class="item__img" width="100" height="100" src="~/assets/images/service/1.svg" loading="lazy">
          </div>
          <h3 class="item__title">Интерактивная<br>модель дома в VR</h3>
          <p class="item__text">
            Используем дополненную реальность, чтобы вы могли прогуляться по будущему дому на этапе дизайна
          </p>
        </article>
        <article class="item">
          <div class="item__img-wrap">
            <img class="item__img" width="100" height="100" src="~/assets/images/service/2.svg" loading="lazy">
          </div>
          <h3 class="item__title">Кураторство лучших<br>архитекторов СНГ</h3>
          <p class="item__text">
            Топ-100 архитектор лично разрабатывает и контролирует каждый элемент вашего проекта
          </p>
        </article>
        <article class="item">
          <div class="item__img-wrap">
            <img class="item__img" width="100" height="100" src="~/assets/images/service/3.svg" loading="lazy">
          </div>
          <h3 class="item__title">Гарантия<br>3 года</h3>
          <p class="item__text">
            В случае возникновения дефектов строительства — исправим за свой счёт
          </p>
        </article>
        <article class="item">
          <div class="item__img-wrap">
            <img class="item__img" width="100" height="100" src="~/assets/images/service/4.svg" loading="lazy">
          </div>
          <h3 class="item__title">Полная<br>анонимность</h3>
          <p class="item__text">
            Строгий NDA, имя обезлично, согласование возможно без присутствтия
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .head {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 48px;
    border-bottom: 1px solid var(--color-black-1-2);

    @include lg {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding-right: 66px;
    }
  }

  .title {
    display: flex;
    align-items: flex-end;
    gap: 17px;

    &__num {
      width: 120px;
      height: 176px;
    }

    &__text {
      text-indent: 1.7em;
      font-size: 15px;
      line-height: 1;
      letter-spacing: -0.03em;
    }

    &__icon {
      display: block;
      position: absolute;
      width: 13px;
      height: 13px;
      bottom: 22px;
      right: 0px;
      z-index: 1;

      @include lg {
        right: 60%;
      }
    }
  }

  .items {
    @include row();
    @include gap(0px, 16px);
    @include gap-md(16px, 120px);
  }

  .item {
    border-bottom: 1px solid var(--color-black-1-2);
    padding-bottom: 16px;
    @include col();
    @include size(100%);
    @include size-md(50%);

    &__img-wrap {
      width: 100px;
      height: 100px;
      margin-bottom: 16px;
    }

    &__img {
      width: 100%;
    }

    &__title {
      font-size: 23px;
      line-height: 1;
      letter-spacing: -0.03em;
      margin-bottom: 50px;
    }

    &__text {
      font-size: 15px;
      line-height: 1.2;
      letter-spacing: -0.03em;
      max-width: 271px;
    }
  }

  .wrap {
    @include lg {
      max-width: 930px;
      margin-left: auto;
    }
  }
</style>
