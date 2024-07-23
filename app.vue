<template>
  <div class="scroll-smooth subpixel-antialiased dark:antialiased">
    <UNotifications />
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right, #22d3ee 0%, #a5f3fc 50%, #22d3ee 100%)"
      :height="3"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();

useHead({
  title: computed(() =>
    route.meta.title ? `${route.meta.title} - qbix` : "qbix",
  ),
});
</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: grayscale(1);
  transform: translateY(0.1rem);
}
</style>
