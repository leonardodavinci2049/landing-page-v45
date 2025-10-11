import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  const plans = [
    {
      name: "Parceria Mensal para Afiliados",
      icon: Sparkles,
      description:
        "Suporte contínuo para sua estrutura de marketing de afiliados, com desenvolvimento, otimização e manutenção.",
      highlight: false,
      features: [
        "Desenvolvimento de ferramentas sob demanda",
        "Assessoria estratégica para campanhas",
        "Implementação de automações",
        "Manutenção de servidores e landing pages",
        "Suporte técnico prioritário",
        "Otimizações e melhorias contínuas",
        "Relatórios de performance mensais",
      ],
      cta: "Tornar-se Parceiro Mensal",
      color: "from-slate-600 to-slate-700",
    },
    {
      name: "Consultoria Estratégica por Hora",
      icon: Clock,
      description: "Flexibilidade para otimizar suas campanhas e ferramentas de afiliado em demandas pontuais.",
      highlight: true,
      badge: "Mais Flexível",
      features: [
        "Consultoria especializada em marketing de afiliados",
        "Otimização de landing pages e funis",
        "Suporte técnico para ferramentas de afiliado",
        "Análise de performance e métricas",
        "Prioridade no atendimento",
        "Relatórios detalhados por hora",
        "Faturamento flexível",
      ],
      cta: "Agendar Consultoria",
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "Solução Customizada para Afiliados",
      icon: Zap,
      description: "Soluções sob medida para as necessidades mais complexas do seu negócio de afiliado.",
      highlight: false,
      features: [
        "Análise aprofundada da sua operação de afiliado",
        "Proposta customizada de ferramentas e infraestrutura",
        "Desenvolvimento de sistemas e hospedagem otimizada",
        "Automação avançada de marketing",
        "Suporte contínuo e dedicado",
        "SLA personalizado para alta disponibilidade",
        "Escalabilidade garantida para crescimento",
      ],
      cta: "Falar com Especialista em Afiliados",
      color: "from-purple-600 to-pink-600",
    },
  ];

  const addons = [
    "Hospedagem e Infraestrutura Otimizada para Afiliados (VPS)",
    "Manutenção e Suporte Mensal para Ferramentas de Afiliados",
    "Implementação de Analytics Avançado para Campanhas",
    "Otimização de Performance de Landing Pages",
    "Integração com APIs de Marketplaces de Afiliados",
    "Treinamento em Ferramentas de Marketing Digital",
  ];

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950" id="precos">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-100">
              Planos Flexíveis para o Seu Negócio de Marketing de Afiliados
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-700 dark:text-slate-400">
              Entendemos que cada negócio de marketing de afiliados tem um orçamento e necessidades específicas. Oferecemos modelos de contratação flexíveis para se adequar à sua demanda e impulsionar seus resultados.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>

          {/* Pricing Cards */}
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={plan.name}
                  className={`relative flex flex-col overflow-hidden ${
                    plan.highlight
                      ? "scale-105 border-cyan-500 shadow-2xl ring-2 shadow-cyan-500/20 ring-cyan-500/10 dark:shadow-cyan-400/20"
                      : "border-slate-200 hover:border-cyan-500 dark:border-slate-700 dark:hover:border-cyan-400"
                  } transition-all duration-300`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 right-0">
                      <Badge className="rounded-none rounded-bl-lg border-0 bg-gradient-to-r from-cyan-500 to-blue-600">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-8 text-center">
                    <div
                      className={`h-16 w-16 rounded-xl bg-gradient-to-br ${plan.color} mx-auto mb-4 flex items-center justify-center shadow-lg shadow-slate-400/30 dark:shadow-slate-950/50`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="mb-2 text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col">
                    {/* Features */}
                    <ul className="mb-8 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500 dark:text-cyan-400" />
                          <span className="text-sm text-slate-800 dark:text-slate-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link href="/#contato" className="mt-auto">
                      <Button
                        className={`w-full cursor-pointer px-8 py-6 text-lg ${
                          plan.highlight
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                            : "bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                        size="lg"
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Add-ons */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80 dark:shadow-slate-950/50">
            <h3 className="mb-6 text-center text-2xl font-bold text-slate-900 dark:text-slate-100">
              Serviços Adicionais Disponíveis
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {addons.map((addon) => (
                <div
                  key={addon}
                  className="flex items-center gap-3 rounded-lg bg-slate-50 p-4 transition-colors hover:bg-cyan-50 dark:bg-slate-900/50 dark:hover:bg-cyan-900/20"
                >
                  <div className="h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></div>
                  <span className="text-slate-800 dark:text-slate-300">
                    {addon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-center shadow-2xl shadow-slate-900/50 dark:shadow-black/50">
            <h3 className="mb-4 text-3xl font-bold text-white">
              Não tem certeza qual plano escolher?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-slate-300">
              Entre em contato e vamos encontrar a melhor solução para o seu
              projeto. Oferecemos orçamentos personalizados sem compromisso.
            </p>
            <Link href="/#contato">
              <Button
                size="lg"
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-6 text-lg hover:from-cyan-600 hover:to-blue-700"
              >
                Solicitar Orçamento Personalizado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
