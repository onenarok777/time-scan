<template>
  <label class="swap">
    <input type="checkbox" v-model="swap" />
    <div class="swap-on flex items-center justify-center">
      <slot name="on" />
    </div>
    <div class="swap-off flex items-center justify-center">
      <slot name="off" />
    </div>
  </label>
</template>
<script setup lang="ts">

const swap = defineModel<boolean>();
</script>
