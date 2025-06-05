<template>
  <InputSwitch v-model="settingStore.darkMode">
    <template #on>
      <Icon name="lucide:moon" size="20" />
    </template>
    <template #off>
      <Icon name="lucide:sun" size="20" />
    </template>
  </InputSwitch>
</template>
<script setup lang="ts">
import { useStoreSetting } from "@/stores/store-setting";

const settingStore = useStoreSetting();
</script>
