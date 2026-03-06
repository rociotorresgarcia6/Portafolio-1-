<template>
  <section class="about-layout">
    <div class="about-main">
      <div class="about-body-copy">
        <p>
          I'm Rochosm, the least cool person in the world. But what I am is creative, experimental, always eager to
          learn. I love colors and extravagant shapes.
        </p>
        <p>
          Design, for me, is my identity, and that's why I created "Only for Cool People": to build a community. A
          group of people who feel connected to my art and my ideas.
        </p>
        <p>Oh, and by the way, I hate AGUA CON GAS.</p>
      </div>
      <div class="about-bottle" aria-hidden="true"></div>
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
      <div class="about-words" aria-hidden="true">
        <span>liberty</span>
        <span>random</span>
        <span>experimentation</span>
        <span>spontaneity</span>
        <span>exclusive</span>
        <span>irony</span>
      </div>
    </div>

    <div class="about-footer-strip">
      <div class="about-footer-brand">
        <span class="about-footer-star">*</span>
        <span>rochos</span>
      </div>
      <div class="about-footer-face" aria-hidden="true"></div>
    </div>
  </section>
</template>

<style scoped>
.about-layout {
  min-height: calc(100vh - 73px);
  background: #f8f5ef;
}

.about-main {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 1.6rem 1.2rem;
}

.about-body-copy {
  max-width: 620px;
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
  color: #000;
  font-size: clamp(1.2rem, 1.7vw, 2rem);
  line-height: 1.22;
}

.about-body-copy p {
  margin: 0;
}

.about-body-copy p + p {
  margin-top: 1.4rem;
}

.about-bottle {
  width: clamp(130px, 18vw, 180px);
  height: clamp(260px, 30vw, 360px);
  margin-right: clamp(0.2rem, 2.6vw, 2.4rem);
  align-self: flex-end;
  background-image: url('/images/about/gas-bottle.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
}

.about-red-strip {
  background: #ff4a3a;
  padding: 1.15rem 1.6rem 1.3rem;
}

.about-red-copy {
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
  color: #fff;
  font-size: clamp(1.28rem, 2.2vw, 2rem);
  line-height: 1.12;
  max-width: 640px;
}

.about-red-copy span {
  display: block;
}

.about-red-copy span + span {
  margin-top: 0.33rem;
}

.about-blue-panel {
  background: #4db3df;
  min-height: 280px;
  padding: 2rem 1.6rem 1.7rem;
}

.about-phylosophy {
  margin: 0;
  font-family: 'Arial Black', Arial, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: clamp(1.6rem, 2.4vw, 2.35rem);
  color: #000;
}

.about-words {
  margin-top: 1.2rem;
  min-height: 160px;
  position: relative;
  font-family: 'Comic Sans MS', 'Marker Felt', cursive;
  font-size: clamp(1.45rem, 3vw, 2.45rem);
  color: #061626;
}

.about-words span {
  position: absolute;
}

.about-words span:nth-child(1) {
  left: 3%;
  top: 20%;
}

.about-words span:nth-child(2) {
  left: 7%;
  top: 48%;
}

.about-words span:nth-child(3) {
  left: 3%;
  top: 70%;
}

.about-words span:nth-child(4) {
  right: 18%;
  top: 6%;
}

.about-words span:nth-child(5) {
  right: 24%;
  top: 38%;
}

.about-words span:nth-child(6) {
  right: 14%;
  top: 67%;
}

.about-footer-strip {
  min-height: 120px;
  padding: 1rem 1.6rem;
  background: #f8f5ef;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.about-footer-brand {
  margin-bottom: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: Helvetica, Arial, sans-serif;
  font-style: oblique;
  font-size: 2rem;
  color: #000;
}

.about-footer-star {
  font-size: 2.2rem;
  line-height: 1;
}

.about-footer-face {
  width: clamp(145px, 23vw, 280px);
  height: clamp(95px, 16vw, 170px);
  background-image: url('/images/about/rochos-face.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
}

@media (max-width: 900px) {
  .about-main {
    padding: 1.3rem 1rem 1rem;
    gap: 0.9rem;
  }

  .about-body-copy {
    font-size: clamp(0.95rem, 2.8vw, 1.2rem);
    max-width: 75%;
  }

  .about-red-strip,
  .about-blue-panel,
  .about-footer-strip {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .about-words {
    font-size: clamp(1.15rem, 4.3vw, 1.8rem);
    min-height: 130px;
  }

  .about-footer-brand {
    font-size: 1.6rem;
  }
}

@media (max-width: 700px) {
  .about-main {
    flex-direction: column;
    align-items: flex-start;
  }

  .about-body-copy {
    max-width: 100%;
    font-size: 0.98rem;
  }

  .about-bottle {
    width: 118px;
    height: 220px;
    margin-right: 0;
    align-self: center;
  }

  .about-red-copy {
    font-size: clamp(1.05rem, 6vw, 1.45rem);
  }

  .about-blue-panel {
    min-height: 240px;
    padding-top: 1.4rem;
  }

  .about-words {
    min-height: 140px;
    margin-top: 1rem;
  }

  .about-words span:nth-child(1) {
    left: 2%;
    top: 18%;
  }

  .about-words span:nth-child(2) {
    left: 6%;
    top: 47%;
  }

  .about-words span:nth-child(3) {
    left: 2%;
    top: 72%;
  }

  .about-words span:nth-child(4) {
    right: 4%;
    top: 8%;
  }

  .about-words span:nth-child(5) {
    right: 13%;
    top: 40%;
  }

  .about-words span:nth-child(6) {
    right: 6%;
    top: 70%;
  }

  .about-footer-strip {
    min-height: 95px;
    align-items: center;
  }

  .about-footer-brand {
    margin-bottom: 0;
    font-size: 1.35rem;
  }

  .about-footer-star {
    font-size: 1.55rem;
  }

  .about-footer-face {
    width: 120px;
    height: 80px;
  }
}
</style>
