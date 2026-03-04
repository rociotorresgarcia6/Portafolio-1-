<template>
  <section class="about-layout min-h-[calc(100vh-90px)] sm:min-h-[calc(100vh-73px)]">
    <div class="about-top"></div>
    <div class="about-bottom"></div>

    <img
      src="/images/about/nina-gafas.png"
      alt="Ilustracion de nina con gafas"
      class="about-portrait"
    />
  </section>
</template>

<style scoped>
.about-layout {
  --about-band-height: clamp(185px, 28vw, 230px);
  position: relative;
  display: grid;
  grid-template-rows: var(--about-band-height) 1fr;
  overflow: visible;
}

.about-top {
  background: #fb1200;
}

.about-bottom {
  background: #ffffff;
}

.about-portrait {
  position: absolute;
  right: clamp(0.7rem, 4vw, 4rem);
  top: var(--about-band-height);
  width: clamp(185px, 31vw, 340px);
  transform: translateY(-58%);
  z-index: 40;
  pointer-events: none;
}

@media (max-width: 640px) {
  .about-portrait {
    right: 0.5rem;
    width: clamp(165px, 44vw, 230px);
    transform: translateY(-61%);
  }
}
</style>
