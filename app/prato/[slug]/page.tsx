import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  Flame,
  Users,
  ChefHat,
  Clock,
  AlertTriangle,
  Receipt,
  Utensils,
  Wine,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import {
  getProductBySlug,
  getCategoryBySlug,
  getRelatedProducts,
} from '@/lib/menu-utils';
import DishActions from '@/components/WaiterCallToast';
import ProductCard from '@/components/ProductCard';
import OrnamentalDivider from '@/components/OrnamentalDivider';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Prato Não Encontrado | Bar Zero Grau Tatuapé',
    };
  }

  return {
    title: `${product.name} | Bar Zero Grau Tatuapé`,
    description: `${product.description} Servido no Bar Zero Grau Tatuapé. Confira fotos e detalhes do prato.`,
    openGraph: {
      title: `${product.name} — Bar Zero Grau Tatuapé`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.categorySlug);
  const relatedProducts = getRelatedProducts(product.slug, product.categorySlug, 3);

  return (
    <div className="w-full flex flex-col bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 flex flex-col gap-6 sm:gap-8 w-full">
        {/* Top Navigation & Action Strip */}
        <div className="flex items-center justify-between gap-4 py-2 border-b border-outline-variant/20">
          <Link
            href={category ? `/categorias/${category.slug}` : '/categorias'}
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm font-semibold tracking-wide py-1 group"
          >
            <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para {category ? category.name : 'Categorias'}</span>
          </Link>

          {/* Interactive Favorite & Share Actions */}
          <DishActions
            dishName={product.name}
            categoryName={category ? category.name : 'Cardápio'}
          />
        </div>

        {/* ========================================================= */}
        {/* MAIN PRODUCT DETAIL: 2-Column Desktop, Stacked Mobile     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Hero Presentation & Image */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-2xl group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />

              {/* Hero Badges */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container/95 text-secondary-fixed text-xs font-bold tracking-wider uppercase shadow-md backdrop-blur-sm border border-secondary/30">
                  <Flame className="w-3.5 h-3.5 text-secondary" />
                  <span>{product.tag || product.badge || 'Especialidade da Casa'}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container-highest/90 text-primary text-xs font-semibold shadow-sm backdrop-blur-sm border border-primary/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Zero Grau</span>
                </span>
              </div>
            </div>

            {/* Preparation Footnote for desktop */}
            <div className="hidden lg:flex items-center gap-3 p-4 rounded-xl bg-surface-container border border-outline-variant/20 text-xs text-on-surface-variant">
              <ChefHat className="w-5 h-5 text-primary shrink-0" />
              <p className="leading-relaxed">
                Prato preparado na hora com ingredientes frescos selecionados por nossos chefs. Sem
                aditivos ou conservantes químicos artificiais.
              </p>
            </div>
          </div>

          {/* Right Column: Title, Metadata, Description & Accompaniments */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Title & Portion Metadata */}
            <div className="flex flex-col gap-2">
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-on-surface tracking-tight leading-tight">
                {product.name}
              </h1>

              {product.subname && (
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
                  ({product.subname})
                </p>
              )}

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant text-xs font-medium border border-outline-variant/30">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{product.portion}</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant text-xs font-medium border border-outline-variant/30">
                  <Flame className="w-4 h-4 text-primary" />
                  <span>Chapa de Ferro Fundido</span>
                </div>
              </div>
            </div>

            {/* Gastronomic Description */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/20 shadow-sm">
              <p className="text-sm sm:text-base text-on-surface leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            {/* Acompanhamentos Inclusos Section */}
            {product.accompaniments && product.accompaniments.length > 0 && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-lg text-on-surface flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-primary" />
                    <span>Acompanhamentos Inclusos</span>
                  </h2>
                  <span className="text-xs text-outline uppercase tracking-wider font-semibold">
                    Completos à Mesa
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.accompaniments.map((acc, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container border border-outline-variant/20"
                    >
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-primary mt-0.5">
                        <Utensils className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <h3 className="font-semibold text-xs sm:text-sm text-on-surface truncate">
                          {acc.name}
                        </h3>
                        <p className="text-xs text-on-surface-variant leading-snug mt-0.5">
                          {acc.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Valor & Informações de Cozinha Card */}
            <div className="p-5 rounded-2xl bg-surface-container-high border border-outline-variant/30 shadow-md flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-outline font-semibold">
                    Valor do Prato
                  </span>
                  <span className="font-display font-bold text-xl text-primary">
                    {product.priceLabel}
                  </span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface flex items-center gap-1.5 border border-outline-variant/30">
                  <Receipt className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs text-on-surface-variant font-medium">Preço do dia</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-outline">
                      Tempo de Preparo
                    </span>
                    <span className="text-xs font-semibold text-on-surface truncate">
                      {product.prepTime || '20 a 25 min'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20">
                  <ShieldAlert className="w-4 h-4 text-secondary shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-outline">
                      Alérgicos
                    </span>
                    <span className="text-xs font-medium text-on-surface truncate">
                      {product.allergens || 'Contém glúten'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sugestão de Harmonização do Bartender */}
            {product.pairing && (
              <div className="p-5 rounded-2xl bg-surface-container-low border border-primary/20 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Wine className="w-4 h-4 text-primary" />
                  <h3 className="font-display font-semibold text-base text-on-surface">
                    {product.pairing.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-surface-container border border-outline-variant/20">
                  {product.pairing.image && (
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-surface-container-lowest">
                      <Image
                        src={product.pairing.image}
                        alt="Harmonização sugerida"
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                      Recomendação da Casa
                    </span>
                    <p className="text-xs sm:text-sm text-on-surface leading-snug line-clamp-2">
                      {product.pairing.description}
                    </p>
                  </div>
                </div>

                <Link
                  href={product.pairing.categoryLink || '/categorias/drinks-coqueteis'}
                  className="inline-flex items-center justify-between text-primary hover:text-primary-fixed transition-colors text-xs font-semibold uppercase tracking-wider pt-1"
                >
                  <span>Explorar Carta de Coquetéis & Chopp</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Tile Motif Divider */}
        <OrnamentalDivider />

        {/* ========================================================= */}
        {/* RELATED PRODUCTS SECTION                                  */}
        {/* ========================================================= */}
        {relatedProducts.length > 0 && (
          <section className="w-full flex flex-col gap-6 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-primary font-bold">
                  Sugestões Parecidas
                </span>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-on-surface">
                  Outras Delícias da Casa
                </h2>
              </div>
              <Link
                href={category ? `/categorias/${category.slug}` : '/categorias'}
                className="text-xs sm:text-sm font-semibold text-primary hover:underline flex items-center gap-1"
              >
                <span>Ver mais da categoria</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} variant="grid" />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
