<script setup lang="ts">
import { ref } from 'vue'
import { TriangleAlert } from 'lucide-vue-next'

const posters = [
  '/images/posters/POSTER 1 copia.png',
  '/images/posters/ONLYFORCOOLPEOPLE2 copia.png',
  '/images/postervintage copia.png',
  '/images/posters/poster3 copia.png',
  '/images/posters/peces copia.png',
  '/images/posters/salyvinagre copia.png',
  '/images/posters/stars copia.png',
  '/images/posters/posterniña copia.png',
] as const

const isNoticeOpen = ref(false)

const openPosterNotice = () => {
  isNoticeOpen.value = true
}

const closePosterNotice = () => {
  isNoticeOpen.value = false
}
</script>

<template>
  <section class="posters-page">
    <div class="archive-wrap">
      <h1 class="archive-title">posters archive</h1>

      <div class="posters-masonry">
        <figure v-for="(poster, index) in posters" :key="`${poster}-${index}`" class="poster-item">
          <button type="button" class="poster-button" @click="openPosterNotice">
            <img :src="poster" :alt="`Poster ${index + 1}`" loading="lazy" />
            <span class="poster-overlay">
              <TriangleAlert class="poster-warning" aria-hidden="true" />
            </span>
          </button>
        </figure>
      </div>
    </div>

    <div v-if="isNoticeOpen" class="poster-modal" @click="closePosterNotice">
      <div class="poster-modal-card" @click.stop>
        <h2>Posters in progress</h2>
        <p>Come back later.</p>
        <button type="button" class="poster-modal-close" @click="closePosterNotice">Close</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.posters-page {
  min-height: calc(100vh - 73px);
  width: 100%;
  background-color: #f3f1eb;
  padding: 2rem 1.2rem 1.8rem;
  box-sizing: border-box;
}

.archive-wrap {
  width: 100%;
  margin: 0 auto;
}

.archive-title {
  margin: 0 0 1.1rem;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.22rem;
  font-style: oblique;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  color: #111;
}

.posters-masonry {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.75rem;
  align-items: start;
}

.poster-item {
  margin: 0;
  display: block;
  background-color: #f7f6f1;
}

.poster-button {
  width: 100%;
  display: block;
  padding: 0;
  border: 0;
  background: transparent;
  position: relative;
  cursor: pointer;
}

.poster-button img {
  width: 100%;
  display: block;
  filter: blur(4px);
  transition: filter 0.2s ease;
}

.poster-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #111;
  background: rgba(247, 246, 241, 0.72);
}

.poster-warning {
  color: #111;
  width: 28px;
  height: 28px;
}

.poster-button:focus-visible {
  outline: 2px solid #111;
  outline-offset: 3px;
}

.poster-modal {
  position: fixed;
  inset: 0;
  background: rgba(17, 17, 17, 0.4);
  display: grid;
  place-items: center;
  z-index: 50;
  padding: 1.5rem;
}

.poster-modal-card {
  background: #fff;
  max-width: 520px;
  width: 100%;
  padding: 2.4rem 2rem;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
  color: #111;
  border-radius: 22px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
}

.poster-modal-card h2 {
  margin: 0 0 0.6rem;
  font-size: 1.8rem;
}

.poster-modal-card p {
  margin: 0 0 1.6rem;
  font-size: 1rem;
  line-height: 1.4;
}

.poster-modal-close {
  border: 2px solid #111;
  background: transparent;
  padding: 0.55rem 1.2rem;
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  border-radius: 999px;
}

@media (max-width: 900px) {
  .posters-page {
    padding-top: 1.5rem;
  }

  .posters-masonry {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .posters-masonry {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
