<template>
  <div
    v-if="isOpenDrawer"
    class="fixed lg:static h-full w-[250px] rounded-none lg:rounded-lg bg-white dark:bg-neutral-900 shadow-xl lg:shadow-none p-2 z-10"
  >
    <UNavigationMenu
      class="w-full"
      orientation="vertical"
      color="primary"
      :items="items"
    />
  </div>
</template>
<script setup lang="ts">
import { useEventListener } from "@vueuse/core";
import type { NavigationMenuItem } from "@nuxt/ui";

const isOpenDrawer = defineModel<boolean>(false);
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Dashboard",
      icon: "i-lucide-layout-dashboard",
      to: "/",
    },
    {
      label: "ประวัติการสแกน",
      icon: "i-lucide-timer",
      to: "/scan-log",
    },
    {
      label: "นำเข้าข้อมูล",
      icon: "i-lucide-cloud-upload",
      to: "/upload-time",
    },
  ],
]);

useEventListener(window, "resize", () => {
  if (window.innerWidth > 1024) {
    isOpenDrawer.value = true;
  }
});
</script>
