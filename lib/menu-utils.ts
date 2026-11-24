import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { Category, Product } from '@/types/menu';

export function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((prod) => prod.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((prod) => prod.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((prod) => prod.featured);
}

export function getRelatedProducts(
  currentSlug: string,
  categorySlug: string,
  limit: number = 3
): Product[] {
  const inCategory = products.filter(
    (prod) => prod.categorySlug === categorySlug && prod.slug !== currentSlug
  );

  if (inCategory.length >= limit) {
    return inCategory.slice(0, limit);
  }

  // If not enough in category, supplement with featured products
  const others = products.filter(
    (prod) => prod.slug !== currentSlug && !inCategory.some((p) => p.id === prod.id)
  );

  return [...inCategory, ...others].slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  if (!query || !query.trim()) {
    return [];
  }

  const normalized = normalizeText(query);
  const terms = normalized.split(/\s+/).filter(Boolean);

  return products.filter((prod) => {
    const haystack = normalizeText(
      `${prod.name} ${prod.subname || ''} ${prod.description} ${prod.detailedDescription} ${prod.categorySlug} ${prod.tag || ''} ${prod.badge || ''}`
    );

    return terms.every((term) => haystack.includes(term));
  });
}
