<template>
  <section class="about-layout min-h-[calc(100vh-90px)] sm:min-h-[calc(100vh-73px)]">
    <div class="about-top">
      <p class="about-top-copy">
        <span>Only for cool people it's an identity.</span>
        <span>It's a way of seeing life.</span>
        <span>It's art.</span>
      </p>
    </div>
    <div class="about-bottom">
      <div class="about-body-copy">
        <p>
          I'm Rochos, the least cool person in the world. But what I am is creative, experimental,
          always eager to learn. I love colors and extravagant shapes.
        </p>
        <p>
          Design, for me, is my identity, and that's why I created "Only for Cool People": to build a
          community. A group of people who feel connected to my art and my ideas.
        </p>
      </div>
      <p class="about-signoff">Oh, and by the way, I hate AGUA CON GAS.</p>
    </div>

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
  --about-copy-reserve: clamp(190px, 31vw, 340px);
  --about-text-offset: clamp(0.7rem, 2.6vw, 2rem);
  position: relative;
  display: grid;
  grid-template-rows: var(--about-band-height) 1fr;
  overflow-x: clip;
  overflow-y: visible;
}

.about-top {
  background: #eb553f;
  display: flex;
  align-items: center;
  padding: 1.2rem var(--about-copy-reserve) 1.2rem 1rem;
}

.about-top-copy {
  font-family: 'Arial Black', Arial, sans-serif;
  font-style: normal;
  font-weight: 900;
  color: #ffffff;
  font-size: clamp(1.1rem, 1.9vw, 1.55rem);
  line-height: 1.15;
  max-width: 760px;
  margin-left: var(--about-text-offset);
  text-align: left;
}

.about-top-copy span {
  display: block;
}

.about-top-copy span:nth-child(-n + 2) {
  transform: translateY(-0.22rem);
}

.about-top-copy span:nth-child(3) {
  transform: translateY(0.35rem);
}

.about-top-copy span + span {
  margin-top: 0.4rem;
}

.about-bottom {
  background: #f8f8f8;
  padding: clamp(1.3rem, 3vw, 2.4rem) var(--about-copy-reserve) 2.5rem 1rem;
}

.about-body-copy {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: italic;
  color: #000000;
  font-size: clamp(0.95rem, 1.35vw, 1.35rem);
  line-height: 1.35;
  max-width: 760px;
  margin-left: var(--about-text-offset);
}

.about-body-copy p + p {
  margin-top: clamp(1rem, 2vw, 1.5rem);
}

.about-signoff {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: italic;
  color: #000000;
  font-size: clamp(0.95rem, 1.35vw, 1.35rem);
  line-height: 1.35;
  max-width: 760px;
  margin-left: var(--about-text-offset);
  margin-top: clamp(0.9rem, 2vw, 1.4rem);
}

.about-portrait {
  position: absolute;
  right: clamp(0.7rem, 4vw, 4rem);
  top: var(--about-band-height);
  width: clamp(170px, 30vw, 340px);
  transform: translateY(-58%);
  z-index: 40;
  pointer-events: none;
}

@media (max-width: 1024px) {
  .about-layout {
    --about-copy-reserve: clamp(165px, 30vw, 260px);
  }
}

@media (max-width: 900px) {
  .about-layout {
    --about-copy-reserve: clamp(130px, 30vw, 220px);
  }

  .about-bottom {
    padding-top: clamp(4.6rem, 10vw, 6.4rem);
  }

  .about-portrait {
    right: 0.7rem;
    width: clamp(150px, 34vw, 220px);
    transform: translateY(-63%);
  }
}

@media (max-width: 700px) {
  .about-layout {
    --about-copy-reserve: 0px;
    --about-band-height: 170px;
    --about-text-offset: 0px;
  }

  .about-top {
    padding: 1rem 1rem;
  }

  .about-top-copy {
    max-width: 100%;
    font-size: clamp(0.98rem, 4.5vw, 1.2rem);
    margin-left: 0;
  }

  .about-top-copy span:nth-child(-n + 2),
  .about-top-copy span:nth-child(3) {
    transform: none;
  }

  .about-top-copy span + span {
    margin-top: 0.3rem;
  }

  .about-bottom {
    padding: 7.3rem 1rem 2rem;
  }

  .about-body-copy {
    max-width: 100%;
    font-size: 0.92rem;
    margin-left: 0;
  }

  .about-signoff {
    max-width: 100%;
    font-size: 0.92rem;
    margin-left: 0;
  }

  .about-portrait {
    top: calc(var(--about-band-height) + 2px);
    right: 0.6rem;
    width: clamp(135px, 42vw, 185px);
    transform: translateY(-58%);
  }
}
</style>
