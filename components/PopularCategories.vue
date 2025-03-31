<template>
  <section class="popular-categories">
    <div class="section-header">
      <p class="section-subtitle">CUSTOMER FAVORITES</p>
      <h2 class="section-title">Popular Categories</h2>
    </div>
    
    <div class="categories-grid">
      <div v-for="category in categories" :key="category.id" class="category-card">
        <div class="category-icon" v-html="category.icon"></div>
        <div class="category-info">
          <h3 class="category-name">{{ category.name }}</h3>
          <span class="category-count">{{ category.count }} {{ category.itemLabel }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import '../assets/css/popularCategories.css'

defineProps({
  categories: {
    type: Array,
    required: true
  }
})
</script>