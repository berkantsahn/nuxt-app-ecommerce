<template>
  <section class="footer-features">
    <div class="footer-features-grid">
      <div v-for="feature in features" :key="feature.id" class="footer-feature-item">
        <div class="footer-feature-icon">
          <Icon :name="feature.icon" size="42" />
        </div>
        <div class="footer-feature-content">
          <h3 class="footer-feature-title">{{ feature.title }}</h3>
          <p class="footer-feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
@import '@/assets/css/footerFeatures.css';
</style> 