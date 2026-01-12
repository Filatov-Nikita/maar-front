<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <h1 class="h1 title">Делимся экспертизой,<br>трендами и новостями</h1>
      <ArticlesFresh class="fresh" />
      <div class="pop-rec">
        <ArticlesPopular class="pop" />
        <ArticlesRecommend class="rec" />
      </div>
      <ArticlesTotal class="total" />
    </div>
  </main>
</template>

<script setup lang="ts">
  useBreadcrumbsStore().setPathsNames('index', 'articles');
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 48px;
  }

  .fresh {
    margin-bottom: 90px;

    @include lg {
      margin-bottom: 150px;
    }
  }

  .pop-rec {
    @include row();
    @include gap(80px, 80px);
    @include lg {
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  .pop {
    @include col();
    @include size(100%);
    @include size-lg(35%);
  }

  .rec {
    @include col();
    @include size(100%);
    @include size-lg(35%);
  }

  .total {
    margin-top: 80px;

    @include lg {
      margin-top: 150px;
    }
  }
</style>
