<template>
  <section class="popular-categories">
    <div class="section-header">
      <h2 class="section-title">Popular Categories</h2>
      <p class="section-subtitle">Browse our collection of popular categories</p>
    </div>
    
    <div class="categories-grid">
      <div v-for="category in categories" :key="category.id" class="category-card">
        <div class="category-image">
          <img :src="category.image" :alt="category.name">
          <div class="category-overlay">
            <span class="category-count">{{ category.count }} items</span>
          </div>
        </div>
        <div class="category-info">
          <h3 class="category-name">{{ category.name }}</h3>
          <a href="#" class="category-link">
            View Collection
            <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import '@/assets/css/popularCategories.css'

defineProps({
  categories: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
/* CSS kodları artık assets/css/popularCategories.css dosyasında */
</style> 