import { CheckCircle2, Rocket, Shield, TrendingUp, Users } from "lucide-react";

export default function AboutSection() {
  const differentials = [
    {
      icon: Rocket,
      title: "Tecnologia de Ponta",
      description:
        "Utilizamos as ferramentas mais modernas do mercado para resultados superiores.",
    },
    {
      icon: Shield,
      title: "Soluções Completas",
      description:
        "Do conceito à automação, cuidamos de todo o ciclo de desenvolvimento.",
    },
    {
      icon: TrendingUp,
      title: "Experiência Comprovada",
      description:
        "Anos de experiência em e-commerce e sistemas corporativos complexos.",
    },
    {
      icon: Users,
      title: "Orientado a Resultados",
      description:
        "Foco no sucesso do cliente e no impacto real para o negócio.",
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-slate-900" id="sobre">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-100">
              Sua Parceria Estratégica para o Sucesso no Marketing de Afiliados
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>

          {/* Content Grid */}
          <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Text */}
            <div>
              <p className="mb-6 text-lg leading-relaxed text-slate-800 dark:text-slate-300">
                Com anos de experiência, somos especialistas em criar
                <strong className="text-slate-900 dark:text-slate-100">
                  {" "}
                  ferramentas e infraestrutura digital robusta e escalável
                </strong>{" "}
                para profissionais de marketing de afiliados, utilizando as tecnologias mais modernas do mercado, como React,
                Next.js e TypeScript.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-300">
                Nosso foco é entregar soluções que não apenas atendam, mas{" "}
                <strong className="text-slate-900 dark:text-slate-100">
                  superem as expectativas do seu negócio de afiliado
                </strong>
                , garantindo performance, segurança e uma experiência de usuário
                impecável para seus clientes.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                {[
                  "Arquitetura escalável e manutenível",
                  "Código limpo e bem documentado",
                  "Metodologias ágeis de desenvolvimento",
                  "Comunicação transparente e constante",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-cyan-500" />
                    <span className="text-slate-800 dark:text-slate-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl border border-slate-200 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 shadow-xl shadow-slate-200/50 dark:border-slate-700 dark:shadow-slate-950/50">
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-slate-900 shadow-2xl">
                  <div className="p-8 text-center">
                    <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/40">
                      <Rocket className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      5+ Anos
                    </h3>
                    <p className="text-slate-400">de Experiência</p>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -right-6 -bottom-6 rounded-xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-300/60 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-900/60">
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                  98%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Taxa de Satisfação
                </div>
              </div>
            </div>
          </div>

          {/* Differentials Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {differentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl hover:shadow-slate-300/60 dark:border-slate-700 dark:bg-slate-800/80 dark:shadow-slate-950/50 dark:hover:shadow-slate-900/60"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 transition-transform group-hover:scale-110 dark:shadow-cyan-400/20">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
