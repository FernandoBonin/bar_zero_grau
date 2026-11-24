import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Category } from '@/types/menu';

interface CategoryCardProps {
  category: Category;
  priority?: boolean;
}

export default function CategoryCard({ category, priority = false }: CategoryCardProps) {
  return (
    <Link
      href={`/categorias/${category.slug}`}
      className="group relative w-full rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col active:scale-[0.99]"
    >
      {/* Image with Dark Wood & Amber Vignette Gradient */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-surface-container-lowest">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/60 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {category.tag ? (
            <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/85 backdrop-blur-md text-[11px] font-bold text-on-surface uppercase tracking-wider shadow-sm flex items-center gap-1.5 border border-outline-variant/30">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{category.tag}</span>
            </span>
          ) : <span />}

          {category.badge && (
            <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-md text-[11px] font-semibold text-primary tracking-wide shadow-sm border border-primary/20">
              {category.badge}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-2 -mt-6 relative z-10">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-on-surface group-hover:text-primary transition-colors tracking-tight">
            {category.name}
          </h3>
          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shrink-0 shadow-sm">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed flex-1">
          {category.description}
        </p>

        <div className="pt-2 flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
          <span>Ver itens do cardápio</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
