import { ref, watch, onBeforeMount } from "vue";
import { defineStore } from "pinia";

export const useStoreSetting = defineStore("store-setting", () => {
  const colorMode = useColorMode();
  const darkMode = ref<boolean>(false);

  watch(darkMode, () => {
    const mode = darkMode.value ? "dark" : "light";
    colorMode.preference = mode;
  });

  onBeforeMount(() => {
    darkMode.value = colorMode.value === "dark";
  });

  return { darkMode };
});
