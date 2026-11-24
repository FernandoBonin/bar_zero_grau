'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowRight, Utensils, Info } from 'lucide-react';
import { categories } from '@/data/categories';
import OrnamentalDivider from '@/components/OrnamentalDivider';
import { normalizeText } from '@/lib/menu-utils';

export default function CategoriasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'petiscos' | 'chapas' | 'bebidas' | 'almoco' | 'sobremesas'>('all');

  const filterChips = [
    { label: 'Todos', value: 'all' as const },
    { label: 'Petiscos', value: 'petiscos' as const },
    { label: 'Chapas', value: 'chapas' as const },
    { label: 'Chopp & Bebidas', value: 'bebidas' as const },
    { label: 'Almoço', value: 'almoco' as const },
    { label: 'Sobremesas', value: 'sobremesas' as const },
  ];

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      // Filter by chip group
      const matchesFilter =
        selectedFilter === 'all' || category.filterGroup === selectedFilter;

      // Filter by search query
      if (!matchesFilter) return false;
      if (!searchQuery.trim()) return true;

      const queryNormalized = normalizeText(searchQuery);
      const categoryHaystack = normalizeText(
        `${category.name} ${category.description} ${category.tag || ''} ${category.badge || ''} ${category.slug}`
      );

      return categoryHaystack.includes(queryNormalized);
    });
  }, [searchQuery, selectedFilter]);

  return (
    <div className="w-full flex flex-col bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8 w-full">
        {/* Editorial Section Heading */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Cardápio Oficial
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
            Cardápio Completo
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Navegue pelas nossas especialidades gastronômicas, cortes na chapa, chopp a zero grau e
            coquetelaria autoral.
          </p>
        </div>

        {/* Prominent Interactive Search Bar */}
        <div className="relative w-full max-w-2xl">
          <div className="flex items-center w-full h-12 sm:h-14 rounded-2xl bg-surface-container px-4 border border-outline-variant/30 focus-within:border-primary/60 focus-within:bg-surface-container-high transition-all shadow-md">
            <Search className="w-5 h-5 text-primary shrink-0 mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="O que você procura? (ex: picanha, chopp, bolinho, drinks)"
              className="w-full bg-transparent border-0 outline-none text-on-surface placeholder:text-outline text-sm sm:text-base font-body"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1 rounded-full text-outline hover:text-on-surface transition-colors"
                aria-label="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips (Sticky Horizontal Scroll on mobile) */}
        <div className="w-full overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 py-1">
          <div className="flex items-center gap-2 min-w-max">
            {filterChips.map((chip) => {
              const isActive = selectedFilter === chip.value;
              return (
                <button
                  key={chip.value}
                  onClick={() => setSelectedFilter(chip.value)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-md'
                      : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-outline-variant/20'
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full pt-2">
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/categorias/${category.slug}`}
                className="category-card group relative w-full rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col active:scale-[0.99]"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-surface-container-lowest">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/60 to-transparent" />

                  {/* Badges on Top */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    {category.tag ? (
                      <div className="bg-surface-container-lowest/85 backdrop-blur-md px-2.5 py-1 rounded-md shadow-sm border border-outline-variant/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[11px] font-bold text-on-surface uppercase tracking-wider">
                          {category.tag}
                        </span>
                      </div>
                    ) : (
                      <span />
                    )}

                    <div className="bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-md shadow-sm border border-primary/20">
                      <span className="text-[11px] font-semibold text-primary tracking-wide">
                        {category.badge || `${category.itemCount} opções`}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 gap-2 -mt-6 relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-on-surface group-hover:text-primary transition-colors">
                      {category.name}
                    </h2>
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shrink-0 shadow-sm">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed flex-1">
                    {category.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
                    <span>Ver itens</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-surface-container rounded-2xl border border-outline-variant/30 my-4">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-outline mb-4">
              <Utensils className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl text-on-surface font-semibold mb-2">
              Nenhuma categoria encontrada
            </h3>
            <p className="text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
              Não encontramos resultados para &quot;{searchQuery}&quot;. Tente buscar por termos como
              &quot;picanha&quot;, &quot;chopp&quot;, &quot;pastéis&quot;, &quot;caipirinha&quot; ou &quot;sobremesa&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider hover:bg-primary-fixed transition-colors"
            >
              Limpar Filtros e Busca
            </button>
          </div>
        )}

        {/* Boteco Tile Motif Ornamental Divider */}
        <OrnamentalDivider />

        {/* Discrete Footnote Note */}
        <div className="flex items-center justify-center gap-2 text-center pb-4 text-outline">
          <Info className="w-4 h-4 shrink-0" />
          <p className="text-xs">
            Cardápio sujeito à disponibilidade diária de ingredientes frescos. Consulte o garçom.
          </p>
        </div>
      </div>
    </div>
  );
}
