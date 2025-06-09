<template>
  <Table :items="items" />
</template>
<script setup lang="ts">
const items = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  },
];
</script>
