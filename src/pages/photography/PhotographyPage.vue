<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'

type CameraId = 1 | 2 | 3 | 4

const activeCamera = ref<CameraId | null>(null)
const currentSlideIndex = ref(0)

const cameraProjects = {
  1: {
    title: "mediterranean fashion week '25",
    description:
      'Photographic series created during Mediterranean Fashion Week Valencia 2025, documenting runway moments, collection details, and the atmosphere surrounding the event. The images capture the rhythm and visual identity of a contemporary fashion show.',
    date: '21 de octubre de 2025.',
    slides: [
      '/images/mfw/mfw2.png',
      '/images/mfw/mfw3.png',
      '/images/mfw/mfw4.png',
      '/images/mfw/mfw5.png',
      '/images/mfw/mfw6.png',
      '/images/mfw/mfw7.png',
      '/images/mfw/mfw8.png',
    ],
  },
  2: {
    title: "clec fashion festival '25",
    description:
      'Photographic coverage produced during two days of CLEC Fashion Festival 2025, capturing runway shows, designers, and the creative atmosphere of the event.',
    date: '21 de octubre de 2025.',
    slides: [
      '/images/clec/clec2.png',
      '/images/clec/clec3.png',
      '/images/clec/clec4.png',
      '/images/clec/clec5.png',
      '/images/clec/clec6.png',
    ],
  },
  3: {
    title: "koopey pop up '25",
    description:
      'Event photography created for Koopey Pop-Up 25, documenting the launch of the brand’s summer collection and the vibrant atmosphere of the event.',
    date: '21 de octubre de 2025.',
    slides: [
      '/images/koopey pop up/IMG_0016.JPG',
      '/images/koopey pop up/IMG_0349.JPG',
      '/images/koopey pop up/IMG_9818.JPG',
      '/images/koopey pop up/IMG_9889.JPG',
      '/images/koopey pop up/IMG_9919.JPG',
      '/images/koopey pop up/IMG_9922.JPG',
    ],
  },
  4: {
    title: 'urban life and others',
    description:
      'A photographic series capturing urban scenes, landscapes, and everyday moments in cities such as Paris, Valencia, and Rome.',
    date: '21 de octubre de 2025.',
    slides: [
      '/images/otros/1f1bacd3-1e9c-4c87-ab3b-26edf662048d.jpg',
      '/images/otros/2eacb691-6e24-4d3d-96e3-0133ec08c9a2.jpg',
      '/images/otros/797d1aa1-da9c-4c0c-bd4a-0bf16343b398.jpg',
      '/images/otros/IMG_7661.JPG',
      '/images/otros/IMG_7695.JPG',
      '/images/otros/IMG_7776.JPG',
      '/images/otros/IMG_7847.JPG',
      '/images/otros/acfa47db-7fda-445b-83f9-e9589a2697d1.jpg',
      '/images/otros/lugar1.png',
      '/images/otros/lugar2.png',
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
        <img src="/images/cámara2.png" alt="camara 2" class="camera-image" />
      </button>
      <button
        type="button"
        class="camera-trigger"
        :class="{ 'is-open': activeCamera === 2 }"
        @click.stop="handleCameraClick(2)"
      >
        <img src="/images/camara4.png" alt="camara 4" class="camera-image" />
      </button>
      <button
        type="button"
        class="camera-trigger"
        :class="{ 'is-open': activeCamera === 3 }"
        @click.stop="handleCameraClick(3)"
      >
        <img src="/images/cámara1.png" alt="camara 1" class="camera-image" />
      </button>
      <button
        type="button"
        class="camera-trigger"
        :class="{ 'is-open': activeCamera === 4 }"
        @click.stop="handleCameraClick(4)"
      >
        <img src="/images/camara3.png" alt="camara 3" class="camera-image" />
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
          <div class="photo-detail-bar">
            <p class="photo-detail-copy">{{ activeProject.description }}</p>
          </div>
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
  width: 12vw;
  max-width: 180px;
  height: auto;
  object-fit: contain;
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
  background-color: transparent;
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
  max-width: min(78ch, 74%);
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
  font-size: 0.72rem;
  line-height: 1.3;
}

.photo-detail-bar {
  margin: 0.95rem var(--carousel-side-offset) 0;
  max-width: min(44ch, 48%);
  min-height: 122px;
  padding: 0.7rem 0.8rem;
  background: #fff;
  border: 1px solid #f8f5ef;
  border-radius: 18px;
}

.photo-detail-copy {
  margin: 0;
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

  .photo-detail-bar {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0.65rem;
    max-width: min(52ch, 100%);
    min-height: 96px;
    border-radius: 16px;
  }

  .photo-title {
    padding-left: 0;
    padding-right: 0;
    font-size: 1.05rem;
  }
}
</style>
