<template>
  <div
    class="h-15 flex items-center p-2 bg-white dark:bg-slate-900 rounded-lg"
  >
    <div class="text-xl font-bold flex-1">Navbar</div>
    <ButtonDarkMode />
    <UButton
      class="cursor-pointer lg:hidden"
      icon="i-lucide-align-justify"
      size="md"
      color="neutral"
      variant="ghost"
      @click="isOpenDrawer = !isOpenDrawer"
    />
  </div>
</template>
<script setup lang="ts">
const isOpenDrawer = defineModel<boolean>("open-drawer", false);
</script>
