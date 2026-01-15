<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <h1 class="h1 title">Вакансии</h1>
      <div class="decor-wrap">
        <img
          class="w-full"
          width="221"
          height="129"
          src="@/assets/images/articles/cubes.svg"
          alt="кубики"
          loading="lazy"
        >
      </div>
      <div class="list">
        <article class="item">
          <h2 class="item__name">Дизайнер интерьеров</h2>
          <p class="item__cat">Дизайн</p>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  useBreadcrumbsStore().setPathsNames('index', 'vacancies');
</script>

<style scoped lang="scss">
  .decor-wrap {
    max-width: 200px;
    margin-bottom: 24px;
  }

  .title {
    margin-bottom: 32px;

    @include lg {
      margin-bottom: 45px;
    }
  }

  .list {
    max-width: 1000px;
    @include row();
    @include gap(0px, 16px);
    @include gap-md(20px, 30px);
    @include gap-lg(50px, 50px);
  }

  .item {
    @include col();
    @include size(100%);
    @include size-md(50%);
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-black-1-2);

    &__name {
      font-size: 19px;
      line-height: 1.2;
      letter-spacing: -0.03em;
      margin-bottom: 8px;

    }

    &__cat {
      font-size: 12px;
      line-height: 1.3;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      opacity: 0.5;
    }
  }
</style>
