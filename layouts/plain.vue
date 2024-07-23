<template>
  <div>
    <div
      class="flex min-h-[100svh] w-full flex-col bg-gray-50 dark:bg-black print:!bg-white"
    >
      <main class="pb-16">
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: grayscale(1);
  transform: translateY(0.1rem);
}
</style>
