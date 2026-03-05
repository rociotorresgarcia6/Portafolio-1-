<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-white text-black">
    <header class="sticky top-0 z-20 border-b border-black/10 bg-white/95 backdrop-blur">
      <nav class="flex h-[73px] items-center justify-between px-3 sm:px-4">
        <RouterLink to="/" class="brand-link" aria-label="Home">
          <img src="/images/solamarillo.PNG" alt="Sol amarillo" class="brand-star" />
        </RouterLink>

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
  display: inline-flex;
  align-items: center;
  line-height: 1;
}

.brand-star {
  height: clamp(2.9rem, 4.6vw, 3.5rem);
  width: auto;
}

.menu-link {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: clamp(1rem, 1.8vw, 1.4rem);
  line-height: 1;
  color: #000000;
  text-decoration: none;
}

.menu-link:hover {
  text-decoration: underline;
  text-underline-offset: 0.18em;
}
</style>
