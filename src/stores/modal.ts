import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export default defineStore('modal', () => {
  const isOpen = ref<boolean>(false);

  const hiddenClass = computed<string>(() => (isOpen.value ? '' : 'hidden'));

  function toggleAuthModal(): void {
    console.log('Hello', isOpen.value)
    isOpen.value = !isOpen.value;
    console.log('Bye', isOpen.value)
  }

  return { isOpen, hiddenClass, toggleAuthModal };
});
