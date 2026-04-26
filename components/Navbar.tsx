"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/types";
import LeadModal from "./LeadModal";

const navItems: NavItem[] = [
  { label: "Solutions", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Programs", href: "#programs" },
  { label: "Testimonials", href: "#testimonials" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasShadow(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur transition ${
          hasShadow ? "shadow-sm" : ""
        }`}
      >
        <nav className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-8 py-4">
          <a href="#top" className="flex items-center gap-2" aria-label="Accredian Enterprise home">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-accredian-blue text-lg font-bold text-white">
              A
            </span>
            <span className="text-[20px] font-bold text-accredian-navy">
              Accredian Enterprise
            </span>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[16px] font-medium text-slate-700 transition hover:text-accredian-blue"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#programs"
              className="rounded-md px-5 py-3 text-[16px] font-semibold text-accredian-blue transition hover:bg-blue-50"
            >
              Explore programs
            </a>
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-accredian-blue px-5 py-3 text-[16px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Request demo
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-accredian-navy" />
              <span className="block h-0.5 w-5 bg-accredian-navy" />
              <span className="block h-0.5 w-5 bg-accredian-navy" />
            </span>
          </button>
        </nav>

        {isMenuOpen ? (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="section-shell flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md px-3 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-accredian-blue"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={openModal}
                className="mt-2 rounded-md bg-accredian-blue px-4 py-3 font-semibold text-white"
              >
                Request demo
              </button>
            </div>
          </div>
        ) : null}
      </header>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
