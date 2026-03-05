<script setup lang="ts">
import ProjectGrid from '@/components/portfolio/ProjectGrid.vue'
import { projectsByCategory } from '@/data/projects'

const items = projectsByCategory('branding-identity')
</script>

<template>
  <ProjectGrid
    title="Branding and Identity"
    description="Identidades visuales y sistemas de marca con aplicaciones reales."
    :items="items"
  />
</template>
