<template>
  <section class="daily-best-sells">
    <div class="section-top">
      <h2 class="section-title">Daily Best Sells</h2>
      <div class="category-tabs">
        <button 
          v-for="category in categories" 
          :key="category.id" 
          class="tab-button"
          :class="{ 'active': category.isActive }"
          @click="changeCategory(category.id)"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <div class="products-container">
      <!-- Sol Taraf Kartı -->
      <div class="featured-product-card">
        <div class="featured-product-image-container">
          <img 
            :src="featuredProduct.image" 
            :alt="featuredProduct.alt" 
            class="featured-product-image"
          />
        </div>
      </div>

      <!-- Sağ Taraf Ürün Grid -->
      <div class="products-grid">
        <!-- Sol Ok -->
        <button class="scroll-button left" @click="scrollLeft" :class="{ 'hidden': isAtStart }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div class="products-scroll" ref="scrollContainer">
          <div v-for="product in products" :key="product.id" class="product-card">
            <div class="best-sale-tag">{{ product.tag }}</div>
            <div class="product-image-container">
              <img :src="product.image" :alt="product.name" class="product-image">
            </div>
            <div class="product-info">
              <div class="product-brand">{{ product.brand }}</div>
              <h3 class="product-name">{{ product.name }}</h3>
              <div class="product-rating">
                <div class="stars">
                  <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="n <= product.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div class="product-price-container">
                <span class="product-price">${{ product.price }}</span>
                <span class="product-original-price">${{ product.originalPrice }}</span>
              </div>
              <div class="product-progress">
                <div class="progress-text">
                  <span>Sold: {{ product.soldCount }}/{{ product.totalCount }}</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" :style="{ width: (product.soldCount / product.totalCount * 100) + '%' }"></div>
                </div>
              </div>
              <button class="add-to-cart-btn">Add To Cart</button>
            </div>
          </div>
        </div>

        <!-- Sağ Ok -->
        <button class="scroll-button right" @click="scrollRight" :class="{ 'hidden': isAtEnd }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import '../assets/css/dailyBestSells.css'
import { dailyBestSellsData } from '~/assets/datas/dailyBestSells'

const { featuredProduct, products, categories: initialCategories } = dailyBestSellsData
const categories = ref(initialCategories)

const changeCategory = (categoryId) => {
  categories.value = categories.value.map(category => ({
    ...category,
    isActive: category.id === categoryId
  }))
}

const scrollContainer = ref(null)
const isAtStart = ref(true)
const isAtEnd = ref(false)

const checkScrollPosition = () => {
  if (!scrollContainer.value) return

  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
  isAtStart.value = scrollLeft <= 0
  isAtEnd.value = scrollLeft + clientWidth >= scrollWidth - 1
}

const scrollLeft = () => {
  if (!scrollContainer.value) return
  scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
  if (!scrollContainer.value) return
  scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
}

onMounted(() => {
  checkScrollPosition()
  scrollContainer.value?.addEventListener('scroll', checkScrollPosition)
  window.addEventListener('resize', checkScrollPosition)
})

onUnmounted(() => {
  scrollContainer.value?.removeEventListener('scroll', checkScrollPosition)
  window.removeEventListener('resize', checkScrollPosition)
})
</script> 