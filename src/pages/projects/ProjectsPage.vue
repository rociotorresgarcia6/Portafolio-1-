<script setup lang="ts">
import { RouterLink } from 'vue-router'

const projectButtons = [
  {
    id: 'photography',
    label: 'Photography',
    path: '/projects/photography',
    image: '/images/Carpetaamarilla .png',
  },
  {
    id: 'posters',
    label: 'Posters',
    path: '/projects/posters',
    image: '/images/Carpetaazul .png',
  },
  {
    id: 'branding-identity',
    label: 'Branding and Identity Projects',
    path: '/projects/branding-identity',
    image: '/images/Carpetaroja .png',
  },
  {
    id: 'typography-magazine',
    label: 'Tipography and Magazine Works',
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
}

.project-button {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.project-button-image {
  width: clamp(180px, 28vw, 255px);
  height: auto;
  transition: transform 0.2s ease;
}

.project-button-label {
  margin-top: -0.1rem;
  color: #1e1e1e;
  font-family: 'sloop-script-two', 'Sloop Script Bold Two', 'sloop-script-one', cursive;
  font-size: clamp(1.3rem, 2vw, 1.9rem);
  text-align: center;
}

.project-button:hover .project-button-image {
  transform: scale(1.06);
}
</style>
