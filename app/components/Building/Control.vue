<template>
  <section>
    <BaseHeaderSec class="title" :size="grid.lg ? 'lg' : 'sm'" design="secondary">
      Надзор
    </BaseHeaderSec>
    <div class="content">
      <div class="content__left">
        <div class="content__icon" v-if="!grid.md">
          <BaseIcon name="onion" fit />
        </div>
        <p class="content__text1">
          Авторский надзор Maar обеспечивает строгое соответствие проекта технической и архитектурной документации
        </p>
      </div>
      <div class="content__right">
        <div class="content__icon" v-if="grid.md">
          <BaseIcon name="onion" fit />
        </div>
        <p class="content__text2">
          Внедряем цифровой чек-листинг с контролем в реальном времени. Проводим инструментальный замер параметров вместо визуальной оценки. Закрепляем за объектом персонального инженера-куратора с прямым подчинением прорабов.
        </p>
      </div>
    </div>
    <div class="photo-wrap">
      <BaseImageResp
        class="w-full"
        pictute
        width="740"
        height="800"
        :url="houseImg"
        :md="{
          width: '2112',
          height: '1042',
          url: houseImgXl,
        }"
        loading="lazy"
        alt="Дом в стиле хайтек с зеленым двором"
      />
    </div>
    <BasePersonaText class="pers-text">
      <p>
        При&nbsp;переходе на&nbsp;этап отделочных работ, специалисты дизайн-бюро берут авторский надзор под&nbsp;свой контроль, чтобы&nbsp;изображения точно совпали с&nbsp;реальностью.
      </p>
    </BasePersonaText>
    <BasePersonaProfile
      class="dir-profile"
      :photoUrl="designerPhoto"
      name="Покотилов Ростислав"
      position="Руководитель дизайн-студии"
    />
  </section>
</template>

<script setup lang="ts">
  import houseImg from '@/assets/images/building/house1.jpg';
  import houseImgXl from '@/assets/images/building/house1-xl.jpg';
  import designerPhoto from '@/assets/images/personas/designer.jpg';

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .title {
    padding-bottom: 16px;
    margin-bottom: 54px;
    border: 0px solid var(--color-black-1-2);
    border-bottom-width: 1px;

    @include lg {
      margin-bottom: 140px;
      padding-bottom: 0;
      padding-top: 24px;
      border-bottom-width: 0px;
      border-top-width: 1px;
    }
  }

  .content {
    margin-bottom: 50px;

    @include md {
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 170px;
    }

    &__icon {
      width: 57px;
      height: 57px;
      margin-bottom: 27px;
    }

    &__left {
      @include md {
        max-width: 602px;
        text-align: right;
      }
    }

    &__right {
      max-width: 364px;
      margin-left: auto;
    }

    &__text1 {
      font-size: 30px;
      line-height: 1;
      letter-spacing: -0.04em;
      margin-bottom: 27px;
    }

    &__text2 {
      font-size: 15px;
      line-height: 1.2;
      letter-spacing: -0.03em;
    }
  }

  .pers-text {
    font-size: 23px;
    line-height: 1.2;
    letter-spacing: -0.04em;
    max-width: 544px;

    @include md {
      --offset: 115px;
    }
  }

  .dir-profile {
    margin-top: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-dark-1-2);

    @include md {
      margin-top: 32px;
    }
  }

  .photo-wrap {
    margin-bottom: 50px;

    @include lg {
      margin-bottom: 90px;
    }
  }
</style>
