<script setup lang="ts">
import ProjectGrid from '@/components/portfolio/ProjectGrid.vue'
import { projectsByCategory } from '@/data/projects'

const items = projectsByCategory('typography-magazine')
</script>

<template>
  <ProjectGrid
    title="Typography and Magazine"
    description="Piezas editoriales y estudios tipograficos orientados a narrativas impresas."
    :items="items"
  />
</template>
