<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-white text-black">
    <header class="sticky top-0 z-20 border-b border-black/10 bg-white/95 backdrop-blur">
      <nav class="flex items-center justify-between px-3 py-4 sm:px-4">
        <RouterLink to="/" class="brand-link">rochos</RouterLink>

        <ul class="flex items-center gap-6 whitespace-nowrap">
          <li>
            <RouterLink to="/projects" class="menu-link">projects</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="menu-link">about</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="menu-link">contact</RouterLink>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.brand-link {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: clamp(1.7rem, 2.5vw, 2.2rem);
  line-height: 0.9;
  text-transform: lowercase;
  color: #fb1200;
}

.menu-link {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: italic;
  font-size: 1.55rem;
  line-height: 1;
  color: #000000;
  text-decoration: none;
}

.menu-link:hover {
  text-decoration: underline;
  text-underline-offset: 0.18em;
}
</style>
