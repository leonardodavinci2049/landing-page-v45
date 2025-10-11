export default function TechStackSection() {
  const technologies = [
    {
      category: "Frontend",
      items: [
        {
          name: "React",
          description: "Biblioteca para interfaces interativas",
        },
        { name: "Next.js", description: "Framework React para produção" },
        { name: "TypeScript", description: "JavaScript com tipagem estática" },
        { name: "Tailwind CSS", description: "Framework CSS utilitário" },
        { name: "Shadcn/UI", description: "Componentes UI modernos" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", description: "Runtime JavaScript server-side" },
        { name: "Express.js", description: "Framework web minimalista" },
        { name: "NestJS", description: "Framework Node.js escalável" },
        { name: "Python", description: "Linguagem versátil e poderosa" },
      ],
    },
    {
      category: "Banco de Dados",
      items: [
        { name: "PostgreSQL", description: "Banco relacional robusto" },
        { name: "MongoDB", description: "Banco NoSQL flexível" },
        { name: "MySQL", description: "Banco de dados relacional" },
        { name: "Prisma", description: "ORM moderno para Node.js" },
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "AWS", description: "Serviços cloud escaláveis" },
        { name: "Vercel", description: "Deploy otimizado para Next.js" },
        { name: "Docker", description: "Containerização de aplicações" },
        { name: "GitHub Actions", description: "CI/CD automatizado" },
      ],
    },
    {
      category: "Ferramentas",
      items: [
        { name: "Git", description: "Controle de versão" },
        { name: "AI", description: "Desenvolvimento de Inteligência Artificial" },
        { name: "N8N", description: "Automação de workflows" },
        { name: "Postman", description: "Testes de API" },
      ],
    },
  ];

  return (
    <section className="bg-slate-900 py-24" id="tecnologias">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Nossa Stack Tecnológica para o Marketing de Afiliados
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-300">
              Trabalhamos com as tecnologias mais avançadas e eficientes do mercado para garantir que suas ferramentas e infraestrutura de marketing de afiliados sejam robustas, escaláveis e preparadas para o futuro.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>

          {/* Technologies Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.category}
                className="group rounded-2xl border border-slate-700 bg-slate-800/80 p-8 shadow-xl shadow-slate-950/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-2xl hover:shadow-slate-900/60"
              >
                <h3 className="mb-6 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                  {tech.category}
                </h3>
                <div className="space-y-4">
                  {tech.items.map((item) => (
                    <div
                      key={item.name}
                      className="group/item flex items-start gap-3"
                    >
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500 transition-transform group-hover/item:scale-150"></div>
                      <div>
                        <div className="font-semibold text-white transition-colors group-hover/item:text-cyan-400">
                          {item.name}
                        </div>
                        <div className="text-sm text-slate-400">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "20+", label: "Tecnologias Dominadas" },
              { value: "100%", label: "Código Moderno" },
              { value: "99.9%", label: "Uptime Garantido" },
              { value: "24/7", label: "Suporte Técnico" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-slate-400">
              Sempre atualizados com as últimas tendências e melhores práticas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "AWS Certified",
                "Google Cloud",
                "React Expert",
                "Node.js Professional",
              ].map((cert) => (
                <div
                  key={cert}
                  className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-3 text-slate-300 shadow-lg shadow-slate-950/50 transition-all hover:border-cyan-500 hover:text-cyan-400 hover:shadow-xl hover:shadow-slate-900/60"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
