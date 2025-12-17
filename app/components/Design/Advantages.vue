<template>
  <section class="advantages">
    <div class="items">
      <div class="col col-1">
        <article class="item">
          <p class="item__title">128</p>
          <p class="item__text">
            проектов<br/>реализовано<br/>командой дизайна
          </p>
        </article>
      </div>
      <div class="col col-2">
        <article class="item">
          <p class="item__title">
            <span>12</span>&nbsp;<span class="item__caption">дизайнеров</span>
          </p>
          <p class="item__text">
            штатная команда<br/>дизайн-студии Maar<br/>Development
          </p>
        </article>
      </div>
      <div class="col col-3">
        <article class="item">
          <p class="item__title">
            <span>1,500</span>&nbsp;<span class="item__caption item__caption-3">м<sup>2</sup></span>
          </p>
          <p class="item__text">
            средняя проектируемая<br/>площадь объектов,<br/>с&nbsp;которыми работаем
          </p>
        </article>
      </div>
      <div class="col col-4">
        <article class="item">
          <p class="item__title">
            <span>7</span>&nbsp;<span class="item__caption item__caption-4">мес</span>
          </p>
          <p class="item__text">
            средний срок<br/>проектирования<br/>интерьера
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .advantages {
    @include xl {
      padding-right: 60px;
    }
  }
  .items {
    @include row();
    @include gap(0px, 60px);
    @include gap-lg(0px, 0px);

    @include lg {
      justify-content: space-between;
    }
  }

  .col {
    @include col();
    @include size(100%);
    @include size-sm(50%);
    @include size-lg(fit-content);
    border-bottom: 1px solid var(--color-black-1-2);

    @include lg {
      border: 0;
    }

    &-2, &-4 {
      .item {
        @include sm {
          text-align: right;
          padding-left: 20px;
        }

        @include lg {
          padding-left: 0px;
          text-align: left;
        }
      }
    }
  }

  .item {
    padding-bottom: 16px;

    @include lg {
      padding-bottom: 0px;
    }

    &__text {
      font-size: 15px;
      line-height: 1.2;
      letter-spacing: -0.03em;
      margin-top: 10px;
    }

    &__title {
      font-size: 50px;
      line-height: 1;
      letter-spacing: -0.04em;

      @include lg {
        font-size: 80px;
      }

      @include xl {
        font-size: 100px;
      }
    }

    &__caption {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.02em;

      @include lg {
        display: inline-block;
        font-size: 17px;
      }

      &-3 {
        @include lg {
          transform: translateX(-10px);
        }

        @include xl {
          transform: translateX(-15px);
        }
      }

      &-4 {
        @include lg {
          transform: translateX(-20px);
        }

        @include xl {
          transform: translateX(-30px);
        }
      }
    }
  }
</style>
