<template>
  <main class="article-one">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <div class="article-head">
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
      </div>
      <div class="text1-wrap">
        <p v-if="article.text1" class="text1">{{ article.text1 }}</p>
        <BasePersonaProfile
          class="person"
          server
          :name="article.author"
          :position="article.author_subtext ?? 'Эксперт'"
          :photoUrl="article.author_img ? article.author_img.src : null"
        />
      </div>
      <div class="content" v-html="article.detail_text"></div>
    </div>
    <div class="list-other">
      <div class="wrapper">
        <div class="icons">
          <span class="icons__item">
            <BaseIcon name="star3" fit />
          </span>
          <span class="icons__item">
            <BaseIcon name="star3" fit />
          </span>
          <span class="icons__item">
            <BaseIcon name="star6" fit />
          </span>
        </div>
        <ArticlesOtherInCategory :currentId="article.id" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  definePageMeta({
    design: 'white',
  });

  const api = useNuxtApp().$api;
  const route = useRoute();
  const code = computed(() => route.params.code as string);

  const data = useDataOrFail(
    await useAsyncData(`articles-${code.value}`, () => api.articles.show(code.value)),
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
    max-width: 480px;
    @include lg {
      max-width: 624px;
      margin-bottom: 0;
    }
  }

  .img-wrap {
    @include lg {
      order: -2;
    }
  }

  .text1 {
    font-size: 17px;
    line-height: 1.5;
    letter-spacing: -0.01em;
  }

  .content {
    margin-top: 40px;
    font-size: 15px;
    line-height: 1.5;
    letter-spacing: -0.01em;
    max-width: 800px;

    @include lg {
      margin-top: 50px;
      font-size: 18px;
      letter-spacing: 0;
    }
  }

  .info-wrap {
    display: flex;
    gap: 6px;
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.03em;
    opacity: 0.5;
    margin-bottom: 24px;

    @include lg {
      order: -1;
      margin-bottom: 12px;
      margin-top: 24px;
    }
  }

  .article-one {
    padding-top: 32px;
  }

  .list-other {
    margin-top: 100px;
    background-color: var(--color-app-bg);
    padding-top: 20px;
    padding-bottom: 120px;

    @include xl {
      padding-bottom: 200px;
    }
  }

  .icons {
    margin-bottom: 70px;
    display: flex;
    gap: 8px;

    @include lg {
      margin-bottom: 150px;
    }

    &__item {
      width: 50px;
      height: 50px;

      @include xl {
        width: 65px;
        height: 65px;
      }

      &:nth-child(2) {
        transform: rotate(45deg);
      }
    }
  }

  .article-head {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .text1-wrap {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-black-1-2);

    @include lg {
      padding-bottom: 40px;
      display: flex;
      gap: 80px;
    }
  }

  .text1 {
    max-width: 630px;
    width: 100%;
    font-size: 17px;
    line-height: 1.5;
    letter-spacing: -0.01em;

    @include lg {
      font-size: 18px;
    }
  }

  .person {
    margin-top: 24px;
    @include lg {
      margin-left: auto;
      margin-top: 0;
      align-self: flex-end;
      flex-direction: row-reverse;
      text-align: right;
    }
  }
</style>
