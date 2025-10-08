"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Info,
  Briefcase,
  GitBranch,
  FolderOpen,
  Code2,
  MessageSquare,
  DollarSign,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import ModeToggle from "../theme/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/env";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Previne scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    {
      href: "#sobre",
      label: "Sobre",
      icon: Info,
      description: "Conheça nossa história",
    },
    {
      href: "#servicos",
      label: "Serviços",
      icon: Briefcase,
      description: "Soluções que oferecemos",
    },
    {
      href: "#processo",
      label: "Processo",
      icon: GitBranch,
      description: "Como trabalhamos",
    },
    {
      href: "#portfolio",
      label: "Portfólio",
      icon: FolderOpen,
      description: "Projetos realizados",
    },
    {
      href: "#tecnologias",
      label: "Tecnologias",
      icon: Code2,
      description: "Stack moderno",
    },
    {
      href: "#depoimentos",
      label: "Depoimentos",
      icon: MessageSquare,
      description: "O que dizem de nós",
    },
    {
      href: "#precos",
      label: "Preços",
      icon: DollarSign,
      description: "Planos e valores",
    },
    {
      href: "#faq",
      label: "FAQ",
      icon: HelpCircle,
      description: "Dúvidas frequentes",
    },
    {
      href: "#contato",
      label: "Contato",
      icon: Mail,
      description: "Fale conosco",
    },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-800/50 bg-slate-900/95 shadow-2xl shadow-slate-950/50 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <Image
              src="/logo-white.svg"
              alt={`${companyInfo.name} Logo`}
              width={40}
              height={40}
              className="h-10 w-10 transition-transform group-hover:scale-105"
            />
            <span className="text-3xl font-bold text-white transition-colors group-hover:text-cyan-400">
              {companyInfo.name.toUpperCase()}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-slate-300 transition-colors hover:text-cyan-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <ModeToggle />
            <Link href="#contato">
              <Button className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-6 text-lg hover:from-cyan-600 hover:to-blue-700">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ModeToggle />
            <button
              className="cursor-pointer p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="animate-in fade-in fixed inset-0 top-20 z-40 bg-black/60 backdrop-blur-sm duration-300 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation - Panel */}
        {isMobileMenuOpen && (
          <div className="animate-in slide-in-from-right fixed top-20 right-0 z-50 h-[calc(100vh-5rem)] w-[70%] transform overflow-y-auto border-l border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl transition-transform duration-300 ease-in-out sm:w-96 lg:hidden">
            {/* Decorative gradient */}
            <div className="pointer-events-none absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-cyan-500/10 to-transparent" />

            <nav className="relative px-5 py-6">
              {/* Header do Menu */}
              <div className="mb-8 border-b border-slate-700/50 pb-6">
                <h3 className="mb-1 text-xl font-bold text-white">
                  Menu de Navegação
                </h3>
                <p className="text-sm text-slate-400">
                  Explore nossos serviços
                </p>
              </div>

              {/* Links de Navegação */}
              <div className="mb-8 flex flex-col gap-2">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="group relative flex items-start gap-4 rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 shadow-md shadow-slate-950/50 transition-all duration-300 hover:translate-x-1 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-slate-900/60"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isMobileMenuOpen
                          ? "slideIn 0.3s ease-out forwards"
                          : "none",
                      }}
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-110">
                        <Icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-white transition-colors group-hover:text-cyan-400">
                          {link.label}
                        </div>
                        <div className="mt-0.5 text-xs text-slate-400">
                          {link.description}
                        </div>
                      </div>
                      <div className="flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <Link
                  href="#contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="h-14 w-full cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 text-base font-semibold shadow-lg shadow-cyan-500/20 transition-all hover:from-cyan-600 hover:to-blue-700 hover:shadow-cyan-500/40">
                    <Mail className="mr-2 h-5 w-5" />
                    Solicitar Orçamento
                  </Button>
                </Link>
              </div>

              {/* Informações de Contato */}
              <div className="border-t border-slate-700/50 pt-6">
                <h4 className="mb-4 text-sm font-semibold text-slate-300">
                  Contato Rápido
                </h4>
                <div className="space-y-3">
                  <a
                    href={`tel:+${companyInfo.whatsapp}`}
                    className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 shadow-md shadow-slate-950/50">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>{companyInfo.phone}</span>
                  </a>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 shadow-md shadow-slate-950/50">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span>{companyInfo.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 shadow-md shadow-slate-950/50">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span>{companyInfo.address}</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
