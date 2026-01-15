<template>
  <section>
    <TablesParamsAbout class="params" :rows="items" />
  </section>
</template>

<script setup lang="ts">
  import type { AreaOne } from '@/repositories/areas';

  const props = defineProps<{
    area: AreaOne,
  }>();

  const items = computed(() => {
    return [
      { label: 'Расположение', value: props.area.location },
      { label: 'Расстояние от МКАД', value: props.area.mkad },
      { label: 'Площадь', value: props.area.ploshad_doma },
      { label: 'Кадастровый номер', value: props.area.kadastr },
      { label: 'Тип участка', value: props.area.type },
      { label: 'Назначение', value: props.area.naznach },
      { label: 'Газ', value: props.area.gaz },
      { label: 'Электричество', value: props.area.electro },
      { label: 'Канализация', value: props.area.kanaliz },
      { label: 'Водоснабжение', value: props.area.vodosnab },
    ];
  });
</script>

<style scoped lang="scss">
  .params {
    @include xl {
      max-width: 500px;
    }
  }
</style>
