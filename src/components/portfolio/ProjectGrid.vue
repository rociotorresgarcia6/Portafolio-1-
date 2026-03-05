<script setup lang="ts">
import type { ProjectItem } from '@/data/projects'
import { RouterLink } from 'vue-router'
import { ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  title: string
  description: string
  items: ProjectItem[]
}>()
</script>

<template>
  <section class="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6 sm:py-16">
    <header class="space-y-2">
      <h1 class="font-display text-4xl font-black tracking-tight sm:text-5xl">{{ title }}</h1>
      <p class="max-w-2xl text-slate-600">{{ description }}</p>
    </header>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="project in items"
        :key="project.id"
        class="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
      >
        <img :src="project.image" :alt="project.title" class="h-52 w-full object-cover" />
        <div class="space-y-2 p-4">
          <p class="text-xs uppercase tracking-wide text-slate-500">{{ project.year }} · {{ project.tool }}</p>
          <h2 class="text-lg font-semibold">{{ project.title }}</h2>
          <p class="text-sm text-slate-600">{{ project.summary }}</p>
          <RouterLink :to="`/projects/${project.id}`" class="inline-flex items-center gap-1 text-sm font-semibold">
            Ver proyecto
            <ArrowUpRight class="size-4" />
          </RouterLink>
        </div>
      </article>
    </div>
  </section>
</template>
