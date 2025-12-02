type Options = {
  threshold?: number | number[],
  rootMargin?: string,
  once?: boolean,
};

export function useIntersect(options: Options = {}) {
  const targetRef = ref<HTMLElement | null>(null);
  const isIntersect = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if(targetRef.value) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting) {
              isIntersect.value = true;
              if(observer && options.once === true) {
                observer.unobserve(entry.target);
              }
            } else {
              isIntersect.value = false;
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0,
          ...options,
        }
      );

      observer.observe(targetRef.value);
    }
  });

  onUnmounted(() => {
    if(observer) {
      observer.disconnect();
    }
  });

  return {
    targetRef,
    isIntersect,
  }
}
