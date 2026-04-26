"use client";

import { useMemo, useState } from "react";
import type { Program } from "@/lib/types";

const programs: Program[] = [
  {
    title: "Applied Data Science Academy",
    category: "Data",
    duration: "16 weeks",
    description: "Hands-on analytics, machine learning, experimentation, and storytelling projects.",
    outcomes: ["Python analytics", "ML models", "Business dashboards"]
  },
  {
    title: "Generative AI for Business Teams",
    category: "AI",
    duration: "8 weeks",
    description: "Practical AI workflows, prompt design, automation, governance, and productivity use cases.",
    outcomes: ["AI adoption", "Workflow automation", "Risk controls"]
  },
  {
    title: "Product Management Accelerator",
    category: "Product",
    duration: "12 weeks",
    description: "Discovery, prioritization, metrics, roadmap planning, and stakeholder communication.",
    outcomes: ["Product strategy", "Experimentation", "Roadmaps"]
  },
  {
    title: "Technology Leadership Program",
    category: "Leadership",
    duration: "10 weeks",
    description: "Engineering execution, architecture decisions, team rituals, and executive communication.",
    outcomes: ["Delivery health", "Team systems", "Decision making"]
  }
];

const categories = ["All", "Data", "AI", "Product", "Leadership"];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrograms = useMemo(() => {
    if (activeCategory === "All") return programs;
    return programs.filter((program) => program.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="programs" className="bg-slate-50 py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-5xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-blue-600">
              Programs and courses
            </p>
            <h2 className="mt-4 text-[clamp(32px,4vw,48px)] font-extrabold text-slate-900">
              High-impact academies for priority business capabilities
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-base font-semibold transition ${
                  activeCategory === category
                    ? "bg-accredian-blue text-white"
                    : "bg-white text-slate-600 hover:bg-blue-50 hover:text-accredian-blue"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {filteredPrograms.map((program) => (
            <article
              key={program.title}
              className="rounded-xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold uppercase tracking-wide text-accredian-blue">
                  {program.category}
                </span>
                <span className="text-base font-semibold text-slate-500">{program.duration}</span>
              </div>
              <h3 className="mt-5 text-[20px] font-bold text-accredian-navy">{program.title}</h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">{program.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {program.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="rounded-md border border-slate-200 px-3 py-1 text-base font-medium text-slate-600"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
