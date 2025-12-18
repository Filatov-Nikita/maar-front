<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <h1 class="h1 title">
        Создаем дизайн уникальных пространств для жизни, где в центре — человек.
      </h1>
      <div class="img-wrap">
        <BaseImageResp
          class="w-full"
          pictute
          width="740"
          height="800"
          :url="mainImg"
          :md="{
            width: '2112',
            height: '1043',
            url: mainImgXl,
          }"
          alt="интерьер в гостиной"
        />
      </div>
      <DesignAdvantages class="design__advantages" />
      <DesignPlitka class="design__plitka" />
      <DesignAboutDir class="design__dir"  />
      <DesignColors class="design__colors" />
      <AboutTeam />
    </div>
  </main>
</template>

<script setup lang="ts">
  import mainImg from '@/assets/images/design/main.jpg';
  import mainImgXl from '@/assets/images/design/main-xl.jpg';

  useBreadcrumbsStore().setPathsNames('index', 'design');
</script>

<style scoped lang="scss">
  .title {
    max-width: 475px;
    margin-bottom: 20px;

    @include lg {
      margin-bottom: 32px;
    }
  }

  .img-wrap {
    margin-bottom: 44px;

    @include lg {
      margin-bottom: 200px;
    }
  }

  .design {
    &__advantages {
      margin-bottom: 44px;

      @include lg {
        margin-bottom: 200px;
      }
    }

    &__plitka {
      margin-bottom: 54px;

      @include lg {
        margin-bottom: 200px;
      }
    }

    &__dir {
      margin-bottom: 62px;

      @include lg {
        margin-bottom: 200px;
      }
    }

    &__colors {
      margin-bottom: 100px;

      @include lg {
        margin-bottom: 140px;
      }
    }
  }
</style>
