"use client";

import { useMemo } from "react";
import Image from "next/image";

const logos = [
  { name: "HDFC Bank", src: "/logos/HDFC_Bank_Logo.svg.png" },
  { name: "Cognizant", src: "/logos/Cognizant's_logo.svg.png" },
  { name: "Flipkart", src: "/logos/Flipkart_logo_(2026).svg" },
  { name: "Infosys", src: "/logos/Infosys_logo.svg.png" },
  { name: "Tata", src: "/logos/Tata_logo.svg.png" },
  { name: "Capgemini", src: "/logos/Capgemini_201x_logo.svg" },
  { name: "Wipro", src: "/logos/Wipro_Primary_Logo_Color_RGB.svg.png" },
];

export default function TrustedBy() {
  const repeatedLogos = useMemo(() => [...logos, ...logos], []);

  return (
    <section
      id="trusted-by"
      className="border-y border-slate-200 bg-white py-16"
    >
      <div className="section-shell">
        <p className="text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Trusted by growing teams and enterprise learning leaders
        </p>
        <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-7">
          {repeatedLogos.slice(0, 7).map((logo) => (
            <div
              key={logo.name}
              className="grid h-16 min-w-[120px] place-items-center rounded-lg border border-gray-200 bg-slate-50 px-6 text-center text-sm font-bold text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-accredian-blue"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={180}
                height={72}
                className="max-h-10 min-w-[120px] object-contain grayscale transition hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
