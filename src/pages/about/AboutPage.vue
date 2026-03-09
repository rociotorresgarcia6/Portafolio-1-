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

    <div class="about-professional">
      <h2 class="about-professional-title">professional info</h2>
      <div class="about-professional-grid">
        <article class="about-professional-card">
          <h3>studies</h3>
          <p>Design and Creative Technologies student at UPV.</p>
          <p>Additional training in photography and art direction to expand my creative skills.</p>
        </article>

        <article class="about-professional-card">
          <h3>skills</h3>
          <p>Proficient in: Photoshop, Illustrator, InDesign, and Procreate.</p>
          <p>Learning: Blender, After Effects, Visual Studio Code, and Premiere.</p>
        </article>

        <article class="about-professional-card">
          <h3>extra</h3>
          <p>Languages: Spanish (native), English (B2), Valencian (C1), learning Italian.</p>
          <p>Open to freelance collaborations, internships and creative projects.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-layout {
  --off-white: #f8f5ef;
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
  background: var(--off-white);
  min-height: 90vh;
  padding: 2.15rem 1.6rem 3rem;
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
  gap: clamp(1rem, 4vw, 4rem);
  align-items: start;
}

.about-phylosophy-image {
  width: 100%;
  max-width: 760px;
  height: auto;
  object-fit: contain;
}

.about-phylosophy-image:first-child {
  justify-self: start;
  max-width: 700px;
}

.about-phylosophy-image:last-child {
  justify-self: end;
}

.about-professional {
  background: #ff4938;
  padding: 2.2rem 1.6rem 3.2rem;
}

.about-professional-title {
  margin: 0;
  font-family: 'Arial Black', Arial, sans-serif;
  font-style: normal;
  font-size: clamp(1.5rem, 2.3vw, 2.1rem);
  color: #fff;
}

.about-professional-grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.about-professional-card {
  background: #fff;
  padding: 0.9rem 1rem;
  min-height: 160px;
  border-radius: 10px;
}

.about-professional-card h3 {
  margin: 0 0 0.65rem;
  font-family: 'Arial Black', Arial, sans-serif;
  font-style: normal;
  font-size: 1rem;
  text-transform: lowercase;
}

.about-professional-card p {
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
  font-size: 0.94rem;
  line-height: 1.28;
}

.about-professional-card p + p {
  margin-top: 0.5rem;
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
  .about-professional,
  .about-footer-strip {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .about-red-strip {
    min-height: 210px;
  }

  .about-blue-panel {
    min-height: 90vh;
    padding-bottom: 2.2rem;
  }

  .about-phylosophy-images {
    gap: 1.4rem;
  }

  .about-professional-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
}

@media (max-width: 680px) {
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
    min-height: 90vh;
    padding-top: 1.35rem;
    padding-bottom: 2rem;
  }

  .about-phylosophy {
    font-size: 1.5rem;
  }

  .about-phylosophy-images {
    margin-top: 1rem;
    gap: 1.1rem;
  }
}
</style>
