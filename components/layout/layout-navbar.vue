<template>
  <div class="h-15 flex gap-2 items-center p-2 bg-base-100 rounded-lg">
    <div class="text-xl font-bold flex-1">TimeScans</div>
    <SwitchDarkMode />
    <div
      class="lg:hidden cursor-pointer w-10 flex justify-center items-center"
      @click="isOpenDrawer = !isOpenDrawer"
    >
      <Icon name="lucide:menu" size="20" />
    </div>
  </div>
</template>
<script setup lang="ts">
const isOpenDrawer = defineModel<boolean>({ default: false });
</script>
