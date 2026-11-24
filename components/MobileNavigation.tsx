'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Utensils, BookOpen, Star, Store } from 'lucide-react';

export default function MobileNavigation() {
  const pathname = usePathname();

  const items = [
    {
      label: 'Início',
      href: '/',
      icon: Utensils,
      exact: true,
    },
    {
      label: 'Cardápio',
      href: '/categorias',
      icon: BookOpen,
      exact: false,
    },
    {
      label: 'Destaques',
      href: '/destaques',
      icon: Star,
      exact: false,
    },
    {
      label: 'O Bar',
      href: '/sobre',
      icon: Store,
      exact: false,
    },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 pb-safe bg-surface-container-lowest/95 backdrop-blur-xl border-t border-outline-variant/20 shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"
      aria-label="Navegação móvel inferior"
    >
      <div className="flex justify-around items-center h-16 px-2">
        {items.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 min-w-[64px] h-12 transition-colors relative ${
                isActive
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Icon className="w-5 h-5 transition-transform" />
              <span className="text-[11px] font-medium tracking-normal leading-none">
                {item.label}
              </span>
              {isActive && (
                <span className="absolute -top-1 w-6 h-[2px] bg-primary rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
