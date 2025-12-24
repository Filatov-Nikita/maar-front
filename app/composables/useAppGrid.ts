import { useGrid, useScreen } from 'vue-screen';

export function useAppScreen() {
  return useScreen();
}

export function useAppGrid() {
  const { $thresholds, $ssrViewport } = useNuxtApp();

  const grid = ref({
    xs: $ssrViewport.width > 0 && $ssrViewport.width < $thresholds.md,
    md: $ssrViewport.width >= $thresholds.md,
    lg: $ssrViewport.width >= $thresholds.lg,
    xl: $ssrViewport.width >= $thresholds.xl,
    breakpoint:
      $ssrViewport.width >= $thresholds.xl ? 'xl' :
      $ssrViewport.width >= $thresholds.lg ? 'lg' :
      $ssrViewport.width >= $thresholds.md ? 'md' :
      'xs',
  });

  onMounted(() => {
    const res = useGrid({
      xs: 0,
      md: $thresholds.md,
      lg: $thresholds.lg,
      xl: $thresholds.xl,
    });

    grid.value = res;
  });

  return grid;
}
