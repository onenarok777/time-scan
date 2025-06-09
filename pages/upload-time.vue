<template>
  <div class="w-full h-full bg-base-100 p-4 rounded-lg">
    <div v-if="file" class="w-full h-full flex flex-col gap-4 pb-4">
      <div class="border-b border-base-200 flex justify-between py-2">
        <div class="text-sm md:text-base lg:text-lg">รายการเวลาสแกน</div>
        <Button @click="onSendFile">Upload File</Button>
      </div>
      <Table :items="data" />
    </div>
    <div
      v-else
      class="relative w-full h-full border-2 border-primary bg-primary/10 border-dashed rounded-lg flex justify-center items-center text-primary"
    >
      <input
        type="file"
        :accept="allowedTypes.join(',')"
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
interface TypeData {
  id: number;
  time_scan: Date;
}

const allowedTypes: string[] = [
  "text/csv",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
];

const file = ref<File | null>(null);
const isLoading = ref<boolean>(false);
const data = ref<TypeData[]>([]);

const onChangeFile = async (event: Event) => {
  const target: HTMLInputElement = event.target as HTMLInputElement;
  const fileObj: File | undefined = target.files?.[0];
  file.value = fileObj ?? null;
  data.value = await ReadFileTimeLogs(fileObj as File);
  target.value = "";
};

const onSendFile = () => {
  isLoading.value = true;

  try {
  } catch (error) {}
};
</script>
