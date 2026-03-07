<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'

type CameraId = 1 | 2 | 3 | 4

const activeCamera = ref<CameraId | null>(null)
const currentSlideIndex = ref(0)

const cameraProjects = {
  1: {
    title: 'sobrevive a la vida!',
    description:
      'He realizaado estas foto en no se donde y fue una experiencia no se que mas fue suepr guaychipiruli esyoy nerviosa jejej quiero acabar ya estoy hasta',
    date: '21 de octubre de 2025.',
    slides: [
      '/images/sobrevive a la vida/IMG_7745.JPG',
      '/images/sobrevive a la vida/IMG_7634.JPG',
      '/images/sobrevive a la vida/IMG_7646.JPG',
      '/images/sobrevive a la vida/23.png',
      '/images/sobrevive a la vida/24.png',
      '/images/sobrevive a la vida/IMG_7661.JPG',
      '/images/sobrevive a la vida/25.png',
    ],
  },
  2: {
    title: 'lo que nos jode nos une',
    description:
      'He realizaado estas foto en no se donde y fue una experiencia no se que mas fue suepr guaychipiruli esyoy nerviosa jejej quiero acabar ya estoy hasta',
    date: '21 de octubre de 2025.',
    slides: [
      '/images/lo que nos jode nos une/Mockup_Poster_mockupgratis copia.png',
      '/images/lo que nos jode nos une/Elegant Phone Mockup Design Catalog Instagram Post copia.png',
      '/images/lo que nos jode nos une/mockup mupi 4 copia.png',
      '/images/lo que nos jode nos une/Mockup Folleto portada y parte de atrás copia.png',
      '/images/lo que nos jode nos une/Post de Instagram Compartir Publicación Redes Sociales Moderno Minimalista Azul Verde (1) copia.png',
      '/images/lo que nos jode nos une/mockup cartel 2 copia.png',
      '/images/lo que nos jode nos une/mockup mupi 3 copia.png',
      '/images/lo que nos jode nos une/mockup cartel copia.png',
    ],
  },
  3: {
    title: 'crefad 2026',
    description:
      'He realizaado estas foto en no se donde y fue una experiencia no se que mas fue suepr guaychipiruli esyoy nerviosa jejej quiero acabar ya estoy hasta',
    date: '21 de octubre de 2025.',
    slides: [
      '/images/crefad/WhatsApp Image 2025-11-24 at 19.10.51.jpeg',
      '/images/crefad/gif-mockup-1 (arrastrado).tiff',
      '/images/crefad/WhatsApp Image 2025-11-24 at 19.09.37.jpeg',
      '/images/crefad/gif-mockup-3 (arrastrado).tiff',
      '/images/crefad/WhatsApp Image 2025-11-24 at 19.10.22.jpeg',
    ],
  },
  4: {
    title: 'aureo chocolates',
    description:
      'He realizaado estas foto en no se donde y fue una experiencia no se que mas fue suepr guaychipiruli esyoy nerviosa jejej quiero acabar ya estoy hasta',
    date: '21 de octubre de 2025.',
    slides: [
      '/images/chocolate/29.png',
      '/images/chocolate/16.png',
      '/images/chocolate/13.png',
      '/images/chocolate/23.png',
      '/images/chocolate/27.png',
      '/images/chocolate/32.png',
      '/images/chocolate/19.png',
    ],
  },
} as const

let autoplayTimer: number | null = null

const handleCameraClick = (cameraId: CameraId) => {
  activeCamera.value = activeCamera.value === cameraId ? null : cameraId
}

const closeCameraPanel = () => {
  activeCamera.value = null
}

const activeProject = computed(() => {
  if (activeCamera.value === null) {
    return null
  }

  return cameraProjects[activeCamera.value]
})

const currentSlide = computed(() => {
  if (!activeProject.value) {
    return ''
  }

  return activeProject.value.slides[currentSlideIndex.value]
})

const nextSlide = () => {
  if (!activeProject.value) {
    return
  }

  currentSlideIndex.value = (currentSlideIndex.value + 1) % activeProject.value.slides.length
}

const prevSlide = () => {
  if (!activeProject.value) {
    return
  }

  currentSlideIndex.value =
    (currentSlideIndex.value - 1 + activeProject.value.slides.length) % activeProject.value.slides.length
}

