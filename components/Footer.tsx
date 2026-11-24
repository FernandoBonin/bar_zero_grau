import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Phone, Instagram, Info, ChevronRight } from 'lucide-react';
import OrnamentalDivider from './OrnamentalDivider';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAStbBTYcTlN7pHurgQYDYh7fahGxJWfFc8wE2VUpBIiJZwi0v7rmqdKOLCSLu93Oe-478sCA9J5LDWEOVxbT3iPGhIJVlx6ZMvd-gf43hiY-8C8INI849bGXs2WK4X_421KJEbw9fayikfdrn7UZp6Dun2Jx5MecIx-TM8zvYhqJf8UAxk2awFnkGf9L0dQ852zhr5d1nFgowfQq0XGk0QbB6jXjDlrMXi-9vBbnuJ';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20 pt-12 pb-16 md:pb-12 text-on-surface-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8">
          {/* Col 1: Identity & Tradition */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 shrink-0">
                <Image
                  src={LOGO_URL}
                  alt="Bar Zero Grau Tatuapé"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-xl text-primary">Zero Grau</span>
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Tradição de boteco chique, chopp trincando na serpentina e o melhor da gastronomia
              paulistana no coração do Tatuapé.
            </p>
            <div className="flex items-center gap-2 text-xs text-primary font-medium">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Desde 1998 servindo momentos inesquecíveis.</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-semibold text-base text-on-surface uppercase tracking-wider">
              Cardápio Completo
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  href="/categorias/porcoes-petiscos"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  <span>Porções & Petiscos</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/chapas-carnes"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  <span>Chapas & Carnes no Rechaud</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/chopp-cervejas"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  <span>Chopp a Zero Grau & Cervejas</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/drinks-coqueteis"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  <span>Drinks & Coquetelaria Autoral</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/almoco-feijoada"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  <span>Feijoada Completa (Sábados)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Schedule */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-semibold text-base text-on-surface uppercase tracking-wider">
              Horários de Atendimento
            </h3>
            <div className="flex items-start gap-3 text-sm">
              <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-medium text-on-surface">Terça a Sexta-feira</span>
                <span className="text-xs text-on-surface-variant">
                  17h00 até o último cliente
                </span>
                <span className="font-medium text-on-surface mt-2">Sábados</span>
                <span className="text-xs text-on-surface-variant">
                  12h00 às 02h00 (Feijoada Tradicional)
                </span>
                <span className="font-medium text-on-surface mt-2">Domingos</span>
                <span className="text-xs text-on-surface-variant">
                  12h00 às 23h00 (Almoço & Happy Hour)
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Address & Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-semibold text-base text-on-surface uppercase tracking-wider">
              Endereço & Contato
            </h3>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-on-surface font-medium">Bar Zero Grau Tatuapé</span>
                <span className="text-xs text-on-surface-variant">
                  Rua Coelho Lisboa, 480 - Tatuapé
                </span>
                <span className="text-xs text-on-surface-variant">São Paulo - SP, 03323-040</span>
                <a
                  href="https://maps.google.com/?q=Bar+Zero+Grau+Tatuape"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline mt-1 inline-flex items-center gap-1"
                >
                  <span>Abrir no Google Maps</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm pt-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs text-on-surface">(11) 2097-9000</span>
            </div>

            <div className="flex items-center gap-3 text-sm pt-1">
              <Instagram className="w-4 h-4 text-primary shrink-0" />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-on-surface-variant hover:text-primary transition-colors"
              >
                @barzerograutatuape
              </a>
            </div>
          </div>
        </div>

        <OrnamentalDivider subtle />

        {/* Consultative Disclaimer Notice */}
        <div className="py-4 px-4 rounded-xl bg-surface-container/60 border border-outline-variant/20 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left my-4">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
            <Info className="w-4 h-4" />
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed flex-1">
            <strong className="text-on-surface">Cardápio Digital Consultivo:</strong> Este ambiente
            digital foi concebido exclusivamente para apresentação e consulta de pratos e bebidas
            no salão do Bar Zero Grau. Não realizamos pedidos online, delivery ou pagamentos através
            deste site. Solicite atendimento presencial à nossa equipe de garçons.
          </p>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-outline text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} Bar Zero Grau — Tatuapé • Todos os direitos reservados.
          </span>
          <span className="uppercase tracking-widest text-[10px]">
            Tradição, Chopp & Boteco Paulistano
          </span>
        </div>
      </div>
    </footer>
  );
}
