<template>
  <section class="about">
    <h2 class="title">
      Создаём дома, которые становятся объектами искусства. Арт-директор признан одним из&nbsp;100 лучших дизайнеров России<sup>1</sup>.
    </h2>
    <div class="img-wrap">
      <img class="decor" width="549" height="538" src="@/assets/images/design/star.svg" loading="lazy" alt="декоративная звезда" />
    </div>
    <div class="wrap">
      <BasePersonaProfile
        class="dir-profile"
        :photoUrl="dir"
        name="Герасимова Алёна"
        position="Арт-директор дизайн-студии"
      />
      <div class="text">
        <p class="text-inner">
          По мнению «Рейтинга экспертов», 2021. Оценка жюри проводилась по&nbsp;комплексу критериев: анализ портфолио, количество реализованных коммерческих проектов, медийность и&nbsp;вклад в&nbsp;развитие индустрии.
        </p>
      </div>
    </div>
    <div class="stars" v-if="grid.md">
      <span class="star-icon">
        <BaseIcon name="star5" fit />
      </span>
      <span class="star-icon">
        <BaseIcon name="star5" fit />
      </span>
      <span class="star-icon">
        <BaseIcon name="star5" fit />
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
  import dir from '@/assets/images/personas/art-dir.jpg';

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .about {
    position: relative;

    @include md {
      min-height: 540px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .title {
    font-size: 30px;
    line-height: 1.1;
    letter-spacing: -0.04em;
    margin-bottom: 14px;
    max-width: 468px;

    @include md {
      text-indent: 80px;
    }
  }

  .img-wrap {
    margin-bottom: 52px;

    @include md {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 550px;
      margin-bottom: 0;
      z-index: -1;
    }
  }

  .decor {
    width: 100%;
    animation-name: pulse;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }

  .dir-profile {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-dark-1-2);
    margin-bottom: 16px;

    @include md {
      padding-bottom: 0;
      margin-bottom: 32px;
      border: 0;
      flex-direction: row-reverse;
      text-align: right;
    }
  }

  .text {
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: -0.01em;
    max-width: 370px;

    @include md {
      max-width: 350px;
      padding-top: 44px;
      order: -1;
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 34px;
        left: 0;
        width: 40%;
        height: 1px;
        z-index: 1;
        background-color: var(--color-dark-1-2);
      }
    }

    &-inner {
      opacity: 0.5;
    }
  }

  .wrap {
    @include md {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .stars {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    gap: 8px;
    z-index: 1;
  }

  .star-icon {
    flex-shrink: 0;
    width: 13px;
    height: 13px;
  }

  @keyframes pulse {
    0% {
      opacity: 0;
      transform: scale(0.5) rotate(-20deg);
    }

    50% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }

    100% {
      opacity: 0;
      transform: scale(0.5) rotate(-20deg);
    }
  }
</style>
