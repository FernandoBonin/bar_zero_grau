import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getCategoryBySlug,
  getProductsByCategory,
  getAllCategories,
} from '@/lib/menu-utils';
import CategoryDetailView from '@/components/CategoryDetailView';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Categoria Não Encontrada | Bar Zero Grau Tatuapé',
    };
  }

  return {
    title: `${category.name} | Bar Zero Grau Tatuapé`,
    description: `${category.description} Confira os pratos e porções no cardápio digital do Bar Zero Grau.`,
    openGraph: {
      title: `${category.name} — Bar Zero Grau Tatuapé`,
      description: category.description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(slug);
  const allCategories = getAllCategories();

  return (
    <CategoryDetailView
      category={category}
      products={products}
      allCategories={allCategories}
    />
  );
}
