<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>

<template>
  <section class="mx-auto flex min-h-[calc(100vh-90px)] w-full max-w-6xl flex-col px-4 py-8 sm:min-h-[calc(100vh-73px)] sm:px-6 sm:py-12">
    <div class="grid min-h-[58vh] items-center border border-black/10 px-4 py-8 sm:min-h-[62vh] sm:grid-cols-[180px_1fr] sm:px-8 sm:py-0">
      <p class="text-center font-body text-sm lowercase tracking-[0.25em] sm:text-left sm:text-base">
        rocío torres
      </p>
      <h1 class="text-center font-display text-[clamp(2.5rem,13vw,6.5rem)] uppercase leading-none tracking-[0.08em] sm:tracking-[0.1em]">PORTFOLIO</h1>
    </div>

    <div class="mt-6 rounded-none border border-dashed border-black/30 px-5 py-10 text-center sm:mt-8 sm:py-14">
      <p class="font-body text-sm uppercase tracking-[0.18em] text-black/75">carousel placeholder</p>
      <p class="mt-2 text-sm text-black/60">Here you will add your project carousel in the next commits.</p>
    </div>

    <Button as-child variant="outline" class="mt-6 h-12 w-full rounded-none border-black text-sm uppercase tracking-[0.16em] hover:bg-black hover:text-white sm:mt-8">
      <RouterLink to="/contacto">Contact</RouterLink>
    </Button>
  </section>
</template>
