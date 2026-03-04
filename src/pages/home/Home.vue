<template>
  <section class="flex min-h-[calc(100vh-90px)] items-center justify-center px-4 sm:min-h-[calc(100vh-73px)] sm:px-6">
    <h1 class="flex flex-col items-start leading-none">
      <span class="welcome-title">welcome to</span>
      <span class="brand-title">rochos</span>
    </h1>
  </section>
</template>

<style scoped>
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
</style>
