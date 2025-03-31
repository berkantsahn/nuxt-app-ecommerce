<template>
  <div class="menu-container">
    <div class="menu-inner">
      <!-- Mobil Menü Butonu -->
      <div class="mobile-menu-button" @click="toggleMobileMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <!-- Desktop Menü -->
      <div class="menu-wrapper">
        <!-- Ana Menü Linkleri -->
        <div class="menu-links-container">
          <div class="menu-links">
            <template v-for="item in menuItems" :key="item.title">
              <div class="menu-link group">
                <a :href="item.link" class="menu-link-text" :class="{'menu-link-text--default': !item.hasDropdown, 'menu-link-text--dropdown': item.hasDropdown}">
                  {{ item.title }}
                  <svg v-if="item.hasDropdown" xmlns="http://www.w3.org/2000/svg" class="menu-dropdown-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </template>
          </div>
        </div>

        <!-- Telefon Numarası -->
        <div class="phone-container">
          <a href="tel:+123456890" class="phone-link">
            <svg xmlns="http://www.w3.org/2000/svg" class="phone-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +123 ( 456 ) ( 7890 )
          </a>
        </div>
      </div>

      <!-- Mobil Menü -->
      <div class="mobile-menu" :class="{ 'mobile-menu--open': isMobileMenuOpen }">
        <div class="mobile-menu-links">
          <template v-for="item in menuItems" :key="item.title">
            <div class="mobile-menu-link">
              <a :href="item.link" class="mobile-menu-link-text">
                {{ item.title }}
                <svg v-if="item.hasDropdown" xmlns="http://www.w3.org/2000/svg" class="mobile-menu-dropdown-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </template>
        </div>
        <div class="mobile-phone-container">
          <a href="tel:+123456890" class="mobile-phone-link">
            <svg xmlns="http://www.w3.org/2000/svg" class="mobile-phone-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +123 ( 456 ) ( 7890 )
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import '../assets/css/menu.css'
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

defineProps({
  menuItems: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style> 