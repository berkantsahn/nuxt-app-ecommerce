<template>
  <section class="popular-categories">
    <div class="section-header">
      <h2 class="section-title">Popular Categories</h2>
      <p class="section-subtitle">Browse our collection of popular categories</p>
    </div>
    
    <div class="categories-grid">
      <div v-for="category in categories" :key="category.id" class="category-card">
        <div class="category-image">
          <img :src="category.image" :alt="category.name">
          <div class="category-overlay">
            <span class="category-count">{{ category.count }} items</span>
          </div>
        </div>
        <div class="category-info">
          <h3 class="category-name">{{ category.name }}</h3>
          <a href="#" class="category-link">
            View Collection
            <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    id: 1,
    name: 'Fresh Fruits',
    image: '/images/homepage.png',
    count: 150
  },
  {
    id: 2,
    name: 'Fresh Vegetables',
    image: '/images/homepage.png',
    count: 120
  },
  {
    id: 3,
    name: 'Canned Goods',
    image: '/images/homepage.png',
    count: 200
  },
  {
    id: 4,
    name: 'Bread & Bakery',
    image: '/images/homepage.png',
    count: 80
  },
  {
    id: 5,
    name: 'Frozen Foods',
    image: '/images/homepage.png',
    count: 90
  },
  {
    id: 6,
    name: 'Organic Food',
    image: '/images/homepage.png',
    count: 100
  }
]
</script>

<style scoped>
.popular-categories {
  padding: 60px 20px;
  background-color: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 12px;
}

.section-subtitle {
  font-size: 16px;
  color: #666;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.category-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px;
}

.category-card:hover {
  transform: translateX(10px);
}

.category-image {
  position: relative;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.category-overlay {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
}

.category-count {
  font-size: 12px;
  font-weight: 600;
  color: #333;
}

.category-info {
  flex-grow: 1;
}

.category-name {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.category-link {
  color: #4CAF50;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
}

.category-link:hover {
  color: #45a049;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.category-link:hover .arrow-icon {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .category-card {
    flex-direction: column;
    text-align: center;
  }

  .category-image {
    width: 100%;
    height: 200px;
  }

  .category-info {
    text-align: center;
  }

  .category-link {
    justify-content: center;
  }
}
</style> 