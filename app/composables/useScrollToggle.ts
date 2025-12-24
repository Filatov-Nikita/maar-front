import { onUnmounted, watch, type Ref } from 'vue';

export default function(value: Ref<boolean>, disabled?: Ref<boolean>) {
  watch(value, () => {
    if(disabled && disabled.value) return;

    if(value.value) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, { immediate: true });

  onUnmounted(() => {
    document.body.classList.remove('overflow-hidden');
  });
}
