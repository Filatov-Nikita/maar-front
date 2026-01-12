export default function<T extends Array<any>>(items: Ref<T>, step = 8, from = 0) {
  const paginator = ref({
    current: step,
  });

  function showMore() {
    paginator.value.current = Math.min(paginator.value.current + step, items.value.length);
  }

  const itemsList = computed(() => {
    return items.value.slice(from, paginator.value.current);
  });

  const canShow = computed(() => {
    return paginator.value.current < items.value.length;
  });

  return {
    paginator,
    itemsList,
    canShow,
    showMore,
  };
}
