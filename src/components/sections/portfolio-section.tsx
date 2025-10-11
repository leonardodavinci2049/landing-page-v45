import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Plataforma de Lançamento de Produtos Digitais",
      category: "Marketing de Afiliados",
      description:
        "Desenvolvimento de uma plataforma robusta para lançamento e gestão de produtos digitais, com funcionalidades para afiliados, controle de comissões, e integração com sistemas de pagamento e e-mail marketing.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "TypeScript", "Stripe", "Hotmart"],
      results: [
        { metric: "+200%", label: "Aumento de vendas" },
        { metric: "+50%", label: "Novos afiliados" },
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Ferramenta de Rastreamento e Análise de Campanhas",
      category: "Marketing de Afiliados",
      description:
        "Desenvolvimento de uma ferramenta customizada para rastreamento de links de afiliados, análise de performance de campanhas e geração de relatórios detalhados para otimização de resultados.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MongoDB", "Analytics"],
      results: [
        { metric: "+30%", label: "Otimização de ROI" },
        { metric: "2x", label: "Mais leads" },
      ],
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Funil de Vendas Otimizado para Afiliados",
      category: "Marketing de Afiliados",
      description:
        "Criação de um funil de vendas completo, com landing pages de alta conversão, páginas de obrigado e e-mails de nutrição, todos otimizados para maximizar a conversão de visitantes em compradores de produtos de afiliados.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Tailwind", "Analytics", "Automação"],
      results: [
        { metric: "+85%", label: "Taxa de conversão" },
        { metric: "-30%", label: "Custo por Lead" },
      ],
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Assistência Técnica em Informática",
      category: "Serviços Técnicos",
      description:
        "Suporte técnico especializado com diagnóstico assistido por IA, montagem e conserto de computadores, instalação de redes e configuração de software para empresas e residências.",
      image: "/api/placeholder/600/400",
      tags: ["Diagnóstico IA", "Redes", "Hardware", "Software"],
      results: [
        { metric: "98%", label: "Satisfação" },
        { metric: "24h", label: "Tempo médio" },
      ],
      color: "from-yellow-500 to-amber-600",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-100">
              Cases de Sucesso para Afiliados
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-700 dark:text-slate-400">
              Nossa experiência se traduz em resultados concretos para o mercado de afiliados. Explore alguns dos projetos e soluções que desenvolvemos para impulsionar negócios como o seu.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>

          {/* Projects Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="group overflow-hidden border-slate-200 transition-all duration-300 hover:border-cyan-500 dark:border-slate-700 dark:hover:border-cyan-400"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 transition-opacity group-hover:opacity-30`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-2 text-6xl font-bold text-white/10">
                        {project.category}
                      </div>
                      <Badge
                        className={`bg-gradient-to-r ${project.color} border-0 text-white`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-slate-100 dark:group-hover:text-cyan-400">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="mb-6 grid grid-cols-2 gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-md shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900/50 dark:shadow-slate-950/50">
                    {project.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <div className="mb-1 flex items-center justify-center gap-1">
                          <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                            {result.metric}
                          </div>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href="/#contato">
                    <Button
                      variant="outline"
                      className="group/btn w-full cursor-pointer border-slate-300 px-8 py-6 text-lg hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-600 dark:hover:text-cyan-400"
                    >
                      Ver Detalhes do Projeto
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="mb-6 text-lg text-slate-700 dark:text-slate-400">
              Quer ver mais projetos ou discutir como podemos ajudar seu
              negócio?
            </p>
            <Link href="/#contato">
              <Button
                size="lg"
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-6 text-lg hover:from-cyan-600 hover:to-blue-700"
              >
                Agendar Reunião
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
