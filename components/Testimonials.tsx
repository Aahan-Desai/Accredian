"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/lib/types";

const testimonials: Testimonial[] = [
  {
    quote:
      "Accredian helped us move from one-off training to structured academies with visible progress metrics.",
    name: "Priya Menon",
    role: "Head of Learning",
    company: "Fintech Enterprise"
  },
  {
    quote:
      "The cohort format, mentors, and applied projects made the AI program useful for teams beyond engineering.",
    name: "Rahul Kapoor",
    role: "VP, Business Transformation",
    company: "Retail Group"
  },
  {
    quote:
      "We finally had a clean view of learning adoption, capability gaps, and manager-level engagement.",
    name: "Ananya Rao",
    role: "Chief People Officer",
    company: "Technology Services"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-blue-600">
            Testimonials
          </p>
          <h2 className="mt-4 text-[clamp(32px,4vw,48px)] font-extrabold text-slate-900">
            Built for teams that need learning to show up in performance
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-soft sm:p-10">
          <p className="text-3xl font-semibold leading-[1.45] text-accredian-navy">
            “{testimonials[activeIndex].quote}”
          </p>
          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-bold text-accredian-navy">{testimonials[activeIndex].name}</p>
              <p className="text-base text-slate-500">
                {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
              </p>
            </div>
            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition ${
                    activeIndex === index ? "w-8 bg-accredian-blue" : "w-2.5 bg-slate-300"
                  }`}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
