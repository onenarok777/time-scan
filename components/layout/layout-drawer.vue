<template>
  <div
    v-if="isOpenDrawer"
    class="fixed lg:static h-full w-full lg:w-auto z-10 flex"
  >
    <div
      class="min-w-[300px] rounded-none lg:rounded-lg bg-base-100 shadow-xl lg:shadow-none p-2"
    >
      <ul class="flex flex-col gap-2">
        <NuxtLink v-for="(menu, index) in items" :key="index" :to="menu.to">
          <li
            :class="[
              ' h-10 flex gap-2 items-center p-2 rounded-lg cursor-pointer',
              route.path === menu.to
                ? 'bg-primary text-white'
                : 'hover:text-primary hover:outline-2 hover:outline-primary ',
            ]"
          >
            <Icon :name="menu.icon" />

            {{ menu.label }}
          </li>
        </NuxtLink>
      </ul>
    </div>
    <div class="w-full bg-black/20" @click="isOpenDrawer = false"></div>
  </div>
</template>
<script setup lang="ts">
import { useEventListener } from "@vueuse/core";
const route = useRoute();

type MenuItem = {
  label: string;
  icon: string;
  to: string;
};

const isOpenDrawer = defineModel<boolean>({ default: false });

const items: MenuItem[] = [
  {
    label: "Dashboard",
    icon: "i-lucide-layout-dashboard",
    to: "/",
  },
  // {
  //   label: "ประวัติการสแกน",
  //   icon: "i-lucide-timer",
  //   to: "/scan-log",
  // },
  {
    label: "นำเข้าข้อมูล",
    icon: "lucide:cloud-upload",
    to: "/upload-time",
  },
];

useEventListener(window, "resize", () => {
  if (window.innerWidth > 1024) {
    isOpenDrawer.value = true;
  }
});
</script>
