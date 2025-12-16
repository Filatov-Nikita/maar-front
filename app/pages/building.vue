<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <h1 class="h1 title">Профессиональные бригады строителей, инженеров и&nbsp;дизайнеров отделки</h1>
      <div class="photo-wrap">
        <BaseImageResp
          class="w-full"
          pictute
          width="740"
          height="900"
          :url="mainImg"
          :md="{
            width: '2112',
            height: '1043',
            url: mainImgXl,
          }"
          alt="Процесс стройки"
        />
      </div>
      <BuildingServices class="building__services" />
      <BuildingAbout class="building__about" />
      <BuildingProcess class="building__process" />
      <BuildingControl class="building__control" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import mainImg from '@/assets/images/building/main.jpg';
  import mainImgXl from '@/assets/images/building/main-xl.jpg';

  useBreadcrumbsStore().setPathsNames('index', 'building');
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 21px;
    max-width: 500px;

    @include lg {
      margin-bottom: 32px;
    }
  }

  .photo-wrap {
    margin-bottom: 71px;

    @include lg {
      margin-bottom: 152px;
    }
  }

  .building {
    &__services {
      margin-bottom: 80px;

      @include lg {
        margin-bottom: 200px;
      }
    }

    &__about {
      margin-bottom: 100px;

      @include lg {
        margin-bottom: 150px;
      }
    }

    &__process {
      margin-bottom: 100px;

      @include lg {
        margin-bottom: 200px;
      }
    }
  }
</style>
