<template>
  <div class="flex flex-col items-center">
    <UCard class="min-w-xs m-12 w-full max-w-sm place-self-center">
      <template #header>
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-semibold">Login</h1>
          <QColorModeToggle />
        </div>
      </template>
      <div class="space-y-4" @keyup.enter="login">
        <UFormGroup label="Email" required>
          <UInput
            v-model="email"
            type="email"
            placeholder="Email"
            icon="i-heroicons-envelope"
            :loading="loading"
          />
        </UFormGroup>
        <UFormGroup label="Password" required>
          <UInput
            v-model="password"
            type="password"
            placeholder="Password"
            icon="i-heroicons-lock-closed"
            :loading="loading"
          />
        </UFormGroup>
      </div>

      <template #footer>
        <UButton size="lg" block :loading="loading" @click="login"
          >Login</UButton
        >
      </template>
    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "plain",
  title: "Login",
});

const supabase = useSupabaseClient();
const toast = useToast();

const email = ref("");
const password = ref("");
const loading = ref(false);

const login = async () => {
  if (!email.value || !password.value) {
    toast.add({
      title: "Login Unsuccessful",
      description: "Please fill in all fields.",
      color: "red",
    });
    return;
  }

  loading.value = true;

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    toast.add({
      title: "Login Unsuccessful",
      description: "Invalid email or password. Please try again.",
      color: "red",
    });
    loading.value = false;
    return;
  }

  toast.add({
    title: "Login Successful!",
    description: "You have successfully logged in.",
    color: "green",
  });
  await navigateTo("/");
};
</script>
