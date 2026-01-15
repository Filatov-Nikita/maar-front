<template>
  <section class="location">
    <BaseHeaderSec class="title" design="secondary" :size="grid.lg ? 'lg' : 'sm'">
      Расположение
    </BaseHeaderSec>
    <div class="grid">
      <div class="text-wrap">
        <p class="text1">{{ textBold }}</p>
        <p class="text2">{{ textLight }}</p>
        <div class="img-wrap">
          <BaseServerImage class="w-full" :image="photo" loading="lazy" />
        </div>
      </div>
      <div class="gal-wrap" v-if="gallery">
        <GalleryMini
          class="loc-gal"
          title="Фотографии посёлка"
          titleLg="Фотографии<br>посёлка"
          :images="gallery"
        />
      </div>
    </div>
    <div class="grid2">
      <div class="place-wrap">
        <BaseHeaderSec class="places-title" design="secondary" size="sm">
          Инфарструктура
        </BaseHeaderSec>
        <ul class="places">
          <li
            class="place"
            v-for="place in places"
          >
            <span class="place__icon">
              <BaseIcon name="star5" fit />
            </span>
            <span>{{ place }}</span>
          </li>
        </ul>
      </div>
      <div class="about">
        <div class="about__item">
          <p class="about__title">{{ housesCnt }}</p>
          <p class="about__text">домов в<br/>поселке</p>
        </div>
        <div class="about__item">
          <p class="about__title">
            <span>{{ areaSquare }}</span>
            <span class="about__caption">Га</span>
          </p>
          <p class="about__text">площадь<br/>поселка</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { ImageItem } from '@/types/shared';

  defineProps<{
    textBold: string,
    textLight: string,
    photo: string,
    housesCnt: string,
    areaSquare: string,
    places: string[],
    gallery?: ImageItem[],
  }>();

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .grid {
    @include row();
    @include gap(0px, 0px);
    @include gap-lg(80px, 0px);
  }

  .grid2 {
    @include md {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
  }

  .location {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-black-1-2);
  }

  .text1 {
    font-size: 30px;
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: 20px;

    @include md {
      max-width: 400px;
      text-indent: 90px;
      font-size: 23px;
    }
  }

  .text2 {
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 60px;

    @include md {
      max-width: 310px;
    }
  }

  .text-wrap {
    @include col();
    @include size(100%);
    @include size-lg(80%);
    margin-bottom: 40px;
  }

  .gal-wrap {
    @include col();
    @include size(100%);
    @include size-lg(20%);
    margin-bottom: 50px;
  }

  .img-wrap {
    @include md {
      margin: 0 auto;
      max-width: 600px;
    }

    @include lg {
      max-width: 800px;
    }
  }

  .places-title, .title {
    padding-bottom: 14px;
    border-bottom: 1px solid var(--color-black-1-2);
  }

  .title {
    margin-bottom: 30px;
  }

  .places-title {
    margin-bottom: 16px;

    @include md {
      padding-bottom: 0;
      border-bottom-width: 0px;
    }
  }

  .place-wrap {
    margin-bottom: 70px;

    @include md {
      margin-bottom: 0;
    }
  }

  .place {
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.03em;
    display: flex;
    align-items: center;
    gap: 10px;

    & + & {
      margin-top: 5px;
    }

    &__icon {
      width: 13px;
      height: 13px;
    }
  }

  .about {
    display: flex;
    flex-wrap: wrap;
    gap: 22px;

    @include md {
      order: -1;
    }

    &__title {
      font-size: 50px;
      line-height: 1;
      letter-spacing: -0.04em;
      margin-bottom: 6px;
      display: flex;
      align-items: flex-end;
      gap: 4px;
    }

    &__text, &__caption {
      font-size: 15px;
      line-height: 1.2;
      letter-spacing: -0.03em;
    }

    &__caption {
      padding-bottom: 4px;
    }
  }

  .loc-gal :deep(.slider) {
    @include lg {
      height: 400px;
    }
  }
</style>
