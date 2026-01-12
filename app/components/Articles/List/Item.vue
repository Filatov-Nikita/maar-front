<template>
  <NuxtLink class="item" :to="{ name: 'articles-code', params: { code: item.code } }">
    <div v-show="!hidePhoto" class="img-wrap">
      <BaseServerImage
        class="img"
        :image="item.img"
        :alt="item.name"
        loading="lazy"
      />
    </div>
    <div class="title">{{ item.name }}</div>
    <div class="text-wrap">
      <span>{{ item.rubr }}</span>
      <span>·</span>
      <span>{{ item.author }}</span>
      <span>·</span>
      <span>{{ item.date }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { ArticleItem } from '@/repositories/articles';

  withDefaults(
    defineProps<{
      item: ArticleItem,
      hidePhoto?: boolean,
    }>(),
    {
      hidePhoto: false,
    },
  );
</script>

<style scoped lang="scss">
  .item {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-black-1-2);

    &:hover {
      .title {
        opacity: 0.7;
      }

      .img {
        transform: scale(1.1);
      }
    }
  }

  .text-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: 0.01em;
    opacity: 0.5;
  }

  .title {
    margin-bottom: 8px;
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.03em;
  }

  .img-wrap {
    overflow: hidden;
    margin-bottom: 16px;
  }

  .img {
    transition: transform 150ms;
    width: 100%;
  }
</style>
