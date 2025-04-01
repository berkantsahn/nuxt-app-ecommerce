<template>
  <footer class="footer-main">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="flex items-center gap-3">
              <img :src="data.brand.logo" alt="Foodzy" class="h-12" />
              <div class="flex flex-col">
                <span class="text-lg font-semibold">Foodzy</span>
                <p class="text-sm text-gray-500">{{ data.brand.slogan }}</p>
              </div>
            </div>
          </div>
          <p class="footer-description">
            {{ data.brand.description }}
          </p>
          <div class="footer-address">
            <Icon :name="data.brand.contact.address.icon" :style="{ color: data.brand.contact.address.color }" class="text-xl" />
            <p>{{ data.brand.contact.address.text }}</p>
          </div>
          <div class="footer-email">
            <Icon :name="data.brand.contact.email.icon" :style="{ color: data.brand.contact.email.color }" />
            <a :href="'mailto:' + data.brand.contact.email.text">{{ data.brand.contact.email.text }}</a>
          </div>
          <div class="footer-phone">
            <Icon :name="data.brand.contact.phone.icon" :style="{ color: data.brand.contact.phone.color }" />
            <a :href="'tel:' + data.brand.contact.phone.text">{{ data.brand.contact.phone.text }}</a>
          </div>
        </div>

        <!-- Company Section -->
        <div class="footer-section">
          <h3 class="footer-section-title">Company</h3>
          <div class="footer-links">
            <div v-for="item in data.company" :key="item.id">
              <a :href="item.link" class="footer-link">{{ item.title }}</a>
            </div>
          </div>
        </div>

        <!-- Category Section -->
        <div class="footer-section">
          <h3 class="footer-section-title">Category</h3>
          <div class="footer-links">
            <div v-for="item in data.categories" :key="item.id">
              <a :href="item.link" class="footer-link">{{ item.title }}</a>
            </div>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="footer-newsletter">
          <h3 class="footer-section-title">Subscribe Our Newsletter</h3>
          <div class="footer-search">
            <input
              type="email"
              placeholder="Search here..."
              class="footer-search-input"
            />
            <button class="footer-search-button">
              <Icon name="material-symbols:send" size="24" />
            </button>
          </div>
          <div class="footer-social">
            <a v-for="item in data.social" :key="item.id" :href="item.link" class="footer-social-link">
              <Icon :name="item.icon" size="24" />
            </a>
          </div>
          <div class="footer-gallery">
            <div v-for="item in data.gallery" :key="item.id" class="footer-gallery-item">
              <img :src="`/images${item.image}`" alt="Gallery" class="footer-gallery-image" />
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-copyright">
        <p>© 2025 <span class="text-[#FDC040]">Foodzy</span>, All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
@import '@/assets/css/footerMain.css';
</style> 