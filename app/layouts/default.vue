<template>
  <div class="flex min-h-screen bg-gray-100">
    <aside class="w-64 bg-white shadow">
      <!-- Aquí va tu menú -->
      <div class="p-4 font-bold text-xl">UltraLink Admin</div>
      <ul>
        <li><NuxtLink to="/">Dashboard</NuxtLink></li>
        <li><NuxtLink to="/usuarios">Usuarios</NuxtLink></li>
      </ul>
    </aside>
    <main class="flex-1 p-6">
      <slot />
    </main>
  </div>
</template>
