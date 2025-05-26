<template>
  <div class="min-w-screen min-h-screen flex justify-center items-center">
    <UCard as="div" class="max-w-96">
      <template #header>
        <div class="text-2xl">Login - เข้าสู่ระบบ</div>
      </template>

      <UForm
        :schema="schema"
        :state="formState"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField label="User-ID" name="userID">
          <UInput v-model="formState.userID" />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput v-model="formState.password" type="password" />
        </UFormField>

        <UButton type="submit" block :loading="isLoading">
          เข้าสู่ระบบ
        </UButton>
      </UForm>
    </UCard>
  </div>
</template>
<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "@nuxt/ui";

const baseApi = useRuntimeConfig().public.BASE_API;
const toast = useToast();

definePageMeta({
  layout: false,
});

interface TypeFormState {
  userID: string;
  password: string;
}

const schema = object({
  userID: string().required("กรุณาระบุ UserID"),
  password: string().required("กรุณาระบุรหัสผ่าน"),
});

const formState = reactive<TypeFormState>({
  userID: "",
  password: "",
});

const isLoading = ref<boolean>(false);

const onSubmit = async () => {
  isLoading.value = true;

  try {
    const res = await $fetch(`${baseApi}/auth/login`, {
      method: "POST",
      body: formState,
    });

    console.log("response: ", res);
  } catch (err: Error) {
    const errMsg = err?.response?._data?.error;
    toast.add({
      title: "พบข้อผิดพลาด",
      description: errMsg ?? "Something ?",
      color: "error",
      icon: "i-lucide-shield-x",
    });
  } finally {
    isLoading.value = false;
  }
};
</script>
