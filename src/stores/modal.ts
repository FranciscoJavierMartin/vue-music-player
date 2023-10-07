import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export default defineStore('modal', () => {
  const isOpen = ref<boolean>(false);

  const hiddenClass = computed<string>(() => (isOpen.value ? '' : 'hidden'));

  function toggleAuthModal(): void {
    isOpen.value = !isOpen.value;
  }

  return { isOpen, hiddenClass, toggleAuthModal };
});
