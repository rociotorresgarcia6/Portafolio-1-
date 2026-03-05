<script setup lang="ts">
import ProjectGrid from '@/components/portfolio/ProjectGrid.vue'
import { projectsByCategory } from '@/data/projects'

const items = projectsByCategory('photography')
</script>

<template>
  <ProjectGrid
    title="Photography"
    description="Retratos, calle y series visuales. Seleccion de trabajos recientes."
    :items="items"
  />
</template>
