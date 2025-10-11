import { Search, Palette, Code, TestTube, Rocket } from "lucide-react";
import Link from "next/link";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Análise e Estratégia para Afiliados",
      description:
        "Compreendemos suas metas como afiliado, seu nicho e público para desenvolver uma estratégia tecnológica que impulsione seus resultados.",
      details: [
        "Análise de mercado de afiliados",
        "Definição de ferramentas e infraestrutura",
        "Planejamento de campanhas e promoções",
      ],
    },
    {
      number: "02",
      icon: Palette,
      title: "Design de Ferramentas e Funis de Venda",
      description:
        "Criamos o design de suas ferramentas e funis de venda, focando na experiência do usuário e na conversão para seus produtos de afiliado.",
      details: ["Wireframes", "Protótipos de funis", "Design de landing pages"],
    },
    {
      number: "03",
      icon: Code,
      title: "Desenvolvimento e Implementação Ágil",
      description:
        "Construímos suas ferramentas e infraestrutura com as melhores práticas, utilizando metodologias ágeis para garantir rapidez e eficiência na sua operação de afiliado.",
      details: ["Desenvolvimento de ferramentas", "Configuração de servidores", "Integração de APIs"],
    },
    {
      number: "04",
      icon: TestTube,
      title: "Testes, Otimização e Lançamento",
      description:
        "Realizamos testes rigorosos para garantir a performance, segurança e usabilidade de suas ferramentas e páginas, seguido do lançamento otimizado para suas campanhas.",
      details: ["Testes de conversão", "Otimização de performance", "Lançamento de campanhas"],
    },
    {
      number: "05",
      icon: Rocket,
      title: "Monitoramento e Suporte Contínuo",
      description:
        "Após o lançamento, monitoramos suas ferramentas e infraestrutura, oferecendo suporte contínuo para garantir o máximo desempenho e sucesso das suas estratégias de afiliado.",
      details: ["Monitoramento de performance", "Suporte técnico especializado", "Otimização contínua"],
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-slate-900" id="processo">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-100">
              Nosso Processo para o Sucesso do Afiliado
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-700 dark:text-slate-400">
              Transparência e eficiência em cada etapa da construção da sua estrutura de marketing de afiliados.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line - Hidden on mobile */}
            <div className="absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 lg:block"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={step.number}
                    className={`relative flex flex-col items-center gap-8 lg:flex-row ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div
                      className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}
                    >
                      <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl hover:shadow-slate-300/60 dark:border-slate-700 dark:bg-slate-800/80 dark:shadow-slate-950/50 dark:hover:shadow-slate-900/60">
                        <div
                          className={`flex items-start gap-4 ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                        >
                          <div className="flex-shrink-0">
                            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 transition-transform group-hover:scale-110 dark:shadow-cyan-400/20">
                              <Icon className="h-8 w-8 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-2 text-sm font-bold text-cyan-600 dark:text-cyan-400">
                              {step.number}
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
                              {step.title}
                            </h3>
                            <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
                              {step.description}
                            </p>
                            <ul
                              className={`space-y-2 ${isEven ? "lg:text-right" : "lg:text-left"}`}
                            >
                              {step.details.map((detail) => (
                                <li
                                  key={detail}
                                  className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
                                >
                                  <span
                                    className={`h-1.5 w-1.5 rounded-full bg-cyan-500 ${isEven ? "lg:order-2" : ""}`}
                                  ></span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Number Badge */}
                    <div className="z-10 hidden h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-4 border-cyan-500 bg-white text-xl font-bold text-cyan-600 shadow-xl shadow-cyan-500/40 lg:flex dark:bg-slate-800 dark:text-cyan-400 dark:shadow-cyan-400/30">
                      {index + 1}
                    </div>

                    {/* Spacer for alignment */}
                    <div className="hidden flex-1 lg:block"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-center shadow-2xl shadow-slate-900/50 dark:shadow-black/50">
            <h3 className="mb-4 text-3xl font-bold text-white">
              Pronto para começar seu projeto?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-slate-300">
              Entre em contato e vamos transformar sua ideia em uma solução
              digital de sucesso.
            </p>
            <Link href="/#contato">
              <button className="cursor-pointer rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl">
                Iniciar Conversa
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
