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
}
</style>
