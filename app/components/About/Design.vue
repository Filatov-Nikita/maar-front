<template>
  <section>
    <BaseHeaderSec class="title" :size="grid.lg ? 'lg' : 'sm'" design="secondary">
      Дизайн
    </BaseHeaderSec>
    <div class="grid">
      <div class="left">
        <div class="content-wrap">
          <div class="content">
            <div class="content__wrap">
              <div class="content__icon">
                <BaseIcon name="star2" fit />
              </div>
              <p class="content__text">
                Создаём дома, которые становятся объектами искусства. Арт-директор признан одним из 100 лучших дизайнеров России<sup>1</sup>.
              </p>
            </div>
            <p class="content__caption">
              <sup>1</sup> По мнению «Рейтинга экспертов», 2021. Оценка жюри проводилась по комплексу критериев: анализ портфолио, количество реализованных коммерческих проектов, медийность и вклад в развитие индустрии.
            </p>
          </div>
          <div class="img-wrap-big">
            <img class="img-wrap-big__photo" width="1044" height="1076" src="@/assets/images/about/design-1.jpg" loading="lazy" alt="Фото интерьера" />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="gallery">
          <div class="gallery__item gallery__item-1">
            <img class="gallery__img" width="689" height="720" src="@/assets/images/about/design-2.jpg" loading="lazy" alt="Фото интерьера" />
          </div>
          <div class="gallery__item gallery__item-2">
            <img class="gallery__img" width="332" height="720" src="@/assets/images/about/design-3.jpg" loading="lazy" alt="Фото интерьера" />
          </div>
          <div class="gallery__item gallery__item-3">
            <img class="gallery__img" width="1044" height="720" src="@/assets/images/about/design-4.jpg" loading="lazy" alt="Фото интерьера" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .gallery {
    @include row();
    @include gap(8px, 0px);
    @include gap-lg(16px, 0px);

    &__item {
      @include col();

      &-1 {
        @include size(40%);
        @include size-lg(33%);
      }

      &-2 {
        @include size(20%);
        @include size-lg(17%);
      }

      &-3 {
        @include size(40%);
        @include size-lg(50%);
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title {
    padding-top: 12px;
    border-top: 1px solid var(--color-black-1-2);

    @include lg {
      padding: 0;
      border: 0;
      margin-bottom: 16px;
    }
  }

  .grid {
    @include row();
    @include gap(0px, 8px);
    @include gap-lg(0px, 16px);
  }

  .left, .right {
    @include col();
    @include size(100%);
  }

  .content-wrap {
    @include row();
    @include gap(0px, 28px);
    @include gap-lg(16px, 16px);
  }

  .content, .img-wrap-big {
    @include col();
    @include size(100%);
    @include size-lg(50%);
  }

  .img-wrap-big {
    &__photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    min-height: 530px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    &::before {
      content: '';
      display: block;
      width: 100%;
      border: 0;

      @include lg {
        border-top: 1px solid var(--color-black-1-2);
      }
    }

    &__icon {
      width: 72px;
      height: 72px;
      margin-bottom: 24px;

      @include xl {
        margin-left: 100px;
      }
    }

    &__text {
      font-size: 30px;
      line-height: 1;
      letter-spacing: -0.04em;

      @include xl {
        text-indent: 100px;
        max-width: 620px;
      }
    }

    &__caption {
      &::before {
        content: '';
        display: block;
        width: 100%;
        padding-top: 16px;
        border-top: 1px solid var(--color-black-1-2);

        @include lg {
          padding-top: 10px;
          width: 30%;
        }
      }

      font-size: 12px;
      line-height: 1.3;
      letter-spacing: -0.01em;
      opacity: 0.5;

      @include lg {
        max-width: 457px;
      }
    }
  }
</style>
