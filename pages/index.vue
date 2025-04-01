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
    <DealsOfTheDay :deals="dealsOfTheDayData.deals" />
    <WhyChooseUs :title="whyChooseUsData.title" :features="whyChooseUsData.features" />
    <SubscribeSection />
    <Features :features="footerFeatures" />
    <FooterMain :data="footerMainData" />
  </div>
</template>

<script setup>
import Menu from '~/components/Menu.vue'
import Navbar from '~/components/Navbar.vue'
import HomePhotoSection from '~/components/HomePhotoSection.vue'
import PopularCategories from '~/components/PopularCategories.vue'
import DailyBestSells from '~/components/DailyBestSells.vue'
import SpecialDishes from '~/components/SpecialDishes.vue'
import DealsOfTheDay from '~/components/DealsOfTheDay.vue'
import WhyChooseUs from '~/components/WhyChooseUs.vue'
import SubscribeSection from '~/components/Footer/SubscribeSection.vue'
import Features from '~/components/Footer/Features.vue'
import FooterMain from '~/components/Footer/Main.vue'
import { categories } from '~/assets/datas/categories'
import { menuItems } from '~/assets/datas/menuItems'
import { dailyBestSellsData } from '~/assets/datas/dailyBestSells'
import { specialDishesData } from '~/assets/datas/specialDishes'
import { dealsOfTheDayData } from '~/assets/datas/dealsOfTheDay'
import { whyChooseUsData } from '~/assets/datas/whyChooseUs'
import { footerFeatures } from '~/assets/datas/footerFeatures'
import { footerMainData } from '~/assets/datas/footerMain'

definePageMeta({
  title: 'Ana Sayfa',
  layout: 'default'
})
</script> 