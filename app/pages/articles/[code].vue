<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <h1 class="h1 title">{{ article.name }}</h1>
      <div class="info-wrap">
        <span>{{ article.rubr }}</span>
        <span>·</span>
        <span>{{ article.date }}</span>
      </div>
      <div class="img-wrap">
        <BaseServerImage
          class="w-full"
          :image="article.img"
          :alt="article.name"
          loading="lazy"
        />
      </div>
      <BasePersonaProfile
        server
        :name="article.author"
        :position="article.author_subtext ?? 'Эксперт'"
        :photoUrl="article.author_img ? article.author_img.src : null"
      />
      <p v-if="article.text1" class="text2">{{ article.text1 }}</p>
      <div class="content" v-html="article.detail_text"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
  const api = useNuxtApp().$api;
  const route = useRoute();
  const code = computed(() => route.params.code as string);

  const data = useDataOrFail(
    await useAsyncData(() => api.articles.show(code.value)),
  );
  const article = computed(() => data.value[0]);

  const bread = useBreadcrumbsStore();
  bread.setPathsNames('index', 'articles');
  bread.appendPath({
    name: article.value.rubr,
    to: { name: 'articles-code', params: { code: code.value } },
  });

  useSeoMeta({
    title: article.value.seo_title,
    description: article.value.seo_descr,
    keywords: article.value.seo_keywords,
  });
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 16px;
  }

  .img-wrap {
    margin-bottom: 40px;
  }

  .text2 {
    font-size: 17px;
    line-height: 1.5;
    letter-spacing: -0.01em;
  }

  .content {
    margin-top: 45px;
    font-size: 15px;
    line-height: 1.5;
    letter-spacing: -0.01em;
  }

  .info-wrap {
    display: flex;
    gap: 6px;
    margin-bottom: 30px;
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.03em;
    opacity: 0.5;
  }
</style>
