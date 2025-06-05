<template>
  <div class="h-screen flex gap-2 lg:p-2 bg-base-200">
    <LayoutDrawer v-model="isOpenDrawer" />
    <div class="flex-1 flex flex-col gap-2 p-2 lg:p-0">
      <LayoutNavbar v-model="isOpenDrawer" />
      <div class="h-full overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const isOpenDrawer = ref<boolean>(true);
</script>
