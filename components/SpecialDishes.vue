<template>
  <section class="special-dishes">
    <div class="section-special-dishes-header">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="section-special-dishes-subtitle">SPECIAL DISHES</h3>
          <h2 class="section-special-dishes-title">Standout Dishes</h2>
          <h2 class="section-special-dishes-title">From Our Menu</h2>
        </div>
        <div class="flex gap-2">
          <button class="slider-nav" @click="prevSlide">
            <span class="sr-only">Önceki</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button class="slider-nav" @click="nextSlide">
            <span class="sr-only">Sonraki</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4">
      <div class="relative">
        <div class="dishes-slider" ref="slider">
          <div class="dishes-track" :style="{ transform: `translateX(-${currentSlide * 33.33}%)` }">
            <div v-for="dish in dishes" :key="dish.id" class="dish-card">
              <div class="dish-card-content">
                <div class="dish-image">
                  <img :src="`/images${dish.image}`" :alt="dish.name" class="w-full h-full object-cover">
                  <button class="favorite-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                </div>
                <div class="dish-info">
                  <h3 class="dish-name">{{ dish.name }}</h3>
                  <p class="dish-description">{{ dish.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import '~/assets/css/specialDishes.css'

const props = defineProps({
  dishes: {
    type: Array,
    required: true
  }
})

const currentSlide = ref(0)

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const nextSlide = () => {
  if (currentSlide.value < props.dishes.length - 3) {
    currentSlide.value++
  }
}
</script> 