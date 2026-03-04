<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="projects-page min-h-[calc(100vh-90px)] px-3 py-2 sm:min-h-[calc(100vh-73px)] sm:px-4 sm:py-3">
    <div class="projects-list">
      <RouterLink to="/projects/photography" class="project-card">
        <p>Photography</p>
      </RouterLink>
      <RouterLink to="/projects/posters" class="project-card">
        <p>Posters</p>
      </RouterLink>
      <RouterLink to="/projects/branding-identity" class="project-card">
        <p>Brandign and identity projects</p>
      </RouterLink>
      <RouterLink to="/projects/typography-magazine" class="project-card">
        <p>Tipography and magazine works</p>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.projects-page {
  background: #ffffff;
}

.projects-list {
  display: grid;
  gap: 2rem;
}

.project-card {
  border: 1px solid #000000;
  background: #ffffff;
  min-height: clamp(56px, 6.2vw, 72px);
  display: flex;
  align-items: center;
  padding: 0.8rem 1.15rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.16s ease, border-color 0.16s ease, color 0.16s ease;
}

.project-card p {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: italic;
  font-size: clamp(1rem, 1.7vw, 1.95rem);
  color: #000000;
}

.project-card:hover {
  background: #fb1200;
  border-color: transparent;
}

.project-card:hover p {
  color: #ffffff;
}
</style>
