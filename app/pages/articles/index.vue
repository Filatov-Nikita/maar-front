<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <h1 class="h1 title">Делимся экспертизой,<br>трендами и новостями</h1>
      <ArticlesListItem
        :style="{ 'display': 'block' }"
        class="w-full"
        title="Гид по стилям: какая архитектура виллы лучше всего подойдет для отдыха и для статуса?"
        category-name="ДИЗАЙН"
        author-name="Александр Фролов"
        created-at="14 авг"
        :photo="{
          width: 519,
          height: 291,
          url: ArticlePhoto,
        }"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
  import ArticlePhoto from '@/assets/images/temp/article.jpg';
  useBreadcrumbsStore().setPathsNames('index', 'articles');
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 48px;
  }
</style>
