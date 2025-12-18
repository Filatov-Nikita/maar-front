import { items } from './data';

export default function() {
  const grid = useAppGrid();

  const showedCols = ref(1);

  const colsList = computed(() => {
    if(grid.value.lg) return items;
    return items.slice(0, showedCols.value);
  });

  const canShow = computed(() => showedCols.value < items.length);

  function showMore() {
    showedCols.value = Math.min(items.length, showedCols.value + 1);
  }

  return {
    canShow,
    showedCols,
    colsList,
    showMore,
  }
}
