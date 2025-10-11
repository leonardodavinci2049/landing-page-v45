"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Zap,
  ChevronLeft,
  ChevronRight,
  Bot,
  ShoppingCart,
  Sparkles,
  Workflow,
  Server,
  Wrench,
} from "lucide-react";
import { companyInfo } from "@/lib/env";
import Link from "next/link";

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = [
    // Slide 1 - Original
    {
      icon: Code2,
      badge: `${companyInfo.name} - ${companyInfo.title}`,
      headline: "Impulsione Seu Marketing de Afiliados com Tecnologia de Ponta",
      subheadline: `Soluções Web e de Infraestrutura para Afiliados pela ${companyInfo.name}`,
      description: `Desenvolvimento de ponta para afiliados que buscam performance, escalabilidade e inovação. A ${companyInfo.name} oferece serviços completos de TI e desenvolvimento web focados no sucesso do seu negócio de afiliado.`,
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      cta1: "Solicite um Orçamento Grátis",
      cta2: "Conheça Nossos Serviços",
      gradient: "from-cyan-500 to-blue-600",
    },
    // Slide 2 - Desenvolvimento Web com IA
    {
      icon: Bot,
      badge: "Desenvolvimento Web Potencializado por IA",
      headline: "Seu Site Precisa Ser Mais que Bonito. Precisa Converter.",
      subheadline:
        "Você está perdendo clientes porque seu site não transmite credibilidade?",
      description:
        "Desenvolvemos sites e sistemas web com IA integrada que não apenas impressionam visualmente, mas convertem visitantes em clientes. Painéis administrativos inteligentes que preveem tendências e otimizam sua operação automaticamente.",
      benefits: [
        "IA para análise preditiva de vendas",
        "Sistemas que aprendem com seu negócio",
        "Performance 3x mais rápida que a concorrência",
      ],
      cta1: "Quero um Site Inteligente",
      cta2: "Ver Cases de Sucesso",
      gradient: "from-purple-500 to-pink-600",
    },
    // Slide 3 - E-commerce
    {
      icon: ShoppingCart,
      badge: "E-commerce de Alta Performance",
      headline: "Venda Mais. Venda Melhor. Venda com Inteligência Artificial.",
      subheadline: "Sua loja online está deixando dinheiro na mesa?",
      description:
        "Plataformas de e-commerce B2B e B2C com IA para precificação dinâmica, recomendações personalizadas e previsão de demanda. Aumente suas vendas em até 150% com tecnologia que trabalha por você 24/7.",
      benefits: [
        "Precificação inteligente com IA",
        "Checkout otimizado para conversão",
        "Integração total com ERP e pagamentos",
      ],
      cta1: "Criar Minha Loja Agora",
      cta2: "Calcular ROI",
      gradient: "from-emerald-500 to-teal-600",
    },
    // Slide 4 - Landing Pages
    {
      icon: Sparkles,
      badge: "Landing Pages que Convertem",
      headline: "Seus Anúncios Estão Trazendo Cliques, Mas Não Vendas?",
      subheadline: "O problema não é seu tráfego. É sua landing page.",
      description:
        "Landing pages criadas com IA (ChatGPT e Gemini) especializadas em conversão para Google Ads e Meta Ads. Copywriting neurocientífico, design persuasivo e integração com WhatsApp. Aumente sua taxa de conversão em até 85%.",
      benefits: [
        "Copywriting com IA e neurovendas",
        "Integração WhatsApp e redes sociais",
        "A/B Testing automatizado",
      ],
      cta1: "Aumentar Minhas Conversões",
      cta2: "Ver Exemplos",
      gradient: "from-orange-500 to-red-600",
    },
    // Slide 5 - Automação
    {
      icon: Workflow,
      badge: "Automação Inteligente",
      headline: "Pare de Perder Tempo com Tarefas Repetitivas.",
      subheadline:
        "Sua equipe está fazendo trabalho manual que uma IA poderia fazer?",
      description:
        "Automatize processos com N8N, bots inteligentes para Telegram e WhatsApp com respostas por IA. Economize até 40 horas por semana e elimine erros humanos. Sua equipe foca no que realmente importa: crescer o negócio.",
      benefits: [
        "Atendimento 24/7 com IA",
        "Integração entre todos seus sistemas",
        "ROI em menos de 3 meses",
      ],
      cta1: "Automatizar Meu Negócio",
      cta2: "Ver Como Funciona",
      gradient: "from-green-500 to-emerald-600",
    },
    // Slide 6 - Hospedagem e Infraestrutura
    {
      icon: Server,
      badge: "Hospedagem & Infraestrutura",
      headline: "Seu Site Está Fora do Ar? Seus Clientes Estão Indo Embora.",
      subheadline: "Cada minuto offline é dinheiro perdido.",
      description:
        "Infraestrutura robusta em VPS Linux com monitoramento por IA, backups automáticos e 99.9% de uptime garantido. WordPress gerenciado, deploy automatizado e performance otimizada. Durma tranquilo sabendo que seu negócio está sempre online.",
      benefits: [
        "99.9% de uptime garantido",
        "Monitoramento com IA 24/7",
        "Backups automáticos diários",
      ],
      cta1: "Migrar Meu Site Agora",
      cta2: "Comparar Planos",
      gradient: "from-blue-500 to-indigo-600",
    },
    // Slide 7 - Serviços Técnicos
    {
      icon: Wrench,
      badge: "Suporte Técnico Especializado",
      headline: "Problemas Técnicos Paralisando Seu Negócio?",
      subheadline: "Cada hora parado é prejuízo. Resolva agora.",
      description:
        "Suporte técnico com diagnóstico assistido por IA para identificação instantânea de problemas. Montagem, consertos, redes e software. Atendimento rápido, solução definitiva. Seu negócio não pode esperar.",
      benefits: [
        "Diagnóstico com IA em minutos",
        "Atendimento prioritário",
        "Garantia de satisfação",
      ],
      cta1: "Solicitar Atendimento",
      cta2: "Falar com Técnico",
      gradient: "from-yellow-500 to-amber-600",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Gradient Orbs */}
      <div className="animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
      <div className="animate-blob animation-delay-2000 absolute top-0 -right-4 h-72 w-72 rounded-full bg-cyan-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-pink-500 opacity-20 mix-blend-multiply blur-xl filter"></div>

      {/* Embla Carousel */}
      <div className="relative z-10 h-[calc(100vh-5rem)]" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <div key={index} className="min-w-0 flex-[0_0_100%]">
                <div className="flex h-full items-center justify-center px-4 py-20">
                  <div className="mx-auto max-w-5xl text-center">
                    {/* Badge */}
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 backdrop-blur-sm">
                      <Icon className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm text-slate-300">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-4xl leading-tight font-bold text-transparent md:text-6xl lg:text-7xl">
                      {slide.headline}
                    </h1>

                    {/* Sub-headline */}
                    <p className="mb-4 text-xl font-semibold text-cyan-400 md:text-2xl">
                      {slide.subheadline}
                    </p>

                    {/* Description */}
                    <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                      {slide.description}
                    </p>

                    {/* Benefits or Techs */}
                    {slide.benefits ? (
                      <div className="mx-auto mb-8 flex max-w-2xl flex-col gap-3">
                        {slide.benefits.map((benefit, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-3 text-left backdrop-blur-sm"
                          >
                            <Zap className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                            <span className="text-slate-200">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mb-12 flex flex-wrap justify-center gap-3">
                        {slide.techs?.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-cyan-500/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                      <Link href="/#contato">
                        <Button
                          size="lg"
                          className={`cursor-pointer bg-gradient-to-r ${slide.gradient} group px-8 py-6 text-lg text-white hover:opacity-90`}
                        >
                          {slide.cta1}
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                      <Link href="/#servicos">
                        <Button
                          size="lg"
                          variant="outline"
                          className="cursor-pointer border-slate-600 px-8 py-6 text-lg text-slate-900 hover:bg-slate-800 hover:text-white dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          {slide.cta2}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-white backdrop-blur-sm transition-colors hover:bg-slate-700/50"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-white backdrop-blur-sm transition-colors hover:bg-slate-700/50"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-600 p-2">
          <div className="h-3 w-1 rounded-full bg-slate-500"></div>
        </div>
      </div>
    </section>
  );
}
