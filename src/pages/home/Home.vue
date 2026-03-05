<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type PhysicsObject = {
  id: string
  src: string
  alt: string
  size: number
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  spin: number
}

const coolSection = ref<HTMLElement | null>(null)
const objectsActive = ref(false)
const physicsObjects = ref<PhysicsObject[]>([])

const mouse = ref({ x: 0, y: 0, active: false })

const objectSources = [
  '/images/OBJ1.png',
  '/images/OBJ3.png',
  '/images/OBJ4.png',
  '/images/OBJ6.png',
  '/images/OBJ7.png',
  '/images/OBJ8.png',
  '/images/OBJ9.png',
  '/images/OBJ10.png',
  '/images/OBJ11.png',
  '/images/OBJ12.png',
  '/images/OBJ14.png',
  '/images/OBJ15.png',
  '/images/OBJ16.png',
  '/images/OBJ17.png',
  '/images/OBJ18.png',
  '/images/OBJ19.png',
  '/images/OBJ20.png',
  '/images/OBJ25.png',
  '/images/OBJ26.png',
  '/images/OBJ27.png',
  '/images/OBJ28.png',
  '/images/OBJ29.png',
  '/images/OBJ30.png',
  '/images/OBJ31.png',
]

let observer: IntersectionObserver | null = null
let rafId: number | null = null
let hasStarted = false

const onCoolMouseMove = (event: MouseEvent) => {
  if (!coolSection.value) return
  const bounds = coolSection.value.getBoundingClientRect()
  mouse.value.x = event.clientX - bounds.left
  mouse.value.y = event.clientY - bounds.top
  mouse.value.active = true
}

const onCoolMouseLeave = () => {
  mouse.value.active = false
}

const initPhysicsObjects = () => {
  if (!coolSection.value) return
  const width = coolSection.value.clientWidth

  physicsObjects.value = objectSources.map((src, index) => {
    const size = 156
    const column = (index + 1) / (objectSources.length + 1)
    const x = width * column
    const y = -320 - index * 110
    const vx = (Math.random() * 2 - 1) * 1.9
    const vy = 0.22 + Math.random() * 0.35
    const spin = (Math.random() * 2 - 1) * 1.1

    return {
      id: `${index}-${src}`,
      src,
      alt: `Objeto ${index + 1}`,
      size,
      x,
      y,
      vx,
      vy,
      rotation: Math.random() * 360,
      spin,
    }
  })
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))

const stepPhysics = () => {
  if (objectsActive.value && coolSection.value) {
    const width = coolSection.value.clientWidth
    const height = coolSection.value.clientHeight
    const gravity = 0.16
    const bounceX = 0.84
    const bounceY = 0.82
    const cursorRadius = 170

    for (const item of physicsObjects.value) {
      if (mouse.value.active) {
        const dx = item.x - mouse.value.x
        const dy = item.y - mouse.value.y
        const dist = Math.hypot(dx, dy)

        if (dist < cursorRadius) {
          const force = ((cursorRadius - dist) / cursorRadius) * 1.6
          const nx = dx / (dist || 1)
          const ny = dy / (dist || 1)
          item.vx += nx * force
          item.vy += ny * force - 0.08
        }
      }

      item.vy += gravity
      item.x += item.vx
      item.y += item.vy
      item.rotation += item.spin

      const r = item.size / 2

      if (item.x < r) {
        item.x = r
        item.vx = Math.abs(item.vx) * bounceX
      } else if (item.x > width - r) {
        item.x = width - r
        item.vx = -Math.abs(item.vx) * bounceX
      }

      if (item.y < r && item.vy < 0) {
        item.y = r
        item.vy = Math.abs(item.vy) * bounceY
      } else if (item.y > height - r) {
        item.y = height - r
        item.vy = -Math.abs(item.vy) * bounceY
      }

      item.vx *= 0.996
      item.vy *= 0.998

      item.vx = clamp(item.vx, -7.5, 7.5)
      item.vy = clamp(item.vy, -11, 11)
    }
  }

  rafId = requestAnimationFrame(stepPhysics)
}

const objectPhysicsStyle = (item: PhysicsObject) =>
  ({
    left: `${item.x}px`,
    top: `${item.y}px`,
    width: `${item.size}px`,
    height: `${item.size}px`,
    transform: `translate(-50%, -50%) rotate(${item.rotation.toFixed(2)}deg)`,
  }) as Record<string, string>

onMounted(() => {
  stepPhysics()
  if (!coolSection.value) return

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry?.isIntersecting && !hasStarted) {
        initPhysicsObjects()
        objectsActive.value = true
        hasStarted = true
      }
    },
    { threshold: 0.28 },
  )

  observer.observe(coolSection.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
  }
})
</script>

<template>
  <section class="home-page">
    <section class="hero-section">
      <div class="title-block">
        <h1 class="title-wrap">
          <span class="welcome-title">welcome to</span>
          <span class="brand-title">rochos</span>
        </h1>
      </div>

      <div class="ticker" aria-label="only for cool people marquee">
        <div class="ticker-track">
          <span class="ticker-text tk-eurostile-extended">only for cool people</span>
          <span class="ticker-text tk-eurostile-extended">only for cool people</span>
          <span class="ticker-text tk-eurostile-extended">only for cool people</span>
          <span class="ticker-text tk-eurostile-extended">only for cool people</span>
          <span class="ticker-text tk-eurostile-extended">only for cool people</span>
          <span class="ticker-text tk-eurostile-extended">only for cool people</span>
        </div>
      </div>
    </section>

    <section ref="coolSection" class="cool-block" aria-label="only for cool people section" @mousemove="onCoolMouseMove" @mouseleave="onCoolMouseLeave">
      <div v-if="objectsActive" class="obj-layer">
        <div v-for="item in physicsObjects" :key="item.id" class="obj-sprite" :style="objectPhysicsStyle(item)">
          <img :src="item.src" :alt="item.alt" class="obj-item" />
        </div>
      </div>

      <div class="cool-title-grid">
        <p class="cool-word cool-word--left">ONLY</p>
        <p class="cool-word cool-word--right">FOR</p>
        <p class="cool-word cool-word--left">COOL</p>
        <p class="cool-word cool-word--right">
          P<span class="script-e script-e--first">E</span>OPL<span class="script-e script-e--last">E</span>
        </p>
      </div>
    </section>
  </section>
</template>

<style scoped>
.home-page {
  width: 100%;
}

.hero-section {
  min-height: calc(100vh - 73px);
  background: #6ec6ff;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
}

.title-block {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
}

.title-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
}

.welcome-title {
  font-family: 'sloop-script-two', 'Sloop Script Bold Two', 'sloop-script-one', cursive;
  font-size: clamp(2.8rem, 5.4vw, 4.8rem);
  color: #ffffff;
  font-weight: 700;
  margin-bottom: -0.16em;
  transform: translateX(-0.52em);
}

.brand-title {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: clamp(5.8rem, 15.5vw, 12.4rem);
  color: #ffffff;
  line-height: 0.8;
  text-transform: lowercase;
  transform: translateY(-0.06em);
}

.ticker {
  height: clamp(3.3rem, 7.2vw, 4.4rem);
  background: #000000;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.ticker-track {
  display: flex;
  width: max-content;
  white-space: nowrap;
  will-change: transform;
  animation: ticker-scroll 36s linear infinite;
}

.ticker-text {
  font-family: 'eurostile-extended', sans-serif;
  font-size: clamp(1.95rem, 4.2vw, 2.85rem);
  color: #e6df43;
  font-style: italic;
  font-weight: 900;
  font-stretch: expanded;
  text-transform: lowercase;
  letter-spacing: 0.01em;
  padding-right: 2.6em;
  line-height: 1;
}

.cool-block {
  position: relative;
  min-height: calc(100vh - 73px);
  background: #eb553f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  scroll-snap-align: start;
  overflow: hidden;
}

.obj-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
}

.obj-sprite {
  position: absolute;
  display: grid;
  place-items: center;
}

.obj-item {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
}

.cool-title-grid {
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: clamp(3rem, 8vw, 9rem);
  row-gap: clamp(0.7rem, 1.6vw, 1.5rem);
  justify-content: center;
  align-items: baseline;
  position: relative;
  z-index: 2;
}

.cool-word {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: clamp(4rem, 10.2vw, 8.4rem);
  line-height: 0.82;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin: 0;
}

.cool-word--left,
.cool-word--right {
  justify-self: start;
}

.script-e {
  font-family: 'Brush Script MT', 'Segoe Script', cursive;
  font-style: italic;
  font-weight: 400;
  text-transform: none;
  display: inline-block;
  font-size: 1.04em;
  line-height: 0.75;
}

.script-e--first {
  margin: 0 0.14em 0 -0.1em;
}

.script-e--last {
  margin: 0 0.08em 0 -0.03em;
}

@keyframes ticker-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 680px) {
  .title-block {
    justify-content: flex-start;
    padding-top: 20vh;
  }

  .welcome-title {
    transform: translateX(-0.28em);
  }

  .ticker-text {
    font-size: clamp(1.6rem, 7vw, 2.2rem);
    padding-right: 1.2em;
  }

  .cool-title-grid {
    column-gap: clamp(2rem, 8.2vw, 4rem);
  }

  .cool-word {
    font-size: clamp(2.9rem, 14vw, 5.2rem);
    line-height: 0.84;
  }
}
</style>
