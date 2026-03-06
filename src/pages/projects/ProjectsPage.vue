<script setup lang="ts">
import { RouterLink } from 'vue-router'

const projectButtons = [
  {
    id: 'photography',
    label: 'photography',
    path: '/projects/photography',
    image: '/images/Carpetaamarilla .png',
  },
  {
    id: 'posters',
    label: 'posters',
    path: '/projects/posters',
    image: '/images/Carpetaazul .png',
  },
  {
    id: 'branding-identity',
    label: 'branding and identity projects',
    path: '/projects/branding-identity',
    image: '/images/Carpetaroja .png',
  },
  {
    id: 'typography-magazine',
    label: 'tipography and magazine works',
    path: '/projects/typography-magazine',
    image: '/images/Carpetaamarilla .png',
  },
]
</script>

<template>
  <section class="projects-page min-h-[calc(100vh-90px)] px-3 py-5 sm:min-h-[calc(100vh-73px)] sm:px-4 sm:py-6">
    <div class="projects-buttons" aria-label="Project categories">
      <RouterLink
        v-for="button in projectButtons"
        :key="button.id"
        :to="button.path"
        class="project-button"
      >
        <img :src="button.image" :alt="`Open ${button.label}`" class="project-button-image" />
        <span class="project-button-label">{{ button.label }}</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.projects-page {
  background: #f8f8f8;
}

.projects-buttons {
  width: min(100%, 420px);
  margin: 0;
  padding-left: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;
}

.project-button {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
}

.project-button-image {
  width: clamp(120px, 18vw, 170px);
  height: auto;
  transition: transform 0.2s ease;
}

.project-button-label {
  margin-top: -0.7rem;
  padding-left: 0.85rem;
  color: #1e1e1e;
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: clamp(0.85rem, 1.3vw, 1.2rem);
  text-align: left;
}

.project-button:hover .project-button-image {
  transform: scale(1.06);
}
</style>
