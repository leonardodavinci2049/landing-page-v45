import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { companyInfo } from "@/lib/env";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicos: [
      { label: "Desenvolvimento Web", href: "#servicos" },
      { label: "E-commerce", href: "#servicos" },
      { label: "Automação", href: "#servicos" },
      { label: "Hospedagem", href: "#servicos" },
    ],
    empresa: [
      { label: "Sobre", href: "#sobre" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Processo", href: "#processo" },
      { label: "Depoimentos", href: "#depoimentos" },
    ],
    recursos: [
      { label: "Blog", href: "#" },
      { label: "Documentação", href: "#" },
      { label: "Suporte", href: "#contato" },
      { label: "FAQ", href: "#faq" },
    ],
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="group mb-6 flex items-center gap-3">
              <Image
                src="/logo-white.svg"
                alt={`${companyInfo.name} Logo`}
                width={40}
                height={40}
                className="h-10 w-10 transition-transform group-hover:scale-105"
              />
              <span className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                {companyInfo.name.toUpperCase()}
              </span>
            </a>
            <p className="mb-6 max-w-md leading-relaxed text-slate-400">
              <strong className="text-white">{companyInfo.name}</strong> -{" "}
              {companyInfo.title}.{companyInfo.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-cyan-400"
              >
                <Mail className="h-5 w-5" />
                <span>{companyInfo.email}</span>
              </a>
              <a
                href={`tel:+${companyInfo.whatsapp}`}
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-cyan-400"
              >
                <Phone className="h-5 w-5" />
                <span>{companyInfo.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-5 w-5" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <p className="text-sm text-slate-500">
              © {currentYear} {companyInfo.name} - {companyInfo.title}. Todos
              os direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 shadow-lg shadow-slate-950/50 transition-all hover:scale-110 hover:border-cyan-500 hover:shadow-xl hover:shadow-slate-900/60"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-400" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy-policy"
                className="text-slate-500 transition-colors hover:text-cyan-400"
              >
                Política de Privacidade
              </a>
              <a
                href="/terms-of-service"
                className="text-slate-500 transition-colors hover:text-cyan-400"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
