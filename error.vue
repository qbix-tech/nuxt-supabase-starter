<template>
  <NuxtLayout name="plain">
    <div class="flex flex-col items-center">
      <UCard class="min-w-xs m-12 w-full max-w-sm place-self-center">
        <div class="flex flex-col items-center justify-center gap-4">
          <span
            data-testid="errorCodeText"
            class="text-primary-500 dark:text-primary-400 text-4xl font-light"
            >{{ error.statusCode }}</span
          >
          <span
            data-testid="errorCodeMessage"
            class="text-center text-gray-800 dark:text-gray-100"
            >{{ error.message }}</span
          >
          <UButton
            data-testid="backToSafetyButton"
            class="mt-6"
            size="lg"
            block
            @click="handleError"
          >
            Back To Home
          </UButton>
        </div>
      </UCard>
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

useHead({
  title: computed(() => `${props?.error?.statusCode || "500"} - qbix`),
});

const handleError = () => clearError({ redirect: "/" });
</script>
