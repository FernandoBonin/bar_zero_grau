'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Beer,
  Wine,
  Sparkles,
  Flame,
  Info,
  Clock,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { Category, Product } from '@/types/menu';
import OrnamentalDivider from '@/components/OrnamentalDivider';

interface CategoryDetailViewProps {
  category: Category;
  products: Product[];
  allCategories: Category[];
}

export default function CategoryDetailView({
  category,
  products,
  allCategories,
}: CategoryDetailViewProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Derive unique subcategory filters from products
  const filterOptions = useMemo(() => {
    const filters = new Set<string>();
    products.forEach((p) => {
      if (p.subCategoryFilter) {
        p.subCategoryFilter.split(' ').forEach((f) => filters.add(f));
      }
    });

    const labels: Record<string, string> = {
      fritos: 'Fritos & Crocantes',
      pasteis: 'Pasteizinhos',
      grelhados: 'Grelhados na Chapa',
      chopp: 'Chopp na Tulipa',
      garrafa: 'Cervejas 600ml',
      artesanal: 'Artesanais & IPA',
      autorais: 'Drinks Autorais',
      gin: 'Gin & Tônicas',
      classicos: 'Clássicos do Bar',
      saladas: 'Saladas Frescas',
      entradas: 'Entradas Especiais',
      feijoada: 'Feijoada Completa',
      executivos: 'Pratos Executivos',
      doces: 'Sobremesas',
      'frutos-do-mar': 'Frutos do Mar',
      carnes: 'Cortes de Carne',
    };

    const list = [{ key: 'all', label: 'Todos' }];
    Array.from(filters).forEach((f) => {
      if (labels[f]) {
        list.push({ key: f, label: labels[f] });
      } else {
        list.push({ key: f, label: f.charAt(0).toUpperCase() + f.slice(1) });
      }
    });

    return list;
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return products;
    return products.filter((p) =>
      p.subCategoryFilter ? p.subCategoryFilter.includes(activeFilter) : false
    );
  }, [products, activeFilter]);

  // Sibling categories for quick switching
  const siblingCategories = allCategories.filter((c) => c.slug !== category.slug);

  return (
    <div className="w-full flex flex-col bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8 w-full">
        {/* Navigation Breadcrumb / Back button */}
        <div>
          <Link
            href="/categorias"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-fixed transition-colors text-xs sm:text-sm font-semibold uppercase tracking-wider py-1 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Todas as Categorias</span>
          </Link>
        </div>

        {/* Category Header Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/30 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {category.tag || 'Especialidades do Boteco'}
              </span>
              <span className="text-outline text-xs">•</span>
              <span className="text-xs text-on-surface-variant font-medium">
                {products.length} opções disponíveis
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
              {category.name}
            </h1>

            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {category.description}
            </p>
          </div>

          <div className="relative w-full lg:w-72 h-44 sm:h-48 rounded-xl overflow-hidden shrink-0 border border-outline-variant/20 shadow-inner bg-surface-container-lowest">
            <Image
              src={category.image}
              alt={category.name}
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
          </div>
        </div>

        {/* Sub-Filters Pills (if more than 1 option) */}
        {filterOptions.length > 2 && (
          <div className="w-full overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 py-1">
            <div className="flex items-center gap-2 min-w-max">
              <div className="flex items-center gap-1.5 text-xs text-outline pr-1 uppercase tracking-wider font-semibold">
                <Filter className="w-3.5 h-3.5 text-primary" />
                <span>Filtrar:</span>
              </div>
              {filterOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setActiveFilter(opt.key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    activeFilter === opt.key
                      ? 'bg-primary text-on-primary shadow-md'
                      : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface border border-outline-variant/20'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid (1 col on mobile, 2 col on tablet, 3 col on desktop) */}
        <section className="w-full" aria-label={`Lista de pratos de ${category.name}`}>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
                >
                  {/* Dish Image */}
                  <div className="relative w-full h-48 sm:h-52 bg-surface-container-high overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      {product.badge && (
                        <div className="bg-secondary-container/90 backdrop-blur-md px-2.5 py-1 rounded-md shadow-sm border border-secondary/30">
                          <span className="text-[11px] font-bold text-on-secondary-container uppercase tracking-wider">
                            {product.badge}
                          </span>
                        </div>
                      )}

                      {product.dietaryTag && (
                        <div className="bg-surface-container-lowest/85 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold text-primary uppercase tracking-wider ml-auto">
                          {product.dietaryTag}
                        </div>
                      )}
                    </div>

                    {/* Portion Tag */}
                    <div className="absolute bottom-2 right-3 px-2 py-0.5 rounded-md bg-surface-container-lowest/85 backdrop-blur-md border border-outline-variant/30">
                      <span className="text-[11px] text-primary font-medium">
                        {product.portion}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1 gap-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/prato/${product.slug}`}
                        className="group-hover:text-primary transition-colors flex-1"
                      >
                        <h3 className="font-display font-semibold text-lg sm:text-xl text-on-surface leading-snug">
                          {product.name}
                        </h3>
                      </Link>
                    </div>

                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-2 flex-1">
                      {product.description}
                    </p>

                    <div className="pt-3 mt-auto flex items-center justify-between border-t border-surface-container-high/60">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-outline uppercase tracking-wider">
                          Valor no Salão
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-primary">
                          {product.priceLabel}
                        </span>
                      </div>

                      <Link
                        href={`/prato/${product.slug}`}
                        className="px-4 py-2 rounded-xl bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                      >
                        <span>Ver Detalhes</span>
                        <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:text-on-primary" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-12 px-4 text-center bg-surface-container rounded-2xl border border-outline-variant/30">
              <p className="text-on-surface font-display text-lg mb-2">
                Nenhum prato encontrado para este filtro
              </p>
              <button
                onClick={() => setActiveFilter('all')}
                className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider"
              >
                Ver todos os pratos
              </button>
            </div>
          )}
        </section>

        {/* Sommelier / Bartender Pairing Recommendation Banner */}
        <section className="w-full mt-4">
          <div className="bg-surface-container-low rounded-2xl p-5 sm:p-6 border border-primary/20 shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
              <Beer className="w-6 h-6" />
            </div>
            <div className="flex-1 flex flex-col gap-1 min-w-0">
              <span className="text-xs uppercase tracking-wider text-primary font-bold">
                Sugestão do Sommelier & Bartender
              </span>
              <h4 className="font-display font-semibold text-base sm:text-lg text-on-surface">
                Harmonização recomendada para {category.name}:
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Aprecie estes pratos acompanhados do nosso{' '}
                <strong className="text-on-surface font-semibold">
                  Chopp Amstel Extra Gelado a 0º grau
                </strong>{' '}
                ou a refrescante{' '}
                <strong className="text-on-surface font-semibold">
                  Caipirinha Três Limões Zero Grau
                </strong>
                .
              </p>
            </div>
            <Link
              href="/categorias/drinks-coqueteis"
              className="px-4 py-2 rounded-xl bg-surface-container-high hover:bg-primary hover:text-on-primary text-primary text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>Ver Carta de Bebidas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Sibling Categories Bar */}
        <div className="pt-6 border-t border-outline-variant/20 flex flex-col gap-3">
          <h4 className="text-xs uppercase tracking-widest text-outline font-semibold">
            Navegue por outras categorias:
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            {siblingCategories.map((sib) => (
              <Link
                key={sib.id}
                href={`/categorias/${sib.slug}`}
                className="px-3.5 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-xs text-on-surface-variant hover:text-primary transition-colors"
              >
                {sib.name}
              </Link>
            ))}
          </div>
        </div>

        <OrnamentalDivider />

        {/* Notice Disclaimer */}
        <div className="text-center text-xs text-outline pb-4 flex items-center justify-center gap-2">
          <Info className="w-4 h-4 shrink-0" />
          <p>
            Cardápio exclusivamente para consulta no salão. Solicite o atendimento ao garçom para
            pedidos presenciais.
          </p>
        </div>
      </div>
    </div>
  );
}
