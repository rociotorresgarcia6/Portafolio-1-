<script setup lang="ts">
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
</script>

<template>
  <section class="posters-page">
    <div class="archive-wrap">
      <h1 class="archive-title">posters archive</h1>

      <div class="posters-masonry">
        <figure
          v-for="(poster, index) in posters"
          :key="`${poster}-${index}`"
          class="poster-item"
          :class="{ 'is-fish': poster.includes('peces') }"
        >
          <img :src="poster" :alt="`Poster ${index + 1}`" loading="lazy" />
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.posters-page {
  min-height: calc(100vh - 73px);
  width: 100%;
  background-color: #f3f1eb;
  padding: 2rem 1.2rem 3.5rem;
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

.poster-item img {
  width: 100%;
  display: block;
}

.poster-item.is-fish {
  grid-column: span 1;
}

@media (max-width: 900px) {
  .posters-page {
    padding-top: 1.5rem;
  }

  .posters-masonry {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .poster-item.is-fish {
    grid-column: span 1;
  }
}

@media (max-width: 560px) {
  .posters-masonry {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .poster-item.is-fish {
    grid-column: span 1;
  }
}
</style>
