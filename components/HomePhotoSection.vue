<template>
  <a href="https://berkantsahin.com" target="_blank" class="photo-section">
    <img src="/public/images/homepage.png" alt="Berkant Şahin">
  </a>
</template>

<script setup>
</script>

<style scoped>
.photo-section {
  display: block;
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.photo-section:hover {
  transform: scale(1.02);
}

.photo-section img {
  width: 100%;
  height: auto;
  display: block;
}
</style> 