<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { featuredProjects } from '@/data/projects'
import { useCarousel } from '@/composables/useCarousel'

const { currentIndex, canGoNext, canGoPrev, goNext, goPrev, goTo } = useCarousel(featuredProjects.length)

const transformValue = computed(() => `translateX(-${currentIndex.value * 100}%)`)
</script>

<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="font-display text-2xl font-black sm:text-3xl">Proyectos destacados</h2>
      <div class="flex items-center gap-2">
        <Button variant="outline" size="icon" :disabled="!canGoPrev" @click="goPrev">
          <ChevronLeft />
        </Button>
        <Button variant="outline" size="icon" :disabled="!canGoNext" @click="goNext">
          <ChevronRight />
        </Button>
      </div>
    </div>

    <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div class="flex transition-transform duration-500" :style="{ transform: transformValue }">
        <article v-for="project in featuredProjects" :key="project.id" class="w-full shrink-0">
          <img :src="project.image" :alt="project.title" class="h-72 w-full object-cover sm:h-96" />
          <div class="space-y-3 p-5 sm:p-6">
            <p class="text-xs uppercase tracking-wide text-slate-600">{{ project.category }} · {{ project.year }}</p>
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <p class="text-sm text-slate-600">{{ project.summary }}</p>
            <Button as-child>
              <RouterLink :to="`/projects/${project.id}`">Ver detalle</RouterLink>
            </Button>
          </div>
        </article>
      </div>
    </div>

    <div class="flex items-center justify-center gap-2">
      <button
        v-for="(project, index) in featuredProjects"
        :key="project.id"
        class="h-2.5 w-2.5 rounded-full transition"
        :class="index === currentIndex ? 'bg-black' : 'bg-slate-300 hover:bg-slate-500'"
        @click="goTo(index)"
      />
    </div>
  </section>
</template>