const stopAutoplay = () => {
  if (autoplayTimer !== null) {
    window.clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = window.setInterval(() => {
    if (activeCamera.value !== null) {
      nextSlide()
    }
  }, 3200)
}

watch(activeCamera, (cameraId) => {
  if (cameraId !== null) {
    currentSlideIndex.value = 0
    startAutoplay()
    return
  }

  stopAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<template>
  <section class="photography-empty" @click="closeCameraPanel">
    <p class="photography-hint">click and discover!!</p>
    <div class="camera-row" @click.stop>
      <button
        type="button"
        class="camera-trigger"
        :class="{ 'is-open': activeCamera === 1 }"
        @click.stop="handleCameraClick(1)"
      >
        <img
          src="/images/sobrevive a la vida/sobrevivealavidaboton.png"
          alt="sobrevive a la vida boton"
          class="camera-image camera-image-large"
        />
      </button>
      <button
        type="button"
        class="camera-trigger"
        :class="{ 'is-open': activeCamera === 2 }"
        @click.stop="handleCameraClick(2)"
      >
        <img
          src="/images/lo que nos jode nos une/loquenosjodenosuneboton2.png"
          alt="lo que nos jode nos une boton"
          class="camera-image camera-image-small"
        />
      </button>
      <button
        type="button"
        class="camera-trigger"
        :class="{ 'is-open': activeCamera === 3 }"
        @click.stop="handleCameraClick(3)"
      >
        <img src="/images/crefad/crefadboton.png" alt="crefad boton" class="camera-image camera-image-large" />
      </button>
      <button
        type="button"
        class="camera-trigger"
        :class="{ 'is-open': activeCamera === 4 }"
        @click.stop="handleCameraClick(4)"
      >
        <img src="/images/chocolate/chocolatesboton.png" alt="chocolate boton" class="camera-image camera-image-large" />
      </button>
    </div>

    <section v-if="activeProject" class="photo-panel" @click.stop>
      <div class="photo-panel-content">
        <div class="photo-carousel-wrap">
          <h2 class="photo-title">{{ activeProject.title }}</h2>
          <div class="photo-carousel">
            <button type="button" class="carousel-arrow" @click.stop="prevSlide" aria-label="Foto anterior">
              <span aria-hidden="true">&#8249;</span>
            </button>
            <img :src="currentSlide" alt="fotografia" class="carousel-image" />
            <button type="button" class="carousel-arrow" @click.stop="nextSlide" aria-label="Foto siguiente">
              <span aria-hidden="true">&#8250;</span>
            </button>
          </div>
          <p class="photo-description">{{ activeProject.description }}</p>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.photography-empty {
  position: relative;
  min-height: 145vh;
  background-color: #f8f5ef;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 8rem;
}

.photography-hint {
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
}

.camera-row {
  position: absolute;
  left: 50%;
  top: 19%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  padding: 0;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
}

.camera-image {
  width: 16vw;
  max-width: 240px;
  height: auto;
  object-fit: contain;
}

.camera-image-large {
  width: 19vw;
  max-width: 300px;
}

.camera-image-small {
  width: 12vw;
  max-width: 180px;
}

.camera-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: transform 180ms ease;
}

.camera-trigger:hover,
.camera-trigger.is-open {
  transform: scale(1.08);
}

.camera-trigger:focus-visible {
  outline: 2px solid #111;
  outline-offset: 4px;
}

.photo-panel {
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translateX(-50%);
  width: min(90vw, 1120px);
  min-height: 700px;
  border-radius: 14px;
  background-color: #f8f5ef;
}

.photo-panel-content {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 1.5rem 1.8rem;
  height: 100%;
  box-sizing: border-box;
}

.photo-carousel-wrap {
  --carousel-side-offset: calc(42px + 0.55rem);
  background-color: #fff;
  border-radius: 12px;
  padding: 1rem 1.2rem 1.4rem;
  min-height: 640px;
}

.photo-carousel {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.55rem;
}

.carousel-image {
  width: 100%;
  height: clamp(340px, 45vw, 560px);
  object-fit: contain;
  background-color: #f5f1ea;
  border-radius: 10px;
  justify-self: center;
}

.carousel-arrow {
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 999px;
  background-color: #f8f5ef;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-bottom: 0;
}

.carousel-arrow span {
  font-size: 1.35rem;
  line-height: 1;
}

.photo-title {
  margin: 0 0 0.8rem;
  padding-left: var(--carousel-side-offset);
  padding-right: var(--carousel-side-offset);
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.15;
}

.photo-description {
  margin: 0.9rem 0 0;
  padding-left: var(--carousel-side-offset);
  max-width: min(52ch, 56%);
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
  font-size: 0.72rem;
  line-height: 1.3;
}

@media (max-width: 920px) {
  .photography-empty {
    min-height: 130vh;
    padding-bottom: 5rem;
  }

  .photo-panel {
    top: 28%;
    width: min(94vw, 900px);
    min-height: 560px;
  }

  .photo-panel-content {
    padding: 1.1rem 1rem 1.25rem;
    gap: 0;
  }

  .photo-carousel-wrap {
    --carousel-side-offset: 0px;
    min-height: 0;
    padding: 0.9rem 0.9rem 1rem;
  }

  .carousel-image {
    height: clamp(210px, 48vw, 310px);
  }

  .photo-description {
    max-width: min(60ch, 100%);
    padding: 0;
    margin-top: 0.6rem;
  }

  .photo-title {
    padding-left: 0;
    padding-right: 0;
    font-size: 1.05rem;
  }
}
</style>
