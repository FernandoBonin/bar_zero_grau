import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Beer,
  UtensilsCrossed,
  Sparkles,
  Flame,
  Star,
  Clock,
  Compass,
  ArrowRight,
  Wine,
  Wind,
  Users,
  Music,
  Wifi,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import OrnamentalDivider from '@/components/OrnamentalDivider';
import { getAllCategories } from '@/lib/menu-utils';
import { products } from '@/data/products';

export default function HomePage() {
  const categories = getAllCategories();

  // Selected highlights from the menu
  const picanha = products.find((p) => p.slug === 'picanha-no-rechaud') || products[0];
  const bolinho = products.find((p) => p.slug === 'bolinho-de-bacalhau-tradicional') || products[1];
  const pasteis = products.find((p) => p.slug === 'pasteizinhos-mistos-da-casa') || products[2];
  const caipirinha = products.find((p) => p.slug === 'caipirinha-zero-grau-tres-limoes') || products[3];
  const chopp = products.find((p) => p.slug === 'chopp-amstel-zero-grau') || products[4];

  return (
    <div className="w-full flex flex-col bg-surface">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Desktop 2-column, Mobile Atmospheric)    */}
      {/* ========================================================= */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (Text & CTAs) */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              {/* Golden Tradition Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high/90 border border-primary/30 backdrop-blur-md shadow-md mb-4 sm:mb-6">
                <Beer className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Tradição & Chopp Gelado no Tatuapé
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-on-surface font-bold leading-[1.15] tracking-tight mb-4 text-balance">
                O sabor do <span className="italic font-normal text-primary">encontro.</span>
              </h1>

              {/* Lead Prose */}
              <p className="text-base sm:text-lg text-on-surface-variant max-w-xl mb-6 sm:mb-8 leading-relaxed">
                Chopp trincando na serpentina, boas conversas com quem você gosta e o autêntico
                espírito dos tradicionais botecos paulistanos. Carnes nobres servidas estalando no
                rechaud e petiscos artesanais.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <Link
                  href="/categorias"
                  className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-primary text-on-primary font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-primary-fixed active:scale-95 transition-all text-center"
                >
                  <Compass className="w-4 h-4" />
                  <span>Explorar Cardápio</span>
                </Link>

                <Link
                  href="/destaques"
                  className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold text-sm uppercase tracking-wider border border-outline-variant/30 active:scale-95 transition-all text-center"
                >
                  <Star className="w-4 h-4 text-primary" />
                  <span>Ver Destaques</span>
                </Link>
              </div>

              {/* Quick Trust Attributes Strip */}
              <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-surface-container-high/80 w-full max-w-lg">
                <div className="flex flex-col">
                  <span className="font-display text-xl sm:text-2xl font-bold text-primary">
                    0º C
                  </span>
                  <span className="text-xs text-on-surface-variant">Chopp Trincando</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl sm:text-2xl font-bold text-primary">
                    100%
                  </span>
                  <span className="text-xs text-on-surface-variant">Cortes Nobres</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl sm:text-2xl font-bold text-primary">
                    +25 Anos
                  </span>
                  <span className="text-xs text-on-surface-variant">No Tatuapé</span>
                </div>
              </div>
            </div>

            {/* Right Media (Desktop Hero Visual Showcase) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-square rounded-2xl overflow-hidden bg-surface-container border border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                <Image
                  src={picanha.image}
                  alt="Picanha no Rechaud e Chopp do Bar Zero Grau"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Dark wood and amber vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/40 via-transparent to-surface-container-lowest/30" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/30 flex items-center justify-between gap-3 shadow-xl">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                      Especialidade da Casa
                    </span>
                    <h3 className="font-display font-bold text-base text-on-surface truncate">
                      Picanha no Rechaud de Ferro
                    </h3>
                    <span className="text-xs text-on-surface-variant">
                      Serve 2 a 3 pessoas • Chapa quente à mesa
                    </span>
                  </div>
                  <Link
                    href={`/prato/${picanha.slug}`}
                    className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 hover:bg-primary-fixed transition-colors shadow-md"
                    aria-label="Ver detalhes da picanha no rechaud"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CATEGORIAS EM EVIDÊNCIA                                 */}
      {/* ========================================================= */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <h2 className="font-display text-xl sm:text-2xl text-on-surface font-bold tracking-tight">
              Categorias em Evidência
            </h2>
          </div>
          <Link
            href="/categorias"
            className="text-xs sm:text-sm font-semibold text-primary hover:text-primary-fixed flex items-center gap-1 group transition-colors"
          >
            <span>Ver todas as {categories.length} categorias</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid (2 col mobile, 4 col desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.slice(0, 4).map((category) => (
            <Link
              key={category.id}
              href={`/categorias/${category.slug}`}
              className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/20 hover:border-primary/40 transition-all group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-display font-semibold text-sm sm:text-base text-on-surface truncate group-hover:text-primary transition-colors">
                  {category.name}
                </span>
                <span className="text-[11px] sm:text-xs text-on-surface-variant truncate">
                  {category.tag || `${category.itemCount} opções`}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. DESTAQUES DO ZERO GRAU (Featured Section)               */}
      {/* ========================================================= */}
      <section className="w-full bg-surface-container-lowest/60 border-y border-outline-variant/20 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mb-8 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">
                Seleção Especial do Bar
              </span>
              <span className="text-outline text-xs">•</span>
              <span className="text-xs text-on-surface-variant flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-secondary" />
                Favoritos da Casa
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
              Destaques do Zero Grau
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
              Pratos e bebidas preparados com rigor para saborear no balcão ou na mesa com amigos.
            </p>
          </div>

          {/* Highlights Grid: 1 Hero Card on Desktop Left, 2 Compact Cards on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Main Featured Dish (Picanha no Rechaud) */}
            <div className="lg:col-span-7">
              <ProductCard product={picanha} variant="featured" priority />
            </div>

            {/* Side Highlights (Bolinho, Pasteis, Caipirinha) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <ProductCard product={bolinho} variant="compact" />
              <ProductCard product={pasteis} variant="compact" />
              <ProductCard product={caipirinha} variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Tile Motif Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <OrnamentalDivider />
      </div>

      {/* ========================================================= */}
      {/* 4. A ATMOSFERA DO ZERO GRAU (Venue Profile & Hospitality) */}
      {/* ========================================================= */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/20 shadow-2xl flex flex-col lg:flex-row">
          {/* Venue Image */}
          <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto min-h-[320px] overflow-hidden bg-surface-container-lowest">
            <Image
              src={chopp.image}
              alt="Salão acolhedor do Bar Zero Grau Tatuapé"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-surface-container via-surface-container/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-col z-10">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">
                Tatuapé • São Paulo
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-on-surface">
                A Atmosfera do Zero Grau
              </h3>
            </div>
          </div>

          {/* Venue Info & Attributes */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Desde o chopp servido na temperatura exata até as porções generosas feitas para
                compartilhar com quem você gosta. Um ambiente vivo, amadeirado e acolhedor pensado
                especialmente para tornar cada momento inesquecível.
              </p>

              {/* Convenience Feature Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <Wind className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-on-surface">
                    Ar Condicionado
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <Users className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-on-surface">
                    Área para Grupos
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <Music className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-on-surface">
                    Música Ambiente
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <Wifi className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-on-surface">
                    Wi-Fi Gratuito
                  </span>
                </div>
              </div>
            </div>

            {/* Schedule Snippet with Direct Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-surface-container-high/80 border border-outline-variant/30 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-semibold text-on-surface">
                    Terça a Domingo
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    A partir das 17h até o último cliente
                  </span>
                </div>
              </div>
              <Link
                href="/sobre"
                className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 shrink-0 self-end sm:self-auto"
              >
                <span>Mais detalhes</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. EXPLORE ALL CATEGORIES CTA BANNER                      */}
      {/* ========================================================= */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-surface-container-high to-surface-container border border-primary/20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">
              Cardápio Completo
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-bold">
              Pronto para escolher o que pedir ao garçom?
            </h3>
            <p className="text-sm text-on-surface-variant">
              Veja todas as opções de porções, carnes na chapa, chopp a zero grau e coquetelaria
              autoral com fotos e ingredientes.
            </p>
          </div>

          <Link
            href="/categorias"
            className="px-6 py-3.5 rounded-xl bg-primary text-on-primary font-bold text-sm uppercase tracking-wider hover:bg-primary-fixed shadow-lg transition-all shrink-0 active:scale-95 flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Ver Todas as Categorias</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
