import React from 'react';
import Link from 'next/link';
import { Utensils, ArrowLeft, Compass } from 'lucide-react';
import OrnamentalDivider from '@/components/OrnamentalDivider';

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center bg-surface">
      <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-primary mb-6 shadow-xl border border-primary/20">
        <Utensils className="w-10 h-10" />
      </div>

      <span className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
        Página ou Prato Não Encontrado
      </span>

      <h1 className="font-display font-bold text-3xl sm:text-4xl text-on-surface mb-3 tracking-tight">
        Parece que essa mesa não existe!
      </h1>

      <p className="text-sm sm:text-base text-on-surface-variant max-w-md mb-8 leading-relaxed">
        O prato ou a página que você tentou acessar não foi encontrada em nosso cardápio digital. Que
        tal explorar nossas porções e carnes na chapa?
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/categorias"
          className="px-6 py-3.5 rounded-xl bg-primary text-on-primary font-bold text-xs uppercase tracking-wider hover:bg-primary-fixed transition-colors shadow-lg flex items-center gap-2"
        >
          <Compass className="w-4 h-4" />
          <span>Explorar Categorias</span>
        </Link>

        <Link
          href="/"
          className="px-6 py-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs uppercase tracking-wider border border-outline-variant/30 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </Link>
      </div>

      <div className="max-w-xs w-full mt-12">
        <OrnamentalDivider subtle />
      </div>
    </div>
  );
}
