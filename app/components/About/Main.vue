<template>
  <section class="sec-main">
    <div class="grid">
      <div class="left">
        <div class="mock"></div>
        <div class="content-wrap">
          <div class="content">
            <div class="content__col">
              <p class="content__title">2</p>
              <p class="content__text content__text-1">
                года средний срок строительства объекта
              </p>
            </div>
            <div class="content__col">
              <p class="content__title">3</p>
              <p class="content__text content__text-2">
                года гарантии на дом —&nbsp;исправим дефекты за свой счёт
              </p>
            </div>
          </div>
        </div>
        <div class="img-wrap">
          <BaseImageResp
            pictute
            class="w-full"
            :width="740"
            :height="800"
            :url="main1Img"
            :md="{
              width: 1044,
              height: 776,
              url: main1ImgXl,
            }"
          />
        </div>
      </div>
      <div class="right">
        <div class="img-wrap">
          <BaseImageResp
            pictute
            class="w-full"
            :width="740"
            :height="800"
            :url="main2Img"
            :md="{
              width: 1044,
              height: 1043,
              url: main2ImgXl,
            }"
          />
        </div>
      </div>
    </div>
    <div class="text-center btn-wrap">
      <BaseLinkNext class="w-full-sm" href="/">Смотреть проекты</BaseLinkNext>
    </div>
  </section>
</template>

<script setup lang="ts">
  import main1Img from '@/assets/images/about/main-1.jpg';
  import main1ImgXl from '@/assets/images/about/main-1-xl.jpg';
  import main2Img from '@/assets/images/about/main-2.jpg';
  import main2ImgXl from '@/assets/images/about/main-2-xl.jpg';
</script>

<style scoped lang="scss">
  .sec-main {

  }

  .mock {
    display: none;
    @include lg {
      display: block;
      padding-top: 16px;
      flex-grow: 1;
      border-top: 1px solid var(--color-dark-1-2);
    }
  }

  .grid {
    @include row();
    @include gap(16px, 16px);
  }

  .left, .right {
    @include col();
    @include size(100%);
    @include size-lg(50%);
  }

  .left, .right {
    display: flex;
    flex-direction: column;
  }

  .right {
    justify-content: flex-end;
  }

  .content-wrap {
    margin-bottom: 16px;
  }

  .content {
    @include row();
    @include gap(45px, 0px);

    &__col {
      @include col();
      @include size(50%);
    }

    &__title {
      font-size: 50px;
      line-height: 1;
      letter-spacing: -0.04em;
      margin-bottom: 10px;
    }

    &__text {
      font-size: 15px;
      line-height: 1.2;
      letter-spacing: -0.03em;

      &-1 {
        max-width: 137px;
      }

      &-2 {
        max-width: 155px;
      }
    }
  }

  .btn-wrap {
    margin-top: 44px;

    @include lg {
      margin-top: 100px;
    }
  }
</style>
