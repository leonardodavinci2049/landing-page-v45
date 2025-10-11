import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Globe,
  ShoppingCart,
  Sparkles,
  Workflow,
  Server,
  ArrowRight,
  Wrench,
  Bot,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      category: "Desenvolvimento Web para Afiliados",
      icon: Globe,
      color: "from-cyan-500 to-blue-600",
      items: [
        {
          title: "Páginas de Venda de Alta Conversão",
          description:
            "Desenvolvemos páginas de venda otimizadas para afiliados, com foco em SEO, performance e design responsivo para maximizar suas conversões.",
          features: ["SEO Otimizado", "Design Responsivo", "Foco em Conversão"],
          aiFeature: false,
        },
        {
          title: "Ferramentas de Suporte ao Afiliado",
          description:
            "Criação de sistemas e ferramentas personalizadas para gerenciar links, campanhas e dados de produtos, facilitando suas operações de marketing de afiliados.",
          features: ["Gestão de Links", "Automação de Campanhas", "Dashboards Personalizados"],
          aiFeature: false,
        },
        {
          title: "Painéis de Controle para Produtos Digitais",
          description:
            "Sistemas completos para gestão de produtos digitais, afiliados e comissionamento, com IA para análise preditiva e otimização de vendas.",
          features: [
            "Gestão de Produtos",
            "Controle de Afiliados",
            "Análise com IA",
          ],
          aiFeature: true,
        },
      ],
    },
    {
      category: "Plataformas de Venda para Afiliados",
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-600",
      items: [
        {
          title: "Lojas Virtuais Otimizadas para Afiliados",
          description:
            "Criação de lojas online focadas em produtos de afiliados, com gestão completa e otimização para alta conversão.",
          features: ["Gestão de Produtos", "Pagamentos Seguros", "Checkout Otimizado"],
          aiFeature: false,
        },
        {
          title: "Integração com Marketplaces de Afiliados",
          description:
            "Integramos sua plataforma com os principais marketplaces de afiliados, facilitando a gestão e a promoção dos seus produtos.",
          features: ["Hotmart", "Monetizze", "Eduzz"],
          aiFeature: false,
        },
        {
          title: "Sistemas de Afiliados Customizados",
          description:
            "Desenvolvimento de sistemas de afiliados próprios, com controle total sobre comissões, rastreamento e performance.",
          features: ["Comissionamento Flexível", "Rastreamento Avançado", "Relatórios Detalhados"],
          aiFeature: true,
        },
      ],
    },
    {
      category: "Landing Pages para Afiliados",
      icon: Sparkles,
      color: "from-orange-500 to-red-600",
      items: [
        {
          title: "Landing Pages de Alta Conversão para Afiliados",
          description:
            "Desenvolvemos landing pages focadas em alta conversão para suas campanhas de Google Ads, Meta Ads e outras plataformas, com textos persuasivos gerados por IA.",
          features: ["Google Ads", "Meta Ads", "Copy com IA"],
          aiFeature: true,
        },
        {
          title: "Páginas de Captura de Leads Otimizadas",
          description:
            "Criação de páginas de captura de leads com integração de WhatsApp e redes sociais, essenciais para construir sua lista e nutrir seus potenciais clientes.",
          features: ["WhatsApp", "Redes Sociais", "Chat Integrado"],
          aiFeature: false,
        },
        {
          title: "Otimização de Campanhas com IA",
          description:
            "Landing pages com copywriting otimizado por ChatGPT e Gemini, e testes A/B automatizados para garantir o melhor desempenho das suas promoções de produtos de afiliados.",
          features: ["ChatGPT", "Gemini", "A/B Testing"],
          aiFeature: true,
        },
      ],
    },
    {
      category: "Automação para Afiliados",
      icon: Workflow,
      color: "from-green-500 to-emerald-600",
      items: [
        {
          title: "Workflows de Marketing de Afiliados Inteligentes",
          description:
            "Integração entre suas ferramentas de marketing e automatização de tarefas repetitivas com N8N e IA, otimizando suas campanhas e economizando tempo.",
          features: ["N8N", "Integração", "IA Preditiva"],
          aiFeature: true,
        },
        {
          title: "Bots para Atendimento e Suporte a Leads",
          description:
            "Criação de bots inteligentes para Telegram e outras plataformas, oferecendo atendimento automatizado e suporte em tempo real para seus leads e clientes, potencializando suas vendas.",
          features: ["Atendimento IA", "Notificações", "Integração"],
          aiFeature: true,
        },
        {
          title: "Automação de Comunicação via WhatsApp",
          description:
            "Automação de mensagens e atendimento via WhatsApp com respostas inteligentes por IA, para nutrir leads, enviar ofertas e manter um relacionamento próximo com seu público de afiliados.",
          features: ["WhatsApp API", "Respostas IA", "Chatbot"],
          aiFeature: true,
        },
      ],
    },
    {
      category: "Hospedagem & Infraestrutura para Afiliados",
      icon: Server,
      color: "from-blue-500 to-indigo-600",
      items: [
        {
          title: "Hospedagem Otimizada para Páginas de Venda",
          description:
            "Servidores de alta performance configurados para garantir velocidade e estabilidade para suas páginas de venda e funis de marketing, essenciais para não perder vendas.",
          features: ["Velocidade", "Uptime", "Segurança"],
          aiFeature: false,
        },
        {
          title: "Infraestrutura Escalável para Campanhas",
          description:
            "Infraestrutura robusta e escalável para suportar picos de tráfego em suas campanhas de afiliados, com monitoramento inteligente e deploy automatizado.",
          features: ["Escalabilidade", "Monitoramento IA", "Deploy Automatizado"],
          aiFeature: true,
        },
        {
          title: "VPS Linux Gerenciado para Ferramentas de Afiliados",
          description:
            "Instalação e gerenciamento completo de VPS Linux, otimizado para rodar suas ferramentas de marketing de afiliados, bots e sistemas customizados com máxima performance e segurança.",
          features: ["Instalação", "Gerenciamento", "Otimização"],
          aiFeature: false,
        },
      ],
    },

  ];

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950" id="servicos">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-100">
              Serviços Exclusivos para Afiliados de Marketing de Afiliados
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-700 dark:text-slate-400">
              Soluções completas e personalizadas para o seu negócio de marketing de afiliados, desde a infraestrutura de servidores e desenvolvimento de ferramentas até a automação e hospedagem, <span className="font-semibold text-cyan-600">potencializadas por Inteligência Artificial</span>, para impulsionar suas promoções e resultados.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>

          {/* AI Badge */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white shadow-lg">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">
                Serviços Potencializados por IA
              </span>
              <Zap className="h-5 w-5" />
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.category}>
                  {/* Category Header */}
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg shadow-slate-400/30 dark:shadow-slate-950/50`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {service.category}
                    </h3>
                  </div>

                  {/* Service Cards */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {service.items.map((item) => (
                      <Card
                        key={item.title}
                        className={`group relative overflow-hidden border-slate-200 transition-all duration-300 hover:border-cyan-500 dark:border-slate-700 dark:hover:border-cyan-400 ${
                          item.aiFeature
                            ? "ring-2 shadow-cyan-500/10 ring-cyan-500/20 dark:shadow-cyan-400/10"
                            : ""
                        }`}
                      >
                        {/* AI Badge */}
                        {item.aiFeature && (
                          <div className="absolute top-3 right-3 z-10">
                            <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-lg">
                              <Bot className="h-3 w-3" />
                              <span>IA</span>
                            </div>
                          </div>
                        )}

                        <CardHeader>
                          <CardTitle className="text-xl transition-colors group-hover:text-cyan-600">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-4 flex flex-wrap gap-2">
                            {item.features.map((feature) => (
                              <Badge
                                key={feature}
                                variant="secondary"
                                className={`${
                                  feature.includes("IA") ||
                                  feature.includes("ChatGPT") ||
                                  feature.includes("Gemini")
                                    ? "bg-cyan-100 text-cyan-700 hover:bg-cyan-200"
                                    : "bg-slate-100 text-slate-700 hover:bg-cyan-100 hover:text-cyan-700"
                                }`}
                              >
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          <Link href="/#contato" className="w-full">
                            <Button
                              variant="ghost"
                              className="group/btn w-full"
                            >
                              Saiba Mais
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-lg text-slate-600 dark:text-slate-400">
              Não encontrou o que procura? Entre em contato para soluções
              personalizadas com IA.
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
