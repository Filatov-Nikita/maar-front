<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <div class="title-wrap">
        <h1 class="h1">
          Обеспечим достойный сервис на&nbsp;каждом этапе строительства, а&nbsp;также после его&nbsp;завершения.
        </h1>
      </div>
      <div class="photo-wrap">
        <BaseImageResp
          class="w-full"
          pictute
          width="736"
          height="800"
          :url="photoMain"
          :md="{
            width: 2112,
            height: 1043,
            url: photoMainXl,
          }"
        />
      </div>
      <ServicesAbout class="sec-about" />
      <ServicesQuestions />
    </div>
  </main>
</template>

<script setup lang="ts">
  import photoMain from '@/assets/images/service/main.jpg';
  import photoMainXl from '@/assets/images/service/main-xl.jpg';

  useBreadcrumbsStore().setPathsNames('index', 'service');
</script>

<style scoped lang="scss">
  .photo-wrap {
    margin-top: 32px;
    margin-bottom: 65px;

    @include lg {
      margin-bottom: 185px;
    }
  }

  .sec-about {
    margin-bottom: 135px;

    @include lg {
      margin-bottom: 200px;
    }
  }

  .title-wrap {
    max-width: 542px;
  }
</style>
