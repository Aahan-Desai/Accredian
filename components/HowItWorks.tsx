"use client";

import { useState } from "react";

const steps = [
  {
    title: "Diagnose capability gaps",
    text: "Identify priority roles, skill levels, and business outcomes with a structured discovery sprint."
  },
  {
    title: "Design the academy",
    text: "Curate programs, mentors, projects, learning hours, and success metrics for your teams."
  },
  {
    title: "Launch guided cohorts",
    text: "Run live sessions, assignments, discussion circles, and nudges with learner success support."
  },
  {
    title: "Measure impact",
    text: "Review dashboards, completion trends, assessments, and project evidence with stakeholders."
  }
];

export default function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-blue-600">
            How it works
          </p>
          <h2 className="mt-4 text-[clamp(32px,4vw,48px)] font-extrabold text-slate-900">
            From talent strategy to measurable learning outcomes
          </h2>
          <p className="mt-5 text-[18px] leading-[1.7] text-slate-600">
            Accredian Enterprise partners with your HR, business, and L&D teams to turn training
            intent into repeatable capability programs.
          </p>
        </div>

        <div className="grid gap-5">
          {steps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              onClick={() => setSelectedStep(index)}
              className={`flex gap-5 rounded-xl border p-8 text-left transition hover:border-accredian-blue hover:bg-blue-50/60 ${
                selectedStep === index ? "border-accredian-blue bg-blue-50" : "border-slate-200"
              }`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accredian-blue text-base font-bold text-white">
                {index + 1}
              </span>
              <span>
                <span className="block text-[20px] font-bold text-accredian-navy">{step.title}</span>
                <span className="mt-2 block text-[15px] leading-[1.7] text-slate-600">{step.text}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
