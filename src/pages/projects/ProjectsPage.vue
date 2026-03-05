<script setup lang="ts">
import { projectCategories } from '@/data/projects'
import { RouterLink } from 'vue-router'

const folderVisuals: Record<string, { image: string; hoverColor: string; label?: string }> = {
  photography: {
    image: '/images/Carpetaazul .png',
    hoverColor: '#0d5cff',
    label: 'Photograpy',
  },
  posters: {
    image: '/images/Carpetaamarilla .png',
    hoverColor: '#d5a900',
  },
  'branding-identity': {
    image: '/images/Carpetaroja .png',
    hoverColor: '#d0342c',
  },
  'typography-magazine': {
    image: '/images/Carpetaazul .png',
    hoverColor: '#0d5cff',
  },
}
</script>

<template>
  <section class="projects-page min-h-[calc(100vh-90px)] px-3 py-5 sm:min-h-[calc(100vh-73px)] sm:px-4 sm:py-6">
    <div class="mx-auto w-full max-w-6xl">
      <div class="folders-grid" role="list" aria-label="Categorias de proyectos">
        <RouterLink
          v-for="category in projectCategories"
          :key="category.id"
          :to="category.path"
          class="folder-card"
          role="listitem"
          :style="{ '--folder-hover': folderVisuals[category.id]?.hoverColor ?? '#000000' }"
        >
          <img
            class="folder-image"
            :src="folderVisuals[category.id]?.image ?? '/images/Carpetaazul .png'"
            :alt="`Carpeta de ${category.title}`"
          />
          <p class="folder-label tk-eurostile-extended">{{ folderVisuals[category.id]?.label ?? category.title }}</p>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-page {
  background: #ffffff;
}

.folders-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2.8vw, 2rem);
  align-items: start;
  justify-items: start;
}

.folder-card {
  --folder-hover: #000000;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.55rem;
  text-decoration: none;
}

.folder-image {
  width: clamp(150px, 24vw, 255px);
  height: auto;
  transform-origin: center;
  transition: transform 0.18s ease;
}

.folder-label {
  margin: 0;
  color: #000000;
  font-family: 'eurostile-extended', sans-serif;
  font-size: clamp(1.05rem, 1.65vw, 1.7rem);
  letter-spacing: 0.01em;
  transition: color 0.18s ease;
}

.folder-card:hover .folder-image {
  transform: scale(1.08);
}

.folder-card:hover .folder-label {
  color: var(--folder-hover);
}

@media (max-width: 640px) {
  .folders-grid {
    grid-template-columns: 1fr;
  }
}
</style>
