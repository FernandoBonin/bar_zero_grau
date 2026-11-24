import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Beer,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Compass,
  ArrowRight,
  Wind,
  Users,
  Music,
  Wifi,
  Tv,
  CheckCircle2,
  Flame,
} from 'lucide-react';
import OrnamentalDivider from '@/components/OrnamentalDivider';

export const metadata: Metadata = {
  title: 'O Bar — Bar Zero Grau Tatuapé | Atmosfera & Tradição',
  description:
    'Conheça a história, ambiente e tradição do Bar Zero Grau no Tatuapé. Chopp trincando, ambiente acolhedor e horários de funcionamento.',
};

export default function SobrePage() {
  return (
    <div className="w-full flex flex-col bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-10 w-full">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Nossa Casa no Tatuapé
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
            A Atmosfera do Bar Zero Grau
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Um autêntico boteco gastronômico paulistano no coração da Zona Leste. Onde o chopp
            sai da serpentina na temperatura ideal e os pratos chegam estalando na mesa.
          </p>
        </div>

        {/* Hero Atmosphere Presentation */}
        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/30 shadow-2xl">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfmhYTCpx5-GBCTyi0iLWiMI_ptGmnZDXViq9-6DM29T_MCkIPQVX12Eaz-wCbJxsPbEifBvabyPwrJ87sAMBQTv_cuKuFz2h1zWQREr54l-mVk6txbiEvZ_QikjESiEhSHj5-k-JuBmCnSy1FzP-_wYOzTQnwnHHlXyp3oCS3Fv2bUaTOxBt7gux7Nsh5chZsrelmdAZEDmWHzelplXTKFwBaiBIcLwpxMd_31n5i"
            alt="Ambiente acolhedor do Bar Zero Grau Tatuapé"
            fill
            priority
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Boteco Chique & Tradição
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-on-surface">
                Balcão de Imbuia, Serpentina Calibrada e Hospitalidade
              </h2>
            </div>
            <Link
              href="/categorias"
              className="px-5 py-3 rounded-xl bg-primary text-on-primary font-bold text-xs uppercase tracking-wider hover:bg-primary-fixed transition-colors shadow-lg self-start sm:self-auto shrink-0"
            >
              Consultar Cardápio
            </Link>
          </div>
        </div>

        {/* Three Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-1">
              <Beer className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-on-surface">
              Chopp a Zero Grau de Verdade
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Nosso sistema de refrigeração mantém o chopp a exatamente zero grau até o momento de
              encher o caneco congelado, com colarinho cremoso e denso para selar o gás e aroma.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-1">
              <Flame className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display font-bold text-lg text-on-surface">
              Chapa Quente & Rechaud de Ferro
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Cortes nobres como nossa Picanha e Contrafilé servidos em chapas de ferro fundido com
              rechaud à mesa, mantendo o ponto ideal da carne fumegante durante toda a noite.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-1">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-on-surface">
              Feito para Compartilhar
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Porções generosas pensadas para famílias, amigos de trabalho no happy hour e casais.
              Ambiente descontraído e atendimento amigável que faz você se sentir em casa.
            </p>
          </div>
        </div>

        {/* Comodidades do Salão */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">
              Estrutura & Conforto
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-on-surface">
              Comodidades para o Seu Conforto
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container border border-outline-variant/20">
              <Wind className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-on-surface">
                Ar Condicionado
              </span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container border border-outline-variant/20">
              <Users className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-on-surface">
                Mesas p/ Grupos
              </span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container border border-outline-variant/20">
              <Music className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-on-surface">
                Música Ambiente
              </span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container border border-outline-variant/20">
              <Wifi className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-on-surface">
                Wi-Fi Gratuito
              </span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container border border-outline-variant/20">
              <Tv className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-on-surface">
                Transmissão de Jogos
              </span>
            </div>
          </div>
        </div>

        {/* Location & Hours Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Horários */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="font-display font-bold text-xl text-on-surface">
                  Horários de Funcionamento
                </h3>
              </div>

              <div className="flex flex-col gap-3 divide-y divide-surface-container-high text-sm">
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-on-surface font-semibold">Segunda-feira</span>
                  <span className="text-outline">Fechado para manutenção</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-on-surface font-semibold">Terça a Sexta</span>
                  <span className="text-primary font-medium">17h00 às 02h00</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <div>
                    <span className="text-on-surface font-semibold">Sábado</span>
                    <span className="block text-xs text-outline">Feijoada Tradicional</span>
                  </div>
                  <span className="text-primary font-medium">12h00 às 02h00</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-on-surface font-semibold">Domingo</span>
                  <span className="text-primary font-medium">12h00 às 23h00</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-outline italic">
              * A cozinha encerra os pedidos 45 minutos antes do fechamento do salão.
            </p>
          </div>

          {/* Endereço & Mapa */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="font-display font-bold text-xl text-on-surface">
                  Localização no Tatuapé
                </h3>
              </div>

              <div className="flex flex-col gap-2 text-sm text-on-surface-variant">
                <p className="text-on-surface font-semibold text-base">Bar Zero Grau Tatuapé</p>
                <p>Rua Coelho Lisboa, 480 - Tatuapé</p>
                <p>São Paulo - SP, CEP 03323-040</p>
                <p className="text-xs text-outline mt-1">
                  Próximo à Praça Silvio Romero e estação Tatuapé do Metrô.
                </p>
              </div>

              <div className="flex items-center gap-3 text-sm pt-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-on-surface font-semibold">(11) 2097-9000</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Bar+Zero+Grau+Tatuape"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-primary text-on-primary font-bold text-xs uppercase tracking-wider text-center hover:bg-primary-fixed transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Como Chegar via Google Maps</span>
            </a>
          </div>
        </div>

        <OrnamentalDivider />
      </div>
    </div>
  );
}
