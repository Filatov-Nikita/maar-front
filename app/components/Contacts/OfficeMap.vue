<template>
  <ClientOnly>
    <yandex-map
      class="map"
      :settings="{
        location: {
          center: office.coords,
          zoom: 17,
        },
      }"
      width="100%"
      height="100%"
    >
      <yandex-map-default-scheme-layer
        :settings="{ customization: layerStg }"
      />
      <yandex-map-default-features-layer/>
      <yandex-map-marker :settings="{ coordinates: office.coords }">
        <img
          class="marker-img marker"
          width="102"
          height="113"
          src="/images/map-marker.svg"
        >
      </yandex-map-marker>
    </yandex-map>
  </ClientOnly>
</template>

<script setup lang="ts">
  import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapMarker,
  } from 'vue-yandex-maps';
  import type { CustomizationItem } from '@yandex/ymaps3-types';

  const office = useAppConfig().contacts.office;

  const layerStg = shallowRef<CustomizationItem[]>([
    {
      tags: {
        any: ['landscape', 'admin', 'land', 'transit'],
      },
      elements: 'geometry',
      stylers: [
        {
          color: '#E6E6E6',
        },
      ],
    },
    {
      tags: {
        any: ['road'],
      },
      elements: 'geometry',
      stylers: [
        {
          color: '#D6D6D6',
        },
      ],
    },
    {
      tags: {
        any: ['water'],
      },
      elements: 'geometry',
      stylers: [
        {
          color: '#C2C2C2',
        },
      ],
    },
    {
      tags: {
        any: ['building'],
      },
      elements: 'geometry',
      stylers: [
        {
          color: '#CDCDCD',
        },
      ],
    },
  ]);
</script>

<style scoped lang="scss">
  .marker {
    width: 70px;
    height: 77px;

    @include lg {
      width: 102px;
      height: 113px;
    }
  }
</style>
