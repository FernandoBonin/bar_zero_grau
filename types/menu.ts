export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
  tag?: string;
  itemCount: number;
  filterGroup: 'all' | 'petiscos' | 'chapas' | 'bebidas' | 'almoco' | 'sobremesas';
}

export interface Accompaniment {
  name: string;
  description: string;
  icon: string;
}

export interface PairingSuggestion {
  title: string;
  description: string;
  categoryLink?: string;
  image?: string;
}

export interface Product {
  id: string;
  slug: string;
  categorySlug: string;
  name: string;
  subname?: string;
  description: string;
  detailedDescription: string;
  portion: string;
  priceLabel: string;
  image: string;
  badge?: string;
  tag?: string;
  featured?: boolean;
  prepTime?: string;
  allergens?: string;
  subCategoryFilter?: string;
  dietaryTag?: string;
  pairing?: PairingSuggestion;
  accompaniments?: Accompaniment[];
}
