<script setup lang="ts">
import { RouterLink } from 'vue-router'

const projectButtons = [
  {
    id: 'photography',
    label: 'photography',
    path: '/projects/photography',
    image: '/images/Carpetaamarilla .png',
    hoverImage: '/images/solapacarpetamarilla.PNG',
    objects: [
      {
        src: '/images/OBJ12.png',
        alt: 'camera object',
        className: 'object-camera',
      },
      {
        src: '/images/OBJ31.png',
        alt: 'phone object',
        className: 'object-phone',
      },
    ],
  },
  {
    id: 'posters',
    label: 'posters',
    path: '/projects/posters',
    image: '/images/Carpetaazul .png',
    hoverImage: '/images/solapacarpetaazul.PNG',
    objects: [
      {
        src: '/images/OBJ7.png',
        alt: 'poster object one',
        className: 'object-posters-left',
      },
      {
        src: '/images/OBJ16.png',
        alt: 'poster object two',
        className: 'object-posters-right',
      },
    ],
  },
  {
    id: 'branding-identity',
    label: 'branding and identity projects',
    path: '/projects/branding-identity',
    image: '/images/Carpetaroja .png',
    hoverImage: '/images/solapacarpetaroja.PNG',
    objects: [
      {
        src: '/images/OBJ3.png',
        alt: 'branding object one',
        className: 'object-branding-left',
      },
      {
        src: '/images/OBJ29.png',
        alt: 'branding object two',
        className: 'object-branding-right',
      },
    ],
  },
  {
    id: 'typography-magazine',
    label: 'tipography and magazine works',
    path: '/projects/typography-magazine',
    image: '/images/Carpetaamarilla .png',
    hoverImage: '/images/solapacarpetamarilla.PNG',
    objects: [
      {
        src: '/images/OBJ10.png',
        alt: 'typography object one',
        className: 'object-typography-left',
      },
      {
        src: '/images/OBJ30.png',
        alt: 'typography object two',
        className: 'object-typography-right',
      },
    ],
  },
]
</script>

<template>
  <section class="projects-page min-h-[calc(100vh-90px)] px-3 py-5 sm:min-h-[calc(100vh-73px)] sm:px-4 sm:py-6">
    <div class="projects-buttons" aria-label="Project categories">
      <RouterLink
        v-for="button in projectButtons"
        :key="button.id"
        :to="button.path"
        class="project-button"
      >
        <span class="project-button-visual">
          <img :src="button.image" :alt="`Open ${button.label}`" class="project-button-image project-button-base" />
          <img
            v-for="object in button.objects ?? []"
            :key="object.src"
            :src="object.src"
            :alt="object.alt"
            class="project-object"
            :class="object.className"
          />
          <img :src="button.hoverImage" alt="" aria-hidden="true" class="project-button-image project-button-hover" />
        </span>
        <span class="project-button-label">{{ button.label }}</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.projects-page {
  background: #f8f8f8;
}

.projects-buttons {
  width: min(100%, 420px);
  margin: 0;
  padding-left: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;
}

.project-button {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
}

.project-button-visual {
  position: relative;
  display: inline-block;
}

.project-button-image {
  width: clamp(120px, 18vw, 170px);
  height: auto;
  transition: transform 0.2s ease;
}

.project-button-base {
  position: relative;
  z-index: 2;
}

.project-button-hover {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
  visibility: hidden;
  transform: translateY(0.2rem) scale(1);
  transform-origin: center;
  transition: transform 0.2s ease;
  pointer-events: none;
  z-index: 4;
}

.project-object {
  position: absolute;
  bottom: 62%;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
  z-index: 3;
}

.object-camera {
  left: 12%;
  width: 63%;
  transform: translateY(0.45rem) rotate(-8deg);
}

.object-phone {
  left: 56%;
  width: 44%;
  transform: translateY(0.45rem) rotate(10deg);
}

.object-posters-left {
  left: 15%;
  width: 40%;
  transform: translateY(0.45rem) rotate(-12deg);
}

.object-posters-right {
  left: 42%;
  width: 57%;
  transform: translateY(0.45rem) rotate(8deg);
}

.object-branding-left {
  left: 10%;
  width: 45%;
  transform: translateY(0.45rem) rotate(-11deg);
}

.object-branding-right {
  left: 46%;
  width: 48%;
  transform: translateY(0.45rem) rotate(8deg);
}

.object-typography-left {
  left: 12%;
  width: 52%;
  transform: translateY(0.45rem) rotate(-7deg);
}

.object-typography-right {
  left: 50%;
  width: 45%;
  transform: translateY(0.45rem) rotate(7deg);
}

.project-button-label {
  margin-top: -0.7rem;
  padding-left: 0.85rem;
  color: #1e1e1e;
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: clamp(0.85rem, 1.3vw, 1.2rem);
  text-align: left;
}

.project-button:hover .project-button-base {
  transform: scale(1.06);
}

.project-button:hover .project-button-hover {
  visibility: visible;
  transform: translateY(-0.1rem) scale(1.06);
}

.project-button:hover .project-object {
  opacity: 1;
}

.project-button:hover .object-camera {
  transform: translateY(-0.05rem) rotate(-8deg);
}

.project-button:hover .object-phone {
  transform: translateY(-0.05rem) rotate(10deg);
}

.project-button:first-child:hover .project-button-base {
  z-index: 25;
}

.project-button:first-child:hover .project-object {
  z-index: 26;
}

.project-button:first-child:hover .project-button-hover {
  z-index: 27;
}

.project-button:hover .object-posters-left {
  transform: translateY(-0.05rem) rotate(-12deg);
}

.project-button:hover .object-posters-right {
  transform: translateY(-0.05rem) rotate(8deg);
}

.project-button:hover .object-branding-left {
  transform: translateY(-0.05rem) rotate(-11deg);
}

.project-button:hover .object-branding-right {
  transform: translateY(-0.05rem) rotate(8deg);
}

.project-button:hover .object-typography-left {
  transform: translateY(-0.05rem) rotate(-7deg);
}

.project-button:hover .object-typography-right {
  transform: translateY(-0.05rem) rotate(7deg);
}
</style>
