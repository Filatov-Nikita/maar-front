<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <h1 class="h1 title">{{ house.name }}</h1>
      <GalleryPrimary class="house-one__gallery" :images="house.galery" />
      <HousesShowAbout class="house-one__about" :house="house" />
      <HousesShowPlan class="house-one__plan" :house="house" />
      <BlockLocation
        class="house-one__location"
        :text-bold="house.rasp_textbold"
        :text-light="house.rasp_textlights"
        :photo="house.rasp_photo"
        :houses-cnt="house.rasp_ploshad"
        :area-square="house.rasp_ploshad"
        :places="house.rasp_infrostr"
        :gallery="house.raspgalery"
      />
      <HousesListShort />
    </div>
  </main>
</template>

<script setup lang="ts">
  const bread = useBreadcrumbsStore();
  bread.setPathsNames('index', 'houses');

  const api = useNuxtApp().$api;
  const route = useRoute();
  const code = computed(() => route.params.code as string);
  const res = await useAsyncData(`houses-${code.value}`, () => api.houses.show(code.value));
  const data = useDataOrFail(res);
  const house = computed(() => data.value[0]);

  bread.appendPath({
    name: house.value.name,
    to: { name: 'houses-code', params: { code: code.value } },
  });

  useSeoMeta({
    title: house.value.seo_title,
    description: house.value.seo_descr,
    keywords: house.value.seo_keywords,
  });
</script>

<style scoped lang="scss">
  .house-one {
    &__gallery {
      margin-bottom: 57px;
    }

    &__about {
      margin-bottom: 100px;
    }

    &__plan {
      margin-bottom: 100px;
    }

    &__location {
      margin-bottom: 90px;

      @include lg {
        margin-bottom: 150px;
      }
    }
  }

  .title {
    margin-bottom: 20px;
  }
</style>
