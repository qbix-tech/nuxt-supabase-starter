<template>
  <UButton
    variant="ghost"
    size="xl"
    :icon="colorMode.value === 'light' ? 'i-heroicons-sun' : 'i-heroicons-moon'"
    @click="toggleColorMode"
  />
</template>

<script setup>
const colorMode = useColorMode();
const toggleColorMode = () => {
  if (colorMode.value === "light") {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "light";
  }
};
</script>
