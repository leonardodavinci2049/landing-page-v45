import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { companyInfo } from "@/lib/env";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: companyInfo.email,
      link: `mailto:${companyInfo.email}`,
    },
    {
      icon: Phone,
      title: "Telefone",
      value: companyInfo.phone,
      link: `tel:+${companyInfo.whatsapp}`,
    },
    {
      icon: MapPin,
      title: "Localização",
      value: companyInfo.address,
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
  ];

  return (
    <section className="bg-slate-900 py-24" id="contato">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Pronto para Impulsionar Seu Negócio de Afiliados?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-300">
              Pronto para levar seu negócio de marketing de afiliados ao próximo nível? Preencha o formulário abaixo ou entre em contato diretamente para conversarmos sobre suas necessidades de como podemos te ajudar.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-slate-700 bg-slate-800/80 shadow-2xl shadow-slate-950/50 backdrop-blur-sm transition-all hover:shadow-slate-900/60">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={companyInfo.phone}
                      className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-500 focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Assunto *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Sobre o que você quer falar?"
                      className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={6}
                      className="resize-none border-slate-700 bg-slate-900 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <Card
                      key={info.title}
                      className="group border-slate-700 bg-slate-800/80 shadow-lg shadow-slate-950/50 backdrop-blur-sm transition-all hover:border-cyan-500 hover:shadow-xl hover:shadow-slate-900/60"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 transition-transform group-hover:scale-110">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="mb-1 text-sm text-slate-400">
                              {info.title}
                            </div>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="font-medium text-white transition-colors hover:text-cyan-400"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <div className="font-medium text-white">
                                {info.value}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <Card className="border-slate-700 bg-slate-800/80 shadow-lg shadow-slate-950/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-white">
                    Redes Sociais
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex h-12 w-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 transition-all hover:scale-110 hover:border-cyan-500"
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-400" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="border-0 bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/40">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-white">
                    Disponibilidade
                  </h3>
                  <p className="text-white/90">
                    Respondemos em até 24 horas úteis. Para urgências, entre em
                    contato via WhatsApp.
                  </p>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card className="border-slate-700 bg-slate-800/80 shadow-lg shadow-slate-950/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-white">
                    Horário de Atendimento
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Segunda - Sexta</span>
                      <span className="text-white">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Sábado</span>
                      <span className="text-white">9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Domingo</span>
                      <span className="text-slate-500">Fechado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
