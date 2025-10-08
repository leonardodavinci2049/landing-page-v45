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
      category: "Desenvolvimento Web",
      icon: Globe,
      color: "from-cyan-500 to-blue-600",
      items: [
        {
          title: "Sites Institucionais",
          description:
            "Presença online otimizada para SEO e performance, com design responsivo e moderno.",
          features: ["SEO Otimizado", "Design Responsivo", "CMS Integrado"],
          aiFeature: false,
        },
        {
          title: "Sistemas PDV",
          description:
            "Soluções online para varejo com integração de estoque, pagamentos e dashboard completo.",
          features: ["Gestão de Estoque", "Pagamentos", "Dashboard Admin"],
          aiFeature: false,
        },
        {
          title: "Painel Administrativo",
          description:
            "Sistema completo de gestão de produtos, entrada, clientes e pedidos com IA para análise preditiva.",
          features: [
            "Gestão de Produtos",
            "Controle de Clientes",
            "Análise com IA",
          ],
          aiFeature: true,
        },
      ],
    },
    {
      category: "E-commerce",
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-600",
      items: [
        {
          title: "E-commerce B2B",
          description:
            "Catálogos atacadistas com preços diferenciados e pedidos em lote, otimizados com IA.",
          features: [
            "Catálogo B2B",
            "Preços Variáveis",
            "IA para Precificação",
          ],
          aiFeature: true,
        },
        {
          title: "E-commerce B2C",
          description:
            "Lojas online para varejo com gestão completa de produtos e pagamentos.",
          features: ["Gestão de Produtos", "Pagamentos", "Checkout Otimizado"],
          aiFeature: false,
        },
        {
          title: "WooCommerce",
          description:
            "Instalação e configuração profissional do WooCommerce com otimizações e integrações.",
          features: ["Instalação", "Configuração", "Otimização"],
          aiFeature: false,
        },
      ],
    },
    {
      category: "Landing Pages",
      icon: Sparkles,
      color: "from-orange-500 to-red-600",
      items: [
        {
          title: "Landing Pages para Ads",
          description:
            "Páginas de alta conversão para Google Ads, Meta Ads e outras plataformas, criadas com IA.",
          features: ["Google Ads", "Meta Ads", "Copy com IA"],
          aiFeature: true,
        },
        {
          title: "Integração Social",
          description:
            "Landing pages com integração WhatsApp e redes sociais para máxima conversão.",
          features: ["WhatsApp", "Redes Sociais", "Chat Integrado"],
          aiFeature: false,
        },
        {
          title: "Marketing & Campanhas",
          description:
            "Landing pages para ações de marketing com ChatGPT e Gemini para copywriting otimizado.",
          features: ["ChatGPT", "Gemini", "A/B Testing"],
          aiFeature: true,
        },
      ],
    },
    {
      category: "Automação",
      icon: Workflow,
      color: "from-green-500 to-emerald-600",
      items: [
        {
          title: "Workflows Inteligentes",
          description:
            "Integração entre sistemas e automatização de tarefas com N8N e IA para otimização.",
          features: ["N8N", "Integração", "IA Preditiva"],
          aiFeature: true,
        },
        {
          title: "Bots Telegram",
          description:
            "Atendimento automatizado com IA e notificações em tempo real.",
          features: ["Atendimento IA", "Notificações", "Integração"],
          aiFeature: true,
        },
        {
          title: "Integração WhatsApp",
          description:
            "Automação de mensagens e atendimento via WhatsApp com respostas inteligentes por IA.",
          features: ["WhatsApp API", "Respostas IA", "Chatbot"],
          aiFeature: true,
        },
      ],
    },
    {
      category: "Hospedagem & Infraestrutura",
      icon: Server,
      color: "from-blue-500 to-indigo-600",
      items: [
        {
          title: "WordPress Gerenciado",
          description:
            "Configuração otimizada com backups automáticos e segurança avançada.",
          features: ["Backups", "SSL", "Segurança"],
          aiFeature: false,
        },
        {
          title: "Deploy de Aplicações",
          description:
            "CI/CD para aplicações React/Next.js com monitoramento e IA para otimização de performance.",
          features: ["CI/CD", "Monitoramento IA", "Performance"],
          aiFeature: true,
        },
        {
          title: "VPS Linux",
          description:
            "Instalação e gerenciamento completo de VPS Linux com configurações otimizadas.",
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
              Nossos Serviços
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-700 dark:text-slate-400">
              Soluções completas para o seu negócio digital, desde o
              desenvolvimento até a automação e hospedagem,
              <span className="font-semibold text-cyan-600">
                {" "}
                potencializadas por Inteligência Artificial
              </span>
              .
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
