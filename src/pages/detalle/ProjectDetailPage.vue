<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { ArrowLeft, Calendar, Wrench } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { findProjectById } from '@/data/projects'

const route = useRoute()

const project = computed(() => findProjectById(route.params.id as string))
</script>

<template>
  <section class="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:px-6 sm:py-14">
    <Button variant="ghost" as-child class="px-0">
      <RouterLink to="/">
        <ArrowLeft class="size-4" />
        Volver
      </RouterLink>
    </Button>

    <article v-if="project" class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <img :src="project.image" :alt="project.title" class="h-72 w-full object-cover sm:h-96" />
      <div class="space-y-4 p-6 sm:p-8">
        <p class="text-xs uppercase tracking-wide text-slate-500">{{ project.category }}</p>
        <h1 class="font-display text-4xl font-black leading-tight">{{ project.title }}</h1>
        <p class="max-w-3xl text-slate-700">{{ project.summary }}</p>
        <div class="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
          <p class="inline-flex items-center gap-2">
            <Calendar class="size-4" />
            Año: {{ project.year }}
          </p>
          <p class="inline-flex items-center gap-2">
            <Wrench class="size-4" />
            Herramientas: {{ project.tool }}
          </p>
        </div>
      </div>
    </article>

    <article v-else class="rounded-xl border border-slate-200 bg-white p-6">
      <h1 class="mb-2 text-2xl font-bold">Proyecto no encontrado</h1>
      <p class="text-slate-700">El enlace no existe o el proyecto todavía no fue añadido.</p>
    </article>
  </section>
</template>
