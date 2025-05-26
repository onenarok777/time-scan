<template>
  <div class="w-full h-full bg-white dark:bg-slate-900 p-4 rounded-lg">
    <div v-if="file" class="h-full flex justify-center items-center">
      <div class="w-64 flex flex-col items-center gap-4">
        <Icon name="svg:microsoft-excel-icon" size="100" />
        <div>
          {{ file?.name }}
        </div>
        <UButton block :loading="isLoading" @click="onSendFile">
          อัพโหลด
        </UButton>
      </div>
    </div>
    <div
      v-else
      class="relative w-full h-full border-2 border-primary bg-primary/20 border-dashed rounded-lg flex justify-center items-center"
    >
      <input
        type="file"
        :accept="allowedTypes"
        class="absolute top-0 left-0 right-0 bottom-0 opacity-0"
        @change="onChangeFile"
      />
      <div class="flex flex-col gap-6 justify-ceter items-center">
        <Icon name="lucide:upload" size="64" />
        <div class="text-center text-sm md:text-lg lg:text-xl">
          รองรับเฉพาะไฟล์ .csv และ Excel (.xls, .xlsx) เท่านั้น
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const toast = useToast();

const file = ref<File>(null);
const isLoading = ref<boolean>(false);

const allowedTypes = [
  "text/csv",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
];

const onChangeFile = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const fileObj = target.files?.[0];

  target.value = "";

  if (!allowedTypes.includes(fileObj.type)) {
    toast.add({
      title: "ชนิดของไฟล์ไม่ถูกต้อง",
      description: "กรุณาเลือกไฟล์ใหม่อีกครั้ง",
      color: "error",
      icon: "i-lucide-shield-x",
    });

    return;
  }

  file.value = fileObj;
};

const onSendFile = () => {
  isLoading.value = true;

  try {
  } catch (error) {}
};
</script>
