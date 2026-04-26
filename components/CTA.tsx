"use client";

import { useState } from "react";
import LeadModal from "./LeadModal";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="bg-accredian-navy py-24 text-white">
      <div className="section-shell flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
        <div className="max-w-5xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-blue-200">
            Ready to build your enterprise academy?
          </p>
          <h2 className="mt-4 text-[clamp(32px,4vw,48px)] font-extrabold">
            Launch a measurable upskilling program for your teams
          </h2>
          <p className="mt-5 text-[18px] leading-[1.7] text-blue-100">
            Share your workforce goals and Accredian will help map the right learning paths,
            delivery model, and success metrics.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="rounded-md bg-white px-8 py-4 text-lg font-semibold text-accredian-blue transition hover:-translate-y-0.5 hover:bg-blue-50"
        >
          Get in touch
        </button>
      </div>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
