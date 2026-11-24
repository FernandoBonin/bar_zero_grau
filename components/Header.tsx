'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Search, User, Compass } from 'lucide-react';
import SearchModal from './SearchModal';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAStbBTYcTlN7pHurgQYDYh7fahGxJWfFc8wE2VUpBIiJZwi0v7rmqdKOLCSLu93Oe-478sCA9J5LDWEOVxbT3iPGhIJVlx6ZMvd-gf43hiY-8C8INI849bGXs2WK4X_421KJEbw9fayikfdrn7UZp6Dun2Jx5MecIx-TM8zvYhqJf8UAxk2awFnkGf9L0dQ852zhr5d1nFgowfQq0XGk0QbB6jXjDlrMXi-9vBbnuJ';

export default function Header() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Cardápio', href: '/categorias' },
    { label: 'Destaques', href: '/destaques' },
    { label: 'O Bar', href: '/sobre' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand & Status Zone */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 shrink-0">
              <Image
                src={LOGO_URL}
                alt="Logo Bar Zero Grau Tatuapé"
                fill
                className="object-contain"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg sm:text-xl text-primary tracking-tight leading-none group-hover:text-primary-fixed transition-colors">
                  Zero Grau
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-surface-container-high border border-primary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold text-primary-fixed uppercase tracking-wider">
                    Aberto
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-on-surface-variant leading-tight">
                <span className="uppercase text-[11px] tracking-wider text-outline font-medium">
                  Tatuapé • SP
                </span>
                <span className="text-outline text-[9px]">•</span>
                <span className="text-[11px] text-primary/90 font-medium">Cardápio Digital</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 whitespace-nowrap transition-colors tracking-wide ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions Zone: Search & Atmosphere */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop Quick Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-xs text-on-surface-variant transition-all hover:border-primary/40"
              aria-label="Buscar no cardápio"
            >
              <Search className="w-3.5 h-3.5 text-primary" />
              <span className="text-outline">Buscar no cardápio...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-surface-container-high text-[10px] font-mono text-outline border border-outline-variant/30">
                /
              </kbd>
            </button>

            {/* Mobile Search Icon Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="sm:hidden w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors"
              aria-label="Buscar no cardápio"
            >
              <Search className="w-5 h-5 text-on-surface" />
            </button>

            {/* Desktop CTA: Explorar Cardápio */}
            <Link
              href="/categorias"
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider hover:bg-primary-fixed transition-colors shadow-sm"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Ver Cardápio</span>
            </Link>

            {/* Decorative Profile Icon from Stitch design */}
            <div
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm"
              title="Bar Zero Grau Tatuapé"
              aria-hidden="true"
            >
              <User className="w-4 h-4" />
            </div>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
