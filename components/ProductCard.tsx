import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Flame, Users, Sparkles, ChefHat } from 'lucide-react';
import { Product } from '@/types/menu';

interface ProductCardProps {
  product: Product;
  variant?: 'grid' | 'compact' | 'featured';
  priority?: boolean;
}

export default function ProductCard({
  product,
  variant = 'grid',
  priority = false,
}: ProductCardProps) {
  // ==========================================
  // COMPACT VARIANT (Horizontal boteco style)
  // ==========================================
  if (variant === 'compact') {
    return (
      <article className="flex rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/20 hover:border-primary/40 shadow-md p-3.5 sm:p-4 gap-3.5 sm:gap-4 items-center transition-all duration-200 group">
        <div className="flex-1 flex flex-col min-w-0 py-0.5">
          <div className="flex items-center gap-2 mb-1">
            {product.badge && (
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-surface-container-high text-primary border border-outline-variant/30">
                {product.badge}
              </span>
            )}
            {product.dietaryTag && (
              <span className="text-[11px] text-outline font-medium">
                {product.dietaryTag}
              </span>
            )}
          </div>

          <Link href={`/prato/${product.slug}`} className="group-hover:text-primary transition-colors">
            <h4 className="font-display font-semibold text-base sm:text-lg text-on-surface truncate">
              {product.name}
            </h4>
          </Link>

          <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-2 mt-1 leading-snug">
            {product.description}
          </p>

          <div className="mt-3 flex items-center justify-between gap-2 pt-1">
            <div className="flex flex-col">
              <span className="text-[10px] text-outline uppercase tracking-wider">Valor no salão</span>
              <span className="text-xs sm:text-sm font-semibold text-primary">
                {product.priceLabel}
              </span>
            </div>

            <Link
              href={`/prato/${product.slug}`}
              className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Detalhes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Thumbnail on Right */}
        <Link
          href={`/prato/${product.slug}`}
          className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-surface-container-lowest border border-outline-variant/20 group-hover:scale-102 transition-transform"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="120px"
            priority={priority}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </Link>
      </article>
    );
  }

  // ==========================================
  // FEATURED HERO CARD (Large showcase card)
  // ==========================================
  if (variant === 'featured') {
    return (
      <article className="flex flex-col rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/20 hover:border-primary/40 shadow-xl group transition-all">
        <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-surface-container-lowest">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/30 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/95 text-secondary-fixed text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md border border-secondary/30">
            <Flame className="w-3.5 h-3.5 text-secondary" />
            <span>{product.badge || 'Destaque da Casa'}</span>
          </div>

          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/30">
            <span className="text-xs text-primary font-medium flex items-center gap-1.5">
              <Users className="w-3 h-3 text-primary" />
              <span>{product.portion}</span>
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6 flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-3">
            <div>
              <Link href={`/prato/${product.slug}`} className="group-hover:text-primary transition-colors">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-on-surface tracking-tight">
                  {product.name}
                </h3>
              </Link>
              {product.subname && (
                <p className="text-xs uppercase tracking-wider text-primary mt-0.5 font-medium">
                  {product.subname}
                </p>
              )}
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-primary shrink-0 bg-surface-container-high px-2.5 py-1 rounded-md border border-primary/20">
              {product.priceLabel}
            </span>
          </div>

          <p className="text-sm text-on-surface-variant leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-surface-container-high">
            <div className="flex items-center gap-3 text-xs text-outline">
              <span className="flex items-center gap-1">
                <ChefHat className="w-3.5 h-3.5 text-primary" />
                <span>Preparo: {product.prepTime || 'Na hora'}</span>
              </span>
              <span>•</span>
              <span>Acompanha guarnições</span>
            </div>

            <Link
              href={`/prato/${product.slug}`}
              className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider hover:bg-primary-fixed transition-colors flex items-center gap-1.5 shadow-md"
            >
              <span>Ver Detalhes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // ==========================================
  // STANDARD GRID CARD
  // ==========================================
  return (
    <article className="flex flex-col rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/20 hover:border-primary/40 shadow-lg group transition-all duration-300 hover:shadow-2xl">
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-surface-container-lowest">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent" />

        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-md bg-secondary-container/90 text-on-secondary-container text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        <div className="absolute bottom-2 right-3 px-2 py-0.5 rounded-md bg-surface-container-lowest/85 backdrop-blur-md border border-outline-variant/30">
          <span className="text-[11px] text-primary font-medium">{product.portion}</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1 gap-2.5">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/prato/${product.slug}`} className="group-hover:text-primary transition-colors flex-1">
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
            <span className="text-[10px] text-outline uppercase tracking-wider">Valor</span>
            <span className="text-xs sm:text-sm font-semibold text-primary">
              {product.priceLabel}
            </span>
          </div>

          <Link
            href={`/prato/${product.slug}`}
            className="px-3.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span>Ver Detalhes</span>
            <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:text-on-primary" />
          </Link>
        </div>
      </div>
    </article>
  );
}
