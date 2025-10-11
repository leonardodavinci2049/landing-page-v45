import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Background Pattern - Dots with Depth Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#06b6d410_2px,transparent_2px)] bg-[size:96px_96px]"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-cyan-400/40 animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 h-2 w-2 rounded-full bg-purple-400/40 animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 h-2 w-2 rounded-full bg-pink-400/40 animate-ping animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/3 h-2 w-2 rounded-full bg-blue-400/40 animate-ping animation-delay-1000"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
      <div className="animate-blob animation-delay-2000 absolute top-0 -right-4 h-72 w-72 rounded-full bg-cyan-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-pink-500 opacity-20 mix-blend-multiply blur-xl filter"></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-slate-300">
              Desenvolvedor Full-Stack Especializado
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-5xl leading-tight font-bold text-transparent md:text-7xl">
            Transforme Sua Visão Digital em Realidade
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl">
            Soluções Web Full-Stack com{" "}
            <span className="font-semibold text-cyan-400">React & Next.js</span>
            <br />
            Desenvolvimento de ponta para empresas que buscam performance,
            escalabilidade e inovação.
          </p>

          {/* Tech Stack Badges */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-cyan-500/50"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          {/* CTAs */}
          {/* CTAs */}
          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/#contato">
              <Button
                size="lg"
                className="group cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-6 text-lg text-white hover:from-cyan-600 hover:to-blue-700"
              >
                Solicite um Orçamento Grátis
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/#servicos">
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer border-slate-600 px-8 py-6 text-lg text-slate-200 hover:bg-slate-800"
              >
                <Code2 className="mr-2 h-5 w-5" />
                Conheça Nossos Serviços
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-slate-800 pt-12 md:grid-cols-4">
            {[
              { value: "50+", label: "Projetos Entregues" },
              { value: "98%", label: "Satisfação" },
              { value: "5+", label: "Anos de Experiência" },
              { value: "24/7", label: "Suporte" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-3xl font-bold text-cyan-400 md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-600 p-2">
          <div className="h-3 w-1 rounded-full bg-slate-500"></div>
        </div>
      </div>
    </section>
  );
}
