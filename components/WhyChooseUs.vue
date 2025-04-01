<template>
  <section class="why-choose-us">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Sol taraf - Görsel -->
        <div class="image-container">
          <img src="/images/why-choose-us.png" alt="Why Choose Us" class="w-full h-auto rounded-2xl">
        </div>

        <!-- Sağ taraf - İçerik -->
        <div class="content-container">
          <h2 class="section-why-choose-us-title">{{ title }}</h2>
          
          <div class="features-grid">
            <div v-for="feature in features" :key="feature.id" class="feature-item">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="feature.icon" />
                </svg>
              </div>
              <div class="feature-content">
                <h3 class="feature-title">{{ feature.title }}</h3>
                <p class="feature-description">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import '../assets/css/whyChooseUs.css'

defineProps({
  title: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  }
})
</script> 