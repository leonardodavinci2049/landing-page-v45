import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Lucas Mendes",
      role: "Afiliado Master",
      company: "Afiliados Pro",
      content:
        "A estrutura de servidores e as landing pages otimizadas que a CSTHost desenvolveu para mim foram um divisor de águas. Minhas campanhas de tráfego pago nunca performaram tão bem! O ROI aumentou significativamente.",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Fernanda Lima",
      role: "Estrategista Digital",
      company: "Marketing de Resultados",
      content:
        "As ferramentas de automação e os bots inteligentes que a CSTHost implementou otimizaram meu tempo e melhoraram a interação com meus leads. Agora consigo focar mais na estratégia e menos na operação.",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Ricardo Almeida",
      role: "Produtor Digital",
      company: "Infoprodutos Pro",
      content:
        "A CSTHost me ajudou a criar um funil de vendas completo e otimizado para meus infoprodutos. A integração com as plataformas de afiliados foi impecável e o suporte técnico é sempre ágil e eficiente.",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Mariana Guedes",
      role: "Afiliada de Conteúdo",
      company: "Blog do Afiliado",
      content:
        "Minha hospedagem sempre foi um problema, mas a infraestrutura da CSTHost resolveu tudo. Meu blog está mais rápido e seguro, o que impactou diretamente no meu SEO e nas minhas vendas como afiliada.",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Gustavo Pereira",
      role: "Gestor de Tráfego",
      company: "Performance Digital",
      content:
        "As ferramentas de análise e rastreamento da CSTHost são essenciais para minhas campanhas de tráfego pago. Consigo otimizar meus investimentos e ter um controle muito mais preciso sobre o ROI de cada ação.",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Juliana Ferreira",
      role: "Product Owner",
      company: "FinTech Solutions",
      content:
        "Trabalhar com metodologia ágil e ter entregas contínuas nos deu segurança durante todo o projeto. A comunicação foi transparente e o código entregue é de altíssima qualidade. Parceria de longo prazo garantida!",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-slate-900" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-100">
              O que Nossos Afiliados Parceiros Dizem
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-700 dark:text-slate-400">
              A satisfação dos nossos parceiros afiliados é a nossa maior recompensa. Veja alguns depoimentos de quem já impulsionou seus resultados no marketing de afiliados conosco.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="group border-slate-200 transition-all duration-300 hover:border-cyan-500 dark:border-slate-700 dark:hover:border-cyan-400"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-10 w-10 text-cyan-500 opacity-50 dark:text-cyan-400" />
                  </div>

                  {/* Rating */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="mb-6 leading-relaxed text-slate-800 italic dark:text-slate-300">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 border-t border-slate-200 pt-4 dark:border-slate-700">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-slate-100 dark:group-hover:text-cyan-400">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-sm md:grid-cols-4 dark:border-slate-700 dark:bg-slate-800/50 dark:shadow-slate-950/50">
            {[
              { value: "50+", label: "Clientes Satisfeitos" },
              { value: "98%", label: "Taxa de Satisfação" },
              { value: "4.9/5", label: "Avaliação Média" },
              { value: "100%", label: "Projetos Entregues" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-3xl font-bold text-cyan-600 md:text-4xl dark:text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
