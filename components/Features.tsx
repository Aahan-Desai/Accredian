"use client";

import { useState } from "react";

const features = [
  {
    title: "Outcome-led learning paths",
    description:
      "Role-based journeys map every learner to skills, assessments, projects, and measurable workplace outcomes.",
    badge: "Skill maps"
  },
  {
    title: "Live expert cohorts",
    description:
      "Instructor-led sessions, mentor clinics, and cohort nudges keep completion rates high across distributed teams.",
    badge: "Mentorship"
  },
  {
    title: "Enterprise analytics",
    description:
      "Track adoption, performance, completion, and capability growth with dashboards built for L&D leaders.",
    badge: "Dashboards"
  },
  {
    title: "Custom academies",
    description:
      "Configure learning academies for data, AI, engineering, product, sales, and leadership priorities.",
    badge: "Custom"
  }
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="bg-slate-50 py-24">
      <div className="section-shell">
        <div className="max-w-5xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-blue-600">
            Why Accredian Enterprise
          </p>
          <h2 className="mt-4 text-[clamp(32px,4vw,48px)] font-extrabold text-slate-900">
            A complete upskilling engine for modern teams
          </h2>
          <p className="mt-5 text-[18px] leading-[1.7] text-slate-600">
            Combine university-grade learning design with business-ready delivery, analytics, and
            learner support.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <button
              type="button"
              key={feature.title}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`rounded-xl border bg-white p-8 text-left transition hover:-translate-y-1 hover:shadow-soft ${
                activeIndex === index ? "border-accredian-blue shadow-soft" : "border-slate-200"
              }`}
            >
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold uppercase tracking-wide text-accredian-blue">
                {feature.badge}
              </span>
              <h3 className="mt-5 text-[20px] font-bold text-accredian-navy">{feature.title}</h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">{feature.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
