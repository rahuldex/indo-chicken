const productImages = {
  1: '/images/products/chicken-breast.jpg',
  2: '/images/products/chicken-drumsticks.jpg',
  3: '/images/products/whole-chicken.jpg',
  4: '/images/products/chicken-keema.jpg',
  5: '/images/products/brown-eggs.jpg',
  6: '/images/products/white-eggs.jpg',
  7: '/images/products/organic-eggs.jpg',
  8: '/images/products/tandoori.jpg',
  9: '/images/products/peri-peri.jpg',
  10: '/images/products/combo-pack.jpg',
  11: '/images/products/curry-cut.jpg',
  12: '/images/products/chicken-wings.jpg',
}

const categoryImages = {
  chicken: '/images/categories/chicken.jpg',
  eggs: '/images/categories/eggs.jpg',
  marinated: '/images/categories/marinated.jpg',
  combo: '/images/categories/combo.jpg',
}

export const heroImage = '/images/hero-chicken.jpg'
export const fallbackImage = '/images/products/chicken-breast.jpg'

export function getProductImage(product) {
  return product?.image || productImages[product?.id] || fallbackImage
}

export function getCategoryImage(category) {
  return categoryImages[category.id] || fallbackImage
}
