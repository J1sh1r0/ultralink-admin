<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const submit = async () => {
  loading.value = true
  error.value = ''

  const { data, error: err } = await useFetch('/api/login', {
    method: 'POST',
    body: { email: email.value, password: password.value }
  })

  loading.value = false

  if (err.value) {
    error.value = err.value?.data?.message || 'Error al iniciar sesión'
  } else {
    navigateTo('/')
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form @submit.prevent="submit" class="bg-white p-6 rounded shadow w-80">
      <h1 class="text-xl font-bold mb-4">Iniciar Sesión</h1>

      <input v-model="email" type="text" placeholder="Email"
        class="w-full mb-3 px-3 py-2 border rounded" />

      <input v-model="password" type="password" placeholder="Contraseña"
        class="w-full mb-3 px-3 py-2 border rounded" />

      <button :disabled="loading" type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        {{ loading ? 'Cargando...' : 'Entrar' }}
      </button>

      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </form>
  </div>
</template>
