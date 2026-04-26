"use client";

import { FormEvent, useEffect, useState } from "react";
import type { LeadFormData } from "@/lib/types";

type LeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const initialForm: LeadFormData = {
  name: "",
  email: "",
  company: "",
  phone: ""
};

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [formData, setFormData] = useState<LeadFormData>(initialForm);
  const [errors, setErrors] = useState<Partial<LeadFormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const validate = () => {
    const nextErrors: Partial<LeadFormData> = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required";
    if (!formData.company.trim()) nextErrors.company = "Company is required";
    if (!formData.phone.trim()) nextErrors.phone = "Phone is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      setStatus("success");
      setFormData(initialForm);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const updateField = (field: keyof LeadFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-accredian-navy/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      <div className="w-full max-w-xl rounded-lg bg-white shadow-soft">
        <div className="flex items-start justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accredian-blue">
              Enterprise demo
            </p>
            <h2 id="lead-modal-title" className="mt-1 text-2xl font-bold text-accredian-navy">
              Talk to a learning advisor
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full text-2xl leading-none text-slate-500 transition hover:bg-slate-100 hover:text-accredian-navy"
            aria-label="Close lead form"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-5 py-5">
          {(["name", "email", "company", "phone"] as const).map((field) => (
            <label key={field} className="block">
              <span className="text-sm font-medium capitalize text-slate-700">{field}</span>
              <input
                value={formData[field]}
                onChange={(event) => updateField(field, event.target.value)}
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-accredian-blue focus:ring-4 focus:ring-blue-100"
                placeholder={
                  field === "company"
                    ? "Acme Technologies"
                    : field === "phone"
                      ? "+91 98765 43210"
                      : field === "email"
                        ? "you@company.com"
                        : "Your name"
                }
              />
              {errors[field] ? (
                <span className="mt-1 block text-sm text-red-600">{errors[field]}</span>
              ) : null}
            </label>
          ))}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-md bg-accredian-blue px-5 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Submitting..." : "Request consultation"}
          </button>

          {status === "success" ? (
            <p className="rounded-md bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              Thanks. Your request has been captured successfully.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              Something went wrong. Please try again.
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
