<template>
  <section class="footer-subscribe-section">
    <div class="footer-subscribe-content">
      <div class="footer-subscribe-text">
        <h2 class="footer-subscribe-title">
          Stay home & get your daily<br />
          needs from our shop
        </h2>
        <p class="footer-subscribe-subtitle">
          Start Your Daily Shopping with Nest Mart
        </p>
      </div>
      
      <form class="footer-subscribe-form" @submit.prevent="handleSubscribe">
        <div class="footer-subscribe-input-group">
          <input
            type="email"
            placeholder="Your email address"
            class="footer-subscribe-input"
            v-model="email"
          />
          <button type="submit" class="footer-subscribe-button">
            Subscribe
          </button>
        </div>
      </form>
    </div>

    <div class="footer-subscribe-images">
      <img src="/images/subscribe-section.png" alt="Delivery Man" class="h-full object-contain" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubscribe = () => {
  // Burada email abonelik işlemi yapılacak
  console.log('Subscribed with:', email.value)
  email.value = ''
}
</script>

<style scoped>
@import '@/assets/css/footer.css';
</style> 