<script setup lang="ts">
import { Instagram, Mail, Phone } from 'lucide-vue-next'
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
    <h1 class="font-display text-4xl uppercase tracking-[0.12em] sm:text-6xl">Contact</h1>
    <p class="mt-4 font-body text-base tracking-[0.08em]">Call me to work together!</p>

    <div class="mt-10 space-y-5 text-base sm:text-lg">
      <div class="space-y-1 tracking-[0.06em]">
        <p class="inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-black/65">
          <Instagram class="size-4" />
          Instagram
        </p>
        <p>roociotorress</p>
      </div>
      <div class="space-y-1 tracking-[0.06em]">
        <p class="inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-black/65">
          <Mail class="size-4" />
          Email
        </p>
        <p class="break-all">rociotorresgarcia6@gmail.com</p>
      </div>
      <div class="space-y-1 tracking-[0.06em]">
        <p class="inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-black/65">
          <Phone class="size-4" />
          Phone
        </p>
        <p>610 39 27 25</p>
      </div>
    </div>
  </section>
</template>
