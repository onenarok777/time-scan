<template>
  <div class="join">
    <button 
      class="join-item btn" 
      :disabled="currentPage === 1"
      @click="handlePageChange(currentPage - 1)"
    >
      «
    </button>
    <button 
      v-for="page in displayedPages" 
      :key="page"
      class="join-item btn"
      :class="{ 'btn-active': page === currentPage }"
      @click="handlePageChange(page)"
    >
      {{ page }}
    </button>
    <button 
      class="join-item btn" 
      :disabled="currentPage === totalPages"
      @click="handlePageChange(currentPage + 1)"
    >
      »
    </button>
  </div>
</template>

<script setup lang="ts">
type PageNumber = number;
type PageItem = PageNumber | '...';

const props = defineProps<{
  items: any[];
  itemsPerPage?: number;
}>();

const emit = defineEmits<{
  (e: 'update:page', page: number): void;
}>();

const itemsPerPage = computed(() => props.itemsPerPage || 10);
const totalPages = computed(() => Math.ceil(props.items.length / itemsPerPage.value));
const currentPage = ref(1);

const displayedPages = computed(() => {
  const pages: PageItem[] = [];
  const maxVisiblePages = 5;
  
  if (totalPages.value <= maxVisiblePages) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage.value <= 3) {
      for (let i = 1; i <= 4; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages.value);
    } else if (currentPage.value >= totalPages.value - 2) {
      pages.push(1);
      pages.push('...');
      for (let i = totalPages.value - 3; i <= totalPages.value; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = currentPage.value - 1; i <= currentPage.value + 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages.value);
    }
  }
  
  return pages;
});

const handlePageChange = (page: PageItem) => {
  if (page === '...' || typeof page !== 'number' || page < 1 || page > totalPages.value) return;
  currentPage.value = page;
  emit('update:page', page);
};
</script>
