'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, Utensils, ArrowRight } from 'lucide-react';
import { searchProducts } from '@/lib/menu-utils';
import { Product } from '@/types/menu';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchProducts(query);
  }, [query]);

  const handleClose = useCallback(() => {
    setQuery('');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md transition-opacity"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Busca no cardápio"
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-surface-container border border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-surface-container-high bg-surface-container-low">
          <Search className="w-5 h-5 text-primary shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar pratos, chopp, porções e bebidas..."
            className="flex-1 bg-transparent border-0 outline-none text-on-surface placeholder:text-outline font-body text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors"
              aria-label="Limpar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors text-xs font-medium uppercase tracking-wider shrink-0"
          >
            Fechar [ESC]
          </button>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
          {query.trim() === '' ? (
            <div className="py-12 px-4 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-3">
                <Utensils className="w-6 h-6" />
              </div>
              <p className="font-display text-lg text-on-surface mb-1">
                O que você quer degustar hoje?
              </p>
              <p className="text-sm text-on-surface-variant max-w-sm">
                Busque por &quot;picanha&quot;, &quot;chopp&quot;, &quot;pastéis&quot;, &quot;caipirinha&quot; ou &quot;feijoada&quot;.
              </p>

              {/* Popular Search Suggestions */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="text-xs text-outline uppercase tracking-wider">Sugestões:</span>
                {['Picanha', 'Bolinho de Bacalhau', 'Chopp Amstel', 'Gin Tônica', 'Pudim'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1 rounded-full bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xs text-on-surface-variant transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-2 pb-2 text-xs text-outline">
                <span>{results.length} resultado(s) encontrado(s)</span>
                <span>Toque para ver o prato</span>
              </div>
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/prato/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container-high border border-transparent hover:border-primary/30 transition-all group"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container-lowest">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-semibold text-on-surface text-base group-hover:text-primary transition-colors truncate">
                        {product.name}
                      </h4>
                      {product.badge && (
                        <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-surface-container-high text-primary">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-on-surface-variant line-clamp-1 mt-0.5">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-outline">
                      <span>{product.portion}</span>
                      <span>•</span>
                      <span className="text-primary font-medium">{product.priceLabel}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-12 px-4 text-center flex flex-col items-center justify-center">
              <p className="font-display text-lg text-on-surface mb-1">
                Nenhum prato encontrado
              </p>
              <p className="text-sm text-on-surface-variant max-w-sm mb-4">
                Não encontramos nenhum item correspondente a &quot;{query}&quot;.
              </p>
              <button
                onClick={() => setQuery('')}
                className="px-4 py-2 rounded-lg bg-surface-container-high text-xs uppercase tracking-wider font-semibold text-primary hover:bg-surface-container-highest transition-colors"
              >
                Limpar busca
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
