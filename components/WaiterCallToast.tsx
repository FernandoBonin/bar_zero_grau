'use client';

import React, { useState } from 'react';
import { Heart, Share2, BellRing, Check, Copy } from 'lucide-react';

interface DishActionsProps {
  dishName: string;
  categoryName: string;
}

export default function DishActions({ dishName, categoryName }: DishActionsProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleToggleFavorite = () => {
    const nextState = !isFavorite;
    setIsFavorite(nextState);
    if (nextState) {
      showToast(`${dishName} salvo em seus itens favoritados!`);
    } else {
      showToast('Prato removido dos favoritos.');
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${dishName} — Bar Zero Grau Tatuapé`,
      text: `Dá uma olhada nessa delícia do Bar Zero Grau Tatuapé: ${dishName}!`,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or aborted
      }
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link do prato copiado para a área de transferência!');
      } catch {
        showToast('Compartilhe o link deste cardápio com amigos!');
      }
    }
  };

  const handleCallWaiter = () => {
    showToast('Aviso enviado com sucesso! O garçom virá até sua mesa.');
  };

  return (
    <>
      {/* Top Action Icons (Favorite & Share) */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleToggleFavorite}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isFavorite
              ? 'bg-secondary-container text-secondary-fixed shadow-md'
              : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary'
          }`}
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          title={isFavorite ? 'Remover dos favoritos' : 'Favoritar prato'}
        >
          <Heart
            className={`w-5 h-5 ${isFavorite ? 'fill-current text-secondary' : ''}`}
          />
        </button>

        <button
          onClick={handleShare}
          className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary flex items-center justify-center transition-all"
          aria-label="Compartilhar prato"
          title="Compartilhar prato"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* Primary In-Table Action Button */}
      <div className="w-full flex flex-col gap-3 pt-4">
        <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-center flex items-center justify-center gap-2 text-on-surface-variant text-xs">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span>Cardápio exclusivo para consulta presencial no boteco.</span>
        </div>

        <button
          onClick={handleCallWaiter}
          className="w-full py-4 px-6 rounded-xl bg-primary text-on-primary font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:bg-primary-fixed active:scale-[0.99] transition-all"
        >
          <BellRing className="w-5 h-5" />
          <span>Avisar Atendimento na Mesa</span>
        </button>
      </div>

      {/* Floating Feedback Toast */}
      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-20 md:bottom-8 left-4 right-4 md:left-auto md:right-8 z-50 flex justify-center pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="px-5 py-3 rounded-full bg-surface-bright text-on-surface border border-primary/30 shadow-[0_12px_30px_rgba(0,0,0,0.8)] flex items-center gap-2.5 text-xs sm:text-sm font-medium backdrop-blur-md">
            <Check className="w-4 h-4 text-primary shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </>
  );
}
