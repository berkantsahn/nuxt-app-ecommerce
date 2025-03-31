<template>
  <div>
    <Menu :menuItems="menuItems" />
    <Navbar />
    <HomePhotoSection />
    <PopularCategories :categories="categories" />
    <div class="container mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold text-center">Foodzy E-Ticaret</h1>
      <p class="text-center mt-4 text-gray-600">Navbar üzerinden siteyi geliştirmeye devam edeceğiz.</p>
    </div>
  </div>
</template>

<script setup>
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import HomePhotoSection from '../components/HomePhotoSection.vue'
import PopularCategories from '../components/PopularCategories.vue'
import { categories } from '../assets/datas/categories'
import { menuItems } from '../assets/datas/menuItems'

definePageMeta({
  title: 'Ana Sayfa'
})
</script> 