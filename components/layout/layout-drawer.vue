<template>
  <div
    v-if="isOpenDrawer"
    class="fixed lg:static h-full w-full lg:w-auto z-10 flex"
  >
    <div
      class="min-w-[300px] rounded-none lg:rounded-lg bg-base-100 shadow-xl lg:shadow-none"
    >
      asdsad
    </div>
    <div class="w-full bg-black/20"></div>
  </div>
</template>
<script setup lang="ts">
import { useEventListener } from "@vueuse/core";

const isOpenDrawer = defineModel<boolean>({ default: false });
const items = ref<Record<string, string>[]>([
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
]);

useEventListener(window, "resize", () => {
  if (window.innerWidth > 1024) {
    isOpenDrawer.value = true;
  }
});
</script>
