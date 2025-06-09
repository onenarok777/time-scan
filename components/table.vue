<template>
  <div v-if="items.length > 0" class="overflow-y-auto h-full">
    <table class="table table-zebra">
      <thead class="sticky top-0 bg-base-100">
        <tr>
          <th v-for="(column, i_column) in columns" :key="i_column">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i_item) in items" :key="i_item">
          <td v-for="(column, i_column) in columns" :key="i_column">
            {{ item[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="w-full h-full flex justify-center items-center">
    <div class="text-center text-sm md:text-lg lg:text-xl">No Data !</div>
  </div>
</template>
<script setup lang="ts">
type TypeItem = Record<string, any>;
type TypeColumn = {
  label: string;
  key: string;
};

const props = withDefaults(
  defineProps<{
    items?: TypeItem[];
    columns?: TypeColumn[];
  }>(),
  {
    items: () => [],
    columns: () => [],
  }
);

const columns = computed(() => {
  if (props.columns.length > 0) {
    return props.columns;
  }

  return Object.keys(props.items[0]).map((key) => ({
    label: key,
    key,
  }));
});
</script>
