<template>
  <section>
    <div class="wrap">
      <div class="photo-wrap">
        <BaseImageResp
          class="w-full"
          pictute
          width="740"
          height="801"
          :url="manImg"
          :md="{
            width: '1392',
            height: '1348',
            url: manImgXl,
          }"
          loading="lazy"
          alt="Фото строителей"
        />
      </div>
      <div class="content">
        <div class="content__icon">
          <BaseIcon name="cube" fit />
        </div>
        <p class="content__text">
          Работу выполняет только штатная команда, следуя строгим регламентам. Мы не привлекаем сторонних подрядчиков, поэтому уверены в сроках и качестве строительства.
        </p>
        <p class="content__text2">
          Отсутствие субподрядчиков гарантирует управляемость сроков, качество и единый стандарт на всех объектах.
        </p>
      </div>
    </div>
    <BasePersonaText class="pers-text">
      <p>
        Когда решение о&nbsp;сотрудничестве принято, мы&nbsp;приглашаем вас на&nbsp;большое интервью с&nbsp;участием всех руководителей проектной группы. После чего формируем дорожную карту работ.
      </p>
    </BasePersonaText>
    <BasePersonaProfile
      class="dir-profile"
      :photoUrl="artDir"
      name="Арт-директор дизайн-студии"
      position="Эльза Шагабутдинова"
    />
  </section>
</template>

<script setup lang="ts">
  import manImg from '@/assets/images/building/man.jpg';
  import manImgXl from '@/assets/images/building/man-xl.jpg';
  import artDir from '@/assets/images/personas/art-dir.jpg';
</script>

<style scoped lang="scss">
  .wrap {
    @include gap(32px, 60px);
    @include row();
  }

  .photo-wrap, .content {
    @include col();
    @include size(100%);
    @include size-md(50%);
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include lg {
      padding-bottom: 16px;
      border-bottom: 1px solid var(--color-black-1-2);
    }

    &__icon {
      width: 64px;
      height: 64px;
      margin-left: 80px;
      margin-bottom: 16px;

      @include lg {
        width: 75px;
        height: 75px;
        margin-bottom: 40px;
        margin-left: 120px;
      }
    }

    &__text {
      text-indent: 80px;
      font-size: 30px;
      line-height: 1;
      letter-spacing: -0.04em;
      margin-bottom: 24px;
      max-width: 503px;

      @include lg {
        margin-bottom: 40px;
        text-indent: 120px;
      }
    }

    &__text2 {
      max-width: 273px;
      margin-left: auto;
      font-size: 15px;
      line-height: 1.2;
      letter-spacing: -0.02em;

      @include lg {
        margin-left: 150px;
      }
    }
  }

  .pers-text {
    margin-top: 100px;
    padding-top: 24px;
    font-size: 23px;
    line-height: 1.2;
    letter-spacing: -0.04em;
    border-top: 1px solid var(--color-black-1-2);

    @include md {
      --offset: 120px;
    }

    @include lg {
      border-top-width: 0;
      padding-top: 0;
    }
  }

  .pers-text :deep(.text-wrap) {
    @include md {
      max-width: 565px;
    }
  }

  .dir-profile {
    margin-top: 24px;

    @include lg {
      padding-bottom: 26px;
      border-bottom: 1px solid var(--color-black-1-2);
    }
  }
</style>
