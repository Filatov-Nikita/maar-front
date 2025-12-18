<template>
  <section>
    <div class="img-wrap">
      <BaseImageResp
        class="w-full"
        pictute
        width="740"
        height="800"
        :url="holl"
        :md="{
          width: 2112,
          height: 1125,
          url: hollxl,
        }"
        loading="lazy"
        alt="Пример дизайна холла"
      />
    </div>
    <div class="wrap">
      <div class="content">
        <BasePersonaText class="pers-text">
          <p>
            Для каждого дизайн-проекта мы&nbsp;индивидуально подбираем и&nbsp;утверждаем с&nbsp;клиентом физические образцы материалов, что&nbsp;позволяет точно воплотить тактильные и&nbsp;визуальные ожидания от&nbsp;интерьера.
          </p>
        </BasePersonaText>
        <BasePersonaProfile
          class="dir-profile"
          :photoUrl="designer"
          name="Покотилов Ростислав"
          position="Руководитель дизайн-студии"
        />
      </div>
      <div class="colors-wrap">
        <BaseImageResp
          class="colors-img"
          pictute
          width="555"
          height="651"
          :url="colorsImg"
          :md="{
            width: 2112,
            height: 1163,
            url: colorsImgXl,
          }"
          loading="lazy"
          alt="образцы материалов и цветов"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import holl from '@/assets/images/design/holl.jpg';
  import hollxl from '@/assets/images/design/holl-xl.jpg';
  import colorsImg from '@/assets/images/design/colors.png';
  import colorsImgXl from '@/assets/images/design/colors-xl.png';
  import designer from '@/assets/images/personas/designer.jpg';
</script>

<style scoped lang="scss">
  .wrap {
    position: relative;
  }

  .colors-wrap {
    @include lg {
      position: relative;
      padding-top: 65.5%;
    }

    @include screen(1400px) {
      padding-top: 0;
    }
  }

  .colors-wrap :deep(.colors-img) {
    width: 100%;

    @include lg {
      position: absolute;
      left: 0;
      bottom: 0;
    }

    @include screen(1400px) {
      position: static;
    }
  }

  .content {
    margin-bottom: 40px;

    @include lg {
      position: absolute;
      width: 100%;
      bottom: 55%;
      left: 0;
      z-index: 1;
      margin-bottom: 0px;
    }

    @include screen(1400px) {
      bottom: auto;
      top: 0;
    }
  }

  .dir-profile {
    margin-top: 32px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-dark-1-2);

    @include lg {
      padding-bottom: 0px;
      border: 0;
    }
  }

  .pers-text {
    --offset: 120px;
    font-size: 23px;
    line-height: 1.2;
    letter-spacing: -0.04em;
    max-width: 464px;
  }

  .img-wrap {
    margin-bottom: 60px;

    @include lg {
      margin-bottom: 170px;
    }
  }
</style>
