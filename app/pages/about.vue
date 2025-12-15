<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <h1 class="h1 title">
        Девелопер полного<br>цикла в&nbsp;сегменте элитной загородной недвижимости
      </h1>
      <AboutMain class="about__main" />
      <AboutDesign class="about__design" />
      <AboutBrands class="about__brands" />
      <AboutTeam />
    </div>
  </main>
</template>

<script setup lang="ts">
  useBreadcrumbsStore().setPathsNames('index', 'about');
</script>

<style scoped lang="scss">
  .title {
    max-width: 480px;
    margin-bottom: 45px;

    @include lg {
      margin-bottom: 32px;
    }
  }

  .about {
    &__main {
      margin-bottom: 42px;

      @include lg {
        margin-bottom: 100px;
      }
    }

    &__design {
      margin-bottom: 44px;

      @include lg {
        margin-bottom: 140px;
      }
    }

    &__brands {
      margin-bottom: 100px;

      @include lg {
        margin-bottom: 200px;
      }
    }
  }
</style>
