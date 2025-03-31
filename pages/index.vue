<template>
  <div>
    <Menu :menuItems="menuItems" />
    <Navbar />
    <HomePhotoSection />
    <PopularCategories :categories="categories" />
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