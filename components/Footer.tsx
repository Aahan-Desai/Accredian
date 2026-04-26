"use client";

import { useMemo } from "react";

const columns = [
  {
    title: "Solutions",
    links: ["Data academies", "AI upskilling", "Leadership programs", "Custom cohorts"]
  },
  {
    title: "Company",
    links: ["About", "Partners", "Careers", "Contact"]
  },
  {
    title: "Resources",
    links: ["Case studies", "Blogs", "Learner support", "Privacy policy"]
  }
];

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-slate-950 py-16 text-white">
      <div className="section-shell">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1.8fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-accredian-blue text-lg font-bold">
                A
              </span>
              <span className="text-xl font-bold">Accredian Enterprise</span>
            </div>
            <p className="mt-5 max-w-lg leading-8 text-slate-300">
              Enterprise learning solutions for teams building future-ready data, AI, product, and
              leadership capabilities.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg font-semibold">{column.title}</h3>
                <div className="mt-5 grid gap-3">
                  {column.links.map((link) => (
                    <a
                      key={link}
                      href="#top"
                      className="text-base text-slate-300 transition hover:text-white"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-800 pt-6 text-base text-slate-400 sm:flex-row">
          <p>© {year} Accredian Enterprise. All rights reserved.</p>
          <p>Partial clone built for demonstration and assessment use.</p>
        </div>
      </div>
    </footer>
  );
}
