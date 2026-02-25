<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <div class="min-h-screen bg-white text-black">
    <header class="sticky top-0 z-20 border-b border-black/10 bg-white/95 backdrop-blur">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <RouterLink to="/" class="font-body text-lg font-medium tracking-[0.08em] lowercase">rocío torres</RouterLink>
        <ul class="flex items-center gap-5 text-xs uppercase tracking-[0.14em] whitespace-nowrap">
          <li>
            <RouterLink to="/" :class="isActive('/') ? 'border-b border-black pb-1' : 'text-black/60 hover:text-black'">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/contacto" :class="isActive('/contacto') ? 'border-b border-black pb-1' : 'text-black/60 hover:text-black'">Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
