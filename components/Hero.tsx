"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LeadModal from "./LeadModal";

const metrics = [
  { value: "300+", label: "enterprise partners" },
  { value: "1M+", label: "learners enabled" },
  { value: "95%", label: "completion-focused cohorts" }
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveMetric((current) => (current + 1) % metrics.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="top" className="min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-32 pb-20">
      <div className="section-shell grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-[13px] font-semibold text-accredian-blue shadow-sm">
            Enterprise learning that moves business metrics
          </div>
          <h1 className="mt-7 max-w-5xl text-[clamp(48px,5vw,64px)] font-extrabold leading-[1.1] text-accredian-navy">
            Upskill your workforce with career-linked programs from Accredian
          </h1>
          <p className="mt-6 max-w-[520px] text-[18px] leading-[1.7] text-slate-600">
            Build high-impact capability academies across data, AI, product, technology, and
            leadership with guided cohorts, mentor support, and measurable outcomes.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="h-[52px] rounded-lg bg-accredian-blue px-8 text-[16px] font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Schedule a demo
            </button>
            <a
              href="#programs"
              className="flex h-[52px] items-center justify-center rounded-lg border border-slate-300 bg-white px-8 text-center text-[16px] font-semibold text-accredian-navy transition hover:-translate-y-0.5 hover:border-accredian-blue hover:text-accredian-blue"
            >
              View programs
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`min-w-[160px] rounded-lg border bg-white p-6 transition ${
                  activeMetric === index ? "border-accredian-blue shadow-soft" : "border-slate-200"
                }`}
              >
                <p className="text-[28px] font-bold text-accredian-navy">
                  {metric.value}
                </p>
                <p className="mt-2 text-[14px] font-medium text-slate-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-3 top-6 z-10 rounded-lg bg-white p-3 shadow-soft sm:left-0">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-slate-500">
              Active cohorts
            </p>
            <p className="mt-1 text-[28px] font-bold text-accredian-navy">42</p>
            <div className="mt-3 h-2 w-32 rounded-full bg-slate-100">
              <div className="h-2 w-24 rounded-full bg-emerald-500" />
            </div>
          </div>
          <div className="relative min-h-[480px] overflow-hidden rounded-lg border border-blue-100 bg-white shadow-soft">
            <Image
              src="/images/enterprise-hero.png"
              alt="Enterprise learners collaborating with analytics dashboards"
              width={1200}
              height={850}
              className="h-full min-h-[480px] w-full object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-5 right-4 rounded-lg bg-[#0f2a5e] p-4 text-white shadow-soft sm:right-8">
            <p className="text-[13px] text-blue-100">Program health</p>
            <p className="mt-1 text-[28px] font-bold">A+</p>
          </div>
        </div>
      </div>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
