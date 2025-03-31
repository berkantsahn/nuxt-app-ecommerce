<template>
  <nav class="navbar-container">
    <div class="navbar-inner">
      <div class="navbar-wrapper">
        <!-- Logo ve Slogan -->
        <div class="navbar-logo">
          <div class="navbar-logo-icon">
            <img src="../assets/images/logo.svg" alt="Foodzy Logo" class="navbar-logo-image">
          </div>
          <div>
            <h1 class="navbar-logo-text">Foodzy</h1>
            <p class="navbar-logo-slogan">A Treasure of Tastes</p>
          </div>
        </div>

        <!-- Arama Formu -->
        <div class="navbar-search">
          <div class="navbar-search-form">
            <input type="text" placeholder="Search For Items..." class="navbar-search-input" />
            <div class="navbar-search-select-container">
              <select class="navbar-search-select">
                <option>All Categories</option>
              </select>
              <div class="navbar-search-select-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <button class="navbar-search-button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Kullanıcı Hesabı ve Sepet -->
        <div class="navbar-actions">
          <a href="#" class="navbar-action-link">
            <svg xmlns="http://www.w3.org/2000/svg" class="navbar-action-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Account</span>
          </a>
          
          <a href="#" class="navbar-action-link">
            <svg xmlns="http://www.w3.org/2000/svg" class="navbar-action-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>Wishlist</span>
          </a>
          
          <a href="#" class="navbar-action-link">
            <svg xmlns="http://www.w3.org/2000/svg" class="navbar-action-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Cart</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import '../assets/css/navbar.css'
</script> 