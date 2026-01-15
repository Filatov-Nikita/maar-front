<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <h1 class="h1 title">{{ area.name }}</h1>
      <GalleryPrimary class="area__gallery" :images="area.galery" />
      <AreasDescription class="area__about" :area="area" />
      <BlockLocation
        class="area__location"
        :text-bold="area.rasp_textbold"
        :text-light="area.rasp_textlights"
        :photo="area.rasp_photo"
        :houses-cnt="area.rasp_ploshad"
        :area-square="area.rasp_ploshad"
        :places="area.rasp_infrostr"
      />
      <AreasListSimilar :currentId="area.id" />
    </div>
  </main>
</template>

<script setup lang="ts">
  const api = useNuxtApp().$api;
  const route = useRoute();
  const code = computed(() => route.params.code as string);

  const data = useDataOrFail(
    await useAsyncData(() => api.areas.show(code.value)),
  );
  const area = computed(() => data.value[0]);

  const bread = useBreadcrumbsStore();
  bread.setPathsNames('index', 'areas');
  bread.appendPath({
    name: area.value.name,
    to: { name: 'areas-code', params: { code: code.value } },
  });

  useSeoMeta({
    title: area.value.seo_title,
    description: area.value.seo_descr,
    keywords: area.value.seo_keywords,
  });
</script>

<style scoped lang="scss">
  .area {
    &__gallery {
      margin-bottom: 57px;

      @include lg {
        margin-bottom: 150px;
      }
    }

    &__about {
      margin-bottom: 120px;

      @include lg {
        margin-bottom: 160px;
      }
    }

    &__location {
      margin-bottom: 90px;

      @include lg {
        margin-bottom: 150px;
      }

      @include xl {
        margin-bottom: 200px;
      }
    }
  }

  .title {
    margin-bottom: 20px;
  }
</style>
