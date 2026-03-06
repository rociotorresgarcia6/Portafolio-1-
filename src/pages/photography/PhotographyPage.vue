<template>
  <section class="photography-empty">
    <p class="photography-hint">click and discover!!</p>
    <div class="camera-row">
      <img src="/images/cámara2.png" alt="camara 2" class="camera-image" />
      <img src="/images/camara4.png" alt="camara 4" class="camera-image" />
      <img src="/images/cámara1.png" alt="camara 1" class="camera-image" />
      <img src="/images/camara3.png" alt="camara 3" class="camera-image" />
    </div>
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
</style>
