<template>
  <div>
    <Menu :menuItems="menuItems" />
    <Navbar />
    <HomePhotoSection />
    <PopularCategories :categories="categories" />
    <DailyBestSells 
      :featured-product="dailyBestSellsData.featuredProduct"
      :products="dailyBestSellsData.products"
    />
    <SpecialDishes :dishes="specialDishesData.dishes" />
  </div>
</template>

<script setup>
import Menu from '~/components/Menu.vue'
import Navbar from '~/components/Navbar.vue'
import HomePhotoSection from '~/components/HomePhotoSection.vue'
import PopularCategories from '~/components/PopularCategories.vue'
import DailyBestSells from '~/components/DailyBestSells.vue'
import SpecialDishes from '~/components/SpecialDishes.vue'
import { categories } from '~/assets/datas/categories'
import { menuItems } from '~/assets/datas/menuItems'
import { dailyBestSellsData } from '~/assets/datas/dailyBestSells'
import { specialDishesData } from '~/assets/datas/specialDishes'

definePageMeta({
  title: 'Ana Sayfa',
  layout: 'default'
})
</script> 