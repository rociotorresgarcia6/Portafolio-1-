<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'

type CameraId = 1 | 2 | 3 | 4

const activeCamera = ref<CameraId | null>(null)
const currentSlideIndex = ref(0)

const cameraProjects = {
  1: {
    title: "mediterranean fashion week '25",
    description:
      'He realizaado estas foto en no se donde y fue una experiencia no se que mas fue suepr guaychipiruli esyoy nerviosa jejej quiero acabar ya estoy hasta',
    date: '21 de octubre de 2025.',
    slides: ['/images/llamada3.png', '/images/llamada.png', '/images/niñagafas.PNG'],
  },
  2: {
    title: "mediterranean fashion week '25",
    description:
      'He realizaado estas foto en no se donde y fue una experiencia no se que mas fue suepr guaychipiruli esyoy nerviosa jejej quiero acabar ya estoy hasta',
    date: '21 de octubre de 2025.',
    slides: ['/images/llamada3.png', '/images/llamada.png', '/images/niñagafas.PNG'],
  },
  3: {
    title: "mediterranean fashion week '25",
    description:
      'He realizaado estas foto en no se donde y fue una experiencia no se que mas fue suepr guaychipiruli esyoy nerviosa jejej quiero acabar ya estoy hasta',
    date: '21 de octubre de 2025.',
    slides: ['/images/llamada3.png', '/images/llamada.png', '/images/niñagafas.PNG'],
  },
  4: {
    title: "mediterranean fashion week '25",
    description:
      'He realizaado estas foto en no se donde y fue una experiencia no se que mas fue suepr guaychipiruli esyoy nerviosa jejej quiero acabar ya estoy hasta',
    date: '21 de octubre de 2025.',
    slides: ['/images/llamada3.png', '/images/llamada.png', '/images/niñagafas.PNG'],
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
        <div class="photo-carousel">
          <button type="button" class="carousel-arrow" @click.stop="prevSlide" aria-label="Foto anterior">
            <span aria-hidden="true">&#8249;</span>
          </button>
          <img :src="currentSlide" alt="fotografia" class="carousel-image" />
          <button type="button" class="carousel-arrow" @click.stop="nextSlide" aria-label="Foto siguiente">
            <span aria-hidden="true">&#8250;</span>
          </button>
        </div>

        <div class="photo-copy">
          <h2 class="photo-title">{{ activeProject.title }}</h2>
          <p class="photo-description">{{ activeProject.description }}</p>
          <p class="photo-date">{{ activeProject.date }}</p>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.photography-empty {
  position: relative;
  min-height: 100vh;
  background-color: #f8f5ef;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 3rem;
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
  width: min(78vw, 900px);
  min-height: 470px;
  border-radius: 14px;
  background-color: #fff;
}

.photo-panel-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.25rem;
  padding: 2rem 2.25rem;
  height: 100%;
  box-sizing: border-box;
}

.photo-carousel {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.8rem;
}

.carousel-image {
  width: 100%;
  max-width: 340px;
  height: 400px;
  object-fit: cover;
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

.photo-copy {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.photo-title {
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.15;
}

.photo-description {
  margin: 1.15rem 0 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 0.72rem;
  line-height: 1.3;
}

.photo-date {
  margin: auto 0 0;
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
  font-size: 1rem;
}

@media (max-width: 920px) {
  .photo-panel {
    width: min(92vw, 900px);
    min-height: 560px;
  }

  .photo-panel-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .carousel-image {
    max-width: 100%;
    height: 320px;
  }

  .photo-title {
    font-size: 1.05rem;
  }

  .photo-date {
    margin-top: 1.4rem;
    font-size: 0.9rem;
  }
}
</style>
