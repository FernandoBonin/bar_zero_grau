import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Star, Flame, Compass, ArrowRight, Utensils } from 'lucide-react';
import { getFeaturedProducts } from '@/lib/menu-utils';
import ProductCard from '@/components/ProductCard';
import OrnamentalDivider from '@/components/OrnamentalDivider';

export const metadata: Metadata = {
  title: 'Destaques do Cardápio | Bar Zero Grau Tatuapé',
  description:
    'Os pratos e bebidas mais pedidos e elogiados do Bar Zero Grau Tatuapé. Picanha no rechaud, bolinhos artesanais e chopp super gelado.',
};

export default function DestaquesPage() {
  const featured = getFeaturedProducts();

  return (
    <div className="w-full flex flex-col bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-8 w-full">
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Seleção da Casa
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
            Destaques do Zero Grau
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            As criações gastronômicas mais aclamadas pelos nossos clientes. Receitas que combinam a
            tradição de boteco com o rigor de corte, ponto e temperatura.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              variant={idx === 0 ? 'featured' : 'grid'}
              priority={idx < 2}
            />
          ))}
        </div>

        <OrnamentalDivider />

        {/* Footer CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <h3 className="font-display font-bold text-lg sm:text-xl text-on-surface">
              Quer explorar outras opções?
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              Temos um cardápio completo com mais de 8 categorias para você descobrir.
            </p>
          </div>
          <Link
            href="/categorias"
            className="px-5 py-3 rounded-xl bg-primary text-on-primary font-bold text-xs uppercase tracking-wider hover:bg-primary-fixed transition-colors flex items-center gap-2 shrink-0 shadow-md"
          >
            <Compass className="w-4 h-4" />
            <span>Ver Cardápio Completo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
