<template>
  <section class="about-layout">
    <div class="about-main">
      <div class="about-body-copy">
        <p>
          I'm Rochos, the least cool person in the world.<br />
          But what I am is creative, experimental, always eager<br />
          to learn. I love colors and extravagant shapes.
        </p>
        <p>
          Design, for me, is my identity, and that's why I created<br />
          "Only for Cool People": to build a community.<br />
          A group of people who feel connected to my art and my ideas.
        </p>
        <p>Oh, and by the way, I hate AGUA CON GAS.</p>
      </div>
      <div class="about-main-media">
        <img src="/images/dibujoaguacongas.PNG" alt="Dibujo agua con gas" class="about-bottle" />
      </div>
    </div>

    <div class="about-red-strip">
      <p class="about-red-copy">
        <span>Only for cool people it's an identity.</span>
        <span>It's a way of seeing life.</span>
        <span>It's art.</span>
      </p>
    </div>

    <div class="about-blue-panel">
      <h2 class="about-phylosophy">phylosophy</h2>
      <div class="about-phylosophy-images">
        <img src="/images/filosofia1.PNG" alt="Filosofia izquierda" class="about-phylosophy-image" />
        <img src="/images/filosofia2.PNG" alt="Filosofia derecha" class="about-phylosophy-image" />
      </div>
    </div>

    <div class="about-footer-strip">
      <div class="about-footer-brand">
        <img src="/images/solnegro.PNG" alt="Sol negro" class="about-footer-sol" />
        <span>rochos</span>
      </div>
    </div>

    <img src="/images/about/nina-gafas.png" alt="Dibujo nina" class="about-girl" />
  </section>
</template>

<style scoped>
.about-layout {
  --off-white: #f8f5ef;
  --footer-height: 146px;
  position: relative;
  background: var(--off-white);
  min-height: calc(100vh - 73px);
  overflow: hidden;
}

.about-main {
  position: relative;
  min-height: 62vh;
  background: var(--off-white);
  padding: 4.2rem 1.6rem 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(190px, 28vw, 300px);
  gap: clamp(0.8rem, 2.5vw, 2rem);
  align-items: start;
}

.about-body-copy {
  max-width: min(62ch, 98%);
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
  color: #000;
  font-size: clamp(1.02rem, 1.45vw, 1.55rem);
  line-height: 1.23;
}

.about-body-copy p {
  margin: 0;
}

.about-body-copy p + p {
  margin-top: 1.95rem;
}

.about-main-media {
  position: relative;
  width: 100%;
  min-height: clamp(280px, 43vh, 420px);
}

.about-bottle {
  position: absolute;
  left: 50%;
  bottom: -54%;
  transform: translateX(-50%);
  height: clamp(430px, 72vh, 680px);
  width: auto;
  max-width: none;
  z-index: 5;
}

.about-red-strip {
  background: #ff4938;
  min-height: 250px;
  padding: 1.45rem 1.6rem 1.15rem;
}

.about-red-copy {
  margin: 1.7rem 0 0;
  max-width: 530px;
  font-family: 'Arial Black', Arial, sans-serif;
  font-style: normal;
  font-weight: 900;
  color: #fff;
  font-size: clamp(1.32rem, 2.1vw, 2.02rem);
  line-height: 1.12;
}

.about-red-copy span {
  display: block;
}

.about-red-copy span + span {
  margin-top: 0.36rem;
}

.about-blue-panel {
  background: #4db3df;
  min-height: 390px;
  padding: 2.15rem 1.6rem 7.6rem;
}

.about-phylosophy {
  margin: 0;
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: clamp(1.65rem, 2.4vw, 2.35rem);
  font-style: normal;
  font-weight: 900;
  color: #000;
}

.about-phylosophy-images {
  margin-top: 1.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(0.8rem, 3.5vw, 3.3rem);
  align-items: start;
}

.about-phylosophy-image {
  width: 100%;
  max-width: 460px;
  height: auto;
  object-fit: contain;
}

.about-phylosophy-image:first-child {
  justify-self: start;
}

.about-phylosophy-image:last-child {
  justify-self: end;
}

.about-footer-strip {
  min-height: var(--footer-height);
  background: var(--off-white);
  padding: 1.05rem 1.6rem;
  display: flex;
  align-items: flex-end;
}

.about-footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: clamp(1.75rem, 2.15vw, 2.3rem);
  font-style: normal;
  font-weight: 900;
  color: #000;
}

.about-footer-sol {
  width: clamp(34px, 4vw, 50px);
  height: auto;
}

.about-girl {
  position: absolute;
  left: 50%;
  bottom: calc(var(--footer-height) - clamp(70px, 11vw, 118px));
  transform: translateX(-50%);
  width: clamp(180px, 26vw, 300px);
  height: auto;
  z-index: 6;
  pointer-events: none;
}

@media (max-width: 900px) {
  .about-main {
    min-height: 58vh;
    padding: 3.4rem 1rem 0;
    grid-template-columns: minmax(0, 1fr) clamp(150px, 27vw, 210px);
  }

  .about-body-copy {
    max-width: 100%;
    font-size: clamp(0.94rem, 2.55vw, 1.16rem);
  }

  .about-red-strip,
  .about-blue-panel,
  .about-footer-strip {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .about-red-strip {
    min-height: 210px;
  }

  .about-blue-panel {
    min-height: 320px;
    padding-bottom: 6.3rem;
  }

  .about-phylosophy-images {
    gap: 1rem;
  }

  .about-girl {
    width: clamp(160px, 31vw, 235px);
    bottom: calc(var(--footer-height) - clamp(60px, 9.5vw, 98px));
  }
}

@media (max-width: 680px) {
  .about-layout {
    --footer-height: 118px;
  }

  .about-main {
    min-height: 56vh;
    padding-top: 3.2rem;
    grid-template-columns: 1fr;
  }

  .about-body-copy {
    max-width: 100%;
    font-size: 0.95rem;
  }

  .about-main-media {
    min-height: 170px;
    margin-top: 0.35rem;
  }

  .about-bottle {
    height: clamp(230px, 38vh, 320px);
    width: auto;
    bottom: -14%;
  }

  .about-red-strip {
    min-height: 170px;
    padding-top: 1.1rem;
  }

  .about-red-copy {
    font-size: clamp(1rem, 5.1vw, 1.38rem);
    max-width: 92%;
  }

  .about-blue-panel {
    min-height: 250px;
    padding-top: 1.35rem;
    padding-bottom: 4.9rem;
  }

  .about-phylosophy {
    font-size: 1.5rem;
  }

  .about-phylosophy-images {
    margin-top: 1rem;
    gap: 0.55rem;
  }

  .about-footer-brand {
    font-size: 1.35rem;
    gap: 0.3rem;
  }

  .about-footer-sol {
    width: 29px;
  }

  .about-girl {
    width: 155px;
    bottom: calc(var(--footer-height) - 54px);
  }
}
</style>
