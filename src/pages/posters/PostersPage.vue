<script setup lang="ts">
import ProjectGrid from '@/components/portfolio/ProjectGrid.vue'
import { projectsByCategory } from '@/data/projects'

const items = projectsByCategory('posters')
</script>

<template>
  <ProjectGrid
    title="Posters"
    description="Carteleria para eventos, musica y piezas de impacto visual."
    :items="items"
  />
</template>
