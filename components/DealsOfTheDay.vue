<template>
  <section class="deals-of-day">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between mb-8">
        <h2 class="section-deals-of-day-title">Deals Of The Day</h2>
        <a href="#" class="text-gray-600 hover:text-red-500 transition-colors duration-300">All Deals &gt;</a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="deal in deals" :key="deal.id" class="deal-card">
          <div class="deal-card-content">
            <div class="deal-image">
              <img :src="`/images${deal.image}`" :alt="deal.title" class="w-full h-full object-cover">
            </div>
            <div class="deal-info">
              <h3 class="deal-title">{{ deal.title }}</h3>
              <div class="flex items-center gap-1">
                <div class="flex items-center">
                  <span class="text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </div>
                <span class="text-gray-400 text-sm">({{ deal.rating }}.0)</span>
              </div>
              <div class="flex items-center gap-1 mt-1 mb-2">
                <span class="text-sm text-gray-400">By</span>
                <span class="text-sm text-[#3BB77E]">{{ deal.brand }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-[#3BB77E] font-bold text-lg">${{ deal.price.toFixed(2) }}</span>
                  <span class="text-gray-400 text-sm line-through">${{ deal.oldPrice.toFixed(1) }}</span>
                </div>
                <button class="add-btn">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import '~/assets/css/dealsOfTheDay.css'

defineProps({
  deals: {
    type: Array,
    required: true
  }
})
</script> 