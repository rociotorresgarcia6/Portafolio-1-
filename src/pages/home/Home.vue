<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const manifestoVisible = ref(false)
const manifestoSection = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      manifestoVisible.value = Boolean(entry?.isIntersecting)
    },
    { threshold: 0.35 },
  )

  if (manifestoSection.value) {
    observer.observe(manifestoSection.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <section class="home-page">
    <div class="hero-block">
      <h1 class="flex flex-col items-start leading-none">
        <span class="welcome-title">welcome to</span>
        <span class="brand-title">rochos</span>
      </h1>
    </div>

    <div class="cool-block">
      <div class="cool-grid">
        <p class="cool-text">ONLY<br />COOL</p>
        <p class="cool-text">
          FOR<br />
          <span class="people-word"
            >P<span class="script-e script-e--first">E</span>OPL<span class="script-e script-e--last">E</span></span
          >
        </p>
      </div>
    </div>

    <div ref="manifestoSection" class="manifesto-block">
      <div class="manifesto-grid">
        <p class="manifesto-word manifesto-word--left" :class="{ 'is-visible': manifestoVisible }" style="--delay: 0.05s">liberty</p>
        <p class="manifesto-word manifesto-word--right" :class="{ 'is-visible': manifestoVisible }" style="--delay: 0.2s">spontaneity</p>
        <p class="manifesto-word manifesto-word--left" :class="{ 'is-visible': manifestoVisible }" style="--delay: 0.35s">random</p>
        <p class="manifesto-word manifesto-word--right" :class="{ 'is-visible': manifestoVisible }" style="--delay: 0.5s">exclusive</p>
        <p class="manifesto-word manifesto-word--left" :class="{ 'is-visible': manifestoVisible }" style="--delay: 0.65s">experimentation</p>
        <p class="manifesto-word manifesto-word--right" :class="{ 'is-visible': manifestoVisible }" style="--delay: 0.8s">irony</p>
      </div>
    </div>

    <div class="final-red-block">
      <div class="final-copy">
        <p class="final-copy-left">fuck you,</p>
        <img src="/images/home/abueladedo.png" alt="Ilustracion central" class="final-illustration" />
        <p class="final-copy-right">geek.</p>
      </div>
      <img src="/images/home/parental-advisory.png" alt="Parental advisory label" class="parental-advisory" />
    </div>
  </section>
</template>

<style scoped>
.home-page {
  width: 100%;
}

.hero-block {
  display: flex;
  min-height: calc(100vh - 73px);
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.welcome-title {
  font-family: 'Instrument Serif', 'Times New Roman', serif;
  font-style: italic;
  font-size: clamp(2rem, 4vw, 3.2rem);
  color: #000000;
  transform: translateX(-1.45em);
}

.brand-title {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: clamp(3.3rem, 10vw, 8rem);
  color: #fb1200;
  line-height: 0.9;
  text-transform: lowercase;
}

.cool-block {
  min-height: calc(100vh - 73px);
  background: #fb1200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
}

.cool-grid {
  width: min(100%, 1120px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(0.5rem, 5vw, 3.2rem);
}

.cool-text {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: clamp(3.1rem, 9vw, 7.4rem);
  color: #ffffff;
  line-height: 0.8;
  text-transform: uppercase;
}

.people-word {
  display: inline-block;
}

.script-e {
  font-family: 'Brush Script MT', 'Segoe Script', cursive;
  font-style: italic;
  font-weight: 400;
  text-transform: none;
  display: inline-block;
  font-size: 1.06em;
  line-height: 0.75;
}

.script-e--first {
  margin-left: -0.18em;
  margin-right: 0.09em;
}

.script-e--last {
  margin-left: -0.02em;
}

.manifesto-block {
  min-height: calc(100vh - 73px);
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 5vw, 4rem) 1rem;
}

.manifesto-grid {
  width: min(100%, 1120px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: clamp(2rem, 8vh, 5rem);
  column-gap: clamp(1.5rem, 7vw, 5rem);
}

.manifesto-word {
  font-family: 'Instrument Serif', 'Times New Roman', serif;
  font-style: italic;
  font-size: clamp(2rem, 4vw, 3.8rem);
  line-height: 1;
  color: #000000;
  opacity: 0;
  transition:
    opacity 0.45s ease,
    transform 0.55s ease;
  transition-delay: var(--delay);
}

.manifesto-word--left {
  justify-self: start;
  transform: translateX(-34px);
}

.manifesto-word--right {
  justify-self: end;
  transform: translateX(34px);
}

.manifesto-word.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.final-red-block {
  position: relative;
  min-height: calc(100vh - 73px);
  background: #fb1200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem 0.6rem;
}

.final-copy {
  width: min(100%, 1120px);
  min-height: clamp(390px, 74vh, 760px);
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;
  column-gap: 0;
  transform: translate(clamp(-26px, -2.2vw, -10px), clamp(28px, 6.5vh, 72px));
}

.final-copy-left,
.final-copy-right {
  font-family: 'Arial Black', Arial, sans-serif;
  color: #ffffff;
  font-size: clamp(2.4rem, 4.4vw, 5rem);
  line-height: 0.95;
  white-space: nowrap;
}

.final-copy-left {
  align-self: center;
  margin-top: 0;
  margin-right: clamp(-2.2rem, -4.2vw, -1.2rem);
  transform: translate(1.2rem, clamp(-110px, -12vh, -70px));
}

.final-copy-right {
  align-self: center;
  margin-top: 0;
  margin-left: clamp(-2.2rem, -4.2vw, -1.2rem);
  transform: translate(-1.2rem, clamp(-110px, -12vh, -70px));
}

.final-illustration {
  width: clamp(460px, 64vw, 920px);
  height: auto;
  align-self: end;
}

.parental-advisory {
  position: absolute;
  right: clamp(1.5rem, 3.2vw, 2.4rem);
  bottom: clamp(3rem, 7.5vh, 5.2rem);
  width: clamp(74px, 8.7vw, 116px);
  height: auto;
}

@media (max-width: 900px) {
  .cool-grid {
    gap: 1.2rem;
  }
}

@media (max-width: 640px) {
  .hero-block {
    min-height: calc(100vh - 90px);
  }

  .cool-block {
    min-height: calc(100vh - 90px);
  }

  .cool-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .cool-text {
    font-size: clamp(2.6rem, 14vw, 4.3rem);
  }

  .manifesto-block {
    min-height: calc(100vh - 90px);
    padding: 2rem 1rem;
  }

  .manifesto-grid {
    row-gap: 1.45rem;
    column-gap: 1rem;
  }

  .manifesto-word {
    font-size: clamp(1.65rem, 8vw, 2.3rem);
  }

  .final-red-block {
    min-height: calc(100vh - 90px);
    padding: 1rem 0.7rem 0.4rem;
  }

  .final-copy {
    min-height: calc(100vh - 120px);
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    row-gap: 0.2rem;
    justify-items: center;
    transform: translate(0, 14px);
  }

  .final-copy-left,
  .final-copy-right {
    font-size: clamp(1.9rem, 11vw, 3rem);
    margin-top: 0;
    align-self: center;
  }

  .final-illustration {
    width: clamp(240px, 76vw, 420px);
    align-self: center;
  }

  .parental-advisory {
    right: 1rem;
    bottom: 2rem;
    width: clamp(64px, 16vw, 86px);
  }
}
</style>
