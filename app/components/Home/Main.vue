<template>
  <div class="main">
    <div class="wrap">
      <h1 class="h1 title">
        Строим элитные резиденции в&nbsp;лучших локациях Москвы и&nbsp;области
      </h1>
      <div class="links">
        <div class="link-item">
          <BaseLinkPrimary href="/">
            Riita
          </BaseLinkPrimary>
        </div>
        <div class="link-item">
          <BaseLinkPrimary href="/">
            Agalarov Estate
          </BaseLinkPrimary>
        </div>
        <div class="link-item">
          <BaseLinkPrimary href="/">
            Gorki
          </BaseLinkPrimary>
        </div>
        <div class="link-item">
          <BaseLinkPrimary href="/">
            Millenium Park
          </BaseLinkPrimary>
        </div>
      </div>
    </div>
    <div class="poster-block">
      <BaseImageResp
        pictute
        class="w-full"
        width="736"
        height="876"
        :url="ImageVideo"
        :md="{
          width: 2112,
          height: 1042,
          url: ImageVideoXl,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ImageVideo from '~/assets/images/temp/main-video.jpg';
  import ImageVideoXl from '~/assets/images/temp/main-video-xl.jpg';
</script>

<style scoped lang="scss">
  .main {
    padding: 60px 0 30px;

    @include xl {
      padding-bottom: 40px;
      padding-top: 90px;
    }
  }

  .title {
    max-width: 500px;
    margin-bottom: 30px;

    @include xl {
      margin-bottom: 0px;
    }
  }

  .poster-block {
    margin-top: 70px;

    @include xl {
      margin-top: 30px;
    }
  }

  .wrap {
    @include xl {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 50px;
      justify-content: space-between;
    }
  }

  .links {
    @include row();
    @include gap(5px, 5px);
  }

  .link-item {
    @include col();
    @include size(50%);
  }
</style>
