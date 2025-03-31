export const dailyBestSellsData = {
  categories: [
    { id: 1, name: 'Featured', isActive: true },
    { id: 2, name: 'Popular', isActive: false },
    { id: 3, name: 'New added', isActive: false }
  ],
  featuredProduct: {
    image: new URL('~/assets/images/banner-best-sells.png', import.meta.url).href,
    alt: 'Featured Product'
  },
  products: [
    {
      id: 1,
      name: 'Burger 1',
      brand: 'Hodo Foods',
      price: 12.75,
      originalPrice: 25.50,
      rating: 4,
      soldCount: 90,
      totalCount: 120,
      image: new URL('~/assets/images/product-1.png', import.meta.url).href,
      tag: 'Save 50%'
    },
    {
      id: 2,
      name: 'Burger 2',
      brand: 'Hodo Foods',
      price: 6.59,
      originalPrice: 25,
      rating: 3,
      soldCount: 90,
      totalCount: 120,
      image: new URL('~/assets/images/product-2.png', import.meta.url).href,
      tag: 'Best Sale'
    },
    {
      id: 3,
      name: 'Burger 3',
      brand: 'Hodo Foods',
      price: 19.31,
      originalPrice: 25.75,
      rating: 5,
      soldCount: 90,
      totalCount: 120,
      image: new URL('~/assets/images/product-3.png', import.meta.url).href,
      tag: 'Save 15%'
    },
    {
      id: 4,
      name: 'Burger 4',
      brand: 'Hodo Foods',
      price: 17.36,
      originalPrice: 24.8,
      rating: 2,
      soldCount: 90,
      totalCount: 120,
      image: new URL('~/assets/images/product-4.png', import.meta.url).href,
      tag: 'Save 30%'
    },
    {
      id: 5,
      name: 'Burger 5',
      brand: 'Hodo Foods',
      price: 12.6,
      originalPrice: 21,
      rating: 5,
      soldCount: 90,
      totalCount: 120,
      image: new URL('~/assets/images/product-3.png', import.meta.url).href,
      tag: 'Save 40%'
    },
    {
      id: 6,
      name: 'Burger 6',
      brand: 'Hodo Foods',
      price: 13.65,
      originalPrice: 22.75,
      rating: 1,
      soldCount: 90,
      totalCount: 120,
      image: new URL('~/assets/images/product-2.png', import.meta.url).href,
      tag: 'Save 40%'
    }
  ]
} 