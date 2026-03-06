<script setup lang="ts">
import { ref } from 'vue'

const isFirstCameraOpen = ref(false)

const handleFirstCameraClick = () => {
  isFirstCameraOpen.value = !isFirstCameraOpen.value
}

const closeFirstCameraPanel = () => {
  isFirstCameraOpen.value = false
}
</script>

<template>
  <section class="photography-empty" @click="closeFirstCameraPanel">
    <p class="photography-hint">click and discover!!</p>
    <div class="camera-row" @click.stop>
      <button
        type="button"
        class="camera-trigger"
        :class="{ 'is-open': isFirstCameraOpen }"
        @click.stop="handleFirstCameraClick"
      >
        <img src="/images/cámara2.png" alt="camara 2" class="camera-image" />
      </button>
      <img src="/images/camara4.png" alt="camara 4" class="camera-image" />
      <img src="/images/cámara1.png" alt="camara 1" class="camera-image" />
      <img src="/images/camara3.png" alt="camara 3" class="camera-image" />
    </div>

    <section v-if="isFirstCameraOpen" class="photo-panel" @click.stop />
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
</style>
