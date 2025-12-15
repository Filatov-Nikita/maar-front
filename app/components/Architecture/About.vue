<template>
  <section>
    <div class="items">
      <div class="items__item">
        <ArchitectureCard class="items__card">
          <template #img>
            <BaseImageResp
              class="w-full"
              pictute
              width="740"
              height="1060"
              :url="render1"
              :xl="{
                width: '996',
                height: '998',
                url: render1xl
              }"
            />
          </template>
          <template #title>Ген. план проекта «Барселона»</template>
          <template #text>
            <p>Архитектурный проект премиальной виллы представляет собой синтез индивидуальной эстетики и&nbsp;функционального совершенства.</p>
          </template>
        </ArchitectureCard>
      </div>
      <div class="block2 items__item">
        <span class="block2__icon1">
          <BaseIcon name="star3" fit />
        </span>
        <span class="block2__icon2">
          <BaseIcon name="star3" fit />
        </span>
        <div class="block2__content">
          <span class="block2__num">3</span>
          <div class="block2__wrap">
            <div class="block2__title">месяца</div>
            <div class="block2__text">средний срок создания архитектурного проекта</div>
          </div>
        </div>
      </div>
      <div class="items__item render2">
        <ArchitectureCard class="items__card">
          <template #img>
            <BaseImageResp
              class="w-full"
              pictute
              width="740"
              height="1060"
              :url="render1"
              :xl="{
                width: '996',
                height: '998',
                url: render1xl
              }"
            />
          </template>
          <template #title>Ген. план проекта «Монако»</template>
          <template #text>
            <p>Архитектурный проект премиальной виллы представляет собой синтез индивидуальной эстетики и&nbsp;функционального совершенства.</p>
          </template>
        </ArchitectureCard>
      </div>
      <div class="block3 items__item">
        <div class="block3__content">
          <p class="block3__title">
            Первым делом — архитектурная концепция, которая ложится в&nbsp;основу всех последующих проектных решений
          </p>
          <p class="block3__text">
            Проводим анализ участка и&nbsp;технических условий, разрабатываем эскизный проект, включающий архитектурно-планировочные решения и&nbsp;визуализацию фасадов. На&nbsp;основании утверждённого эскиза создаем дизайн-проект и&nbsp;рабочую документацию для&nbsp;строительства.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import render1 from '@/assets/images/architecture/render-1.jpg';
  import render1xl from '@/assets/images/architecture/render-1-xl.jpg';
</script>

<style scoped lang="scss">
  .items {
    @include row();
    @include gap(0px, 18px);
    @include gap-md(16px, 0px);

    &__item {
      @include col();
      @include size(100%);
      @include size-md(50%);
    }

    &__card {
      height: 100%;
      margin: 0 -16px;
      width: fit-content;

      @include md {
        margin: 0;
        width: 100%;
      }
    }
  }

  .block2 {
    position: relative;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    @include md {
      border-top: 1px solid var(--color-black-1-2);
      padding-bottom: 16px;
    }

    &__icon1, &__icon2 {
      position: absolute;
      width: 57px;
      height: 57px;

      @include md {
        width: 84px;
        height: 84px;
      }
    }

    &__icon1 {
      left: 0;
      top: 0;

      @include md {
        top: 16px;
      }
    }

    &__icon2 {
      right: 0;
      top: 0;

      @include md {
        display: none;
      }
    }

    &__content {
      width: 100%;
      display: flex;
      align-items: flex-end;
      gap: 12px;

      @include md {
        width: fit-content;
      }
    }

    &__title, &__text {
      line-height: 1.2;
      letter-spacing: -0.03em;

    }

    &__title {
      font-size: 17px;
      margin-bottom: 4px;
    }

    &__text {
      max-width: 203px;
      font-size: 15px;

      @include lg {
        max-width: 120px;
      }
    }

    &__num {
      font-size: 200px;
      line-height: 1;

      @include lg {
        font-size: 300px;
      }
    }

    &__wrap {
      padding-bottom: 30px;

      @include lg {
        padding-bottom: 40px;
      }
    }
  }

  .block3 {
    min-height: 700px;
    display: flex;
    align-items: center;

    &__title {
      font-size: 30px;
      line-height: 1;
      letter-spacing: -0.04em;
      text-indent: 80px;

      @include lg {
        text-indent: 160px;
        max-width: 481px;
      }
    }

    &__text {
      margin-top: 20px;
      font-size: 15px;
      line-height: 1.2;
      letter-spacing: -0.03em;
      max-width: 273px;
      margin-left: auto;

      @include lg {
        margin-top: 32px;
        max-width: 370px;
        text-indent: 160px;
      }
    }
  }

  .render2 {
    @include md {
      order: 1;
    }
  }
</style>
