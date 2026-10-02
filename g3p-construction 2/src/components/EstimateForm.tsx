"use client";

import { useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const PROJECT_TYPES = [
  "General Contracting",
  "Home Remodeling",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Investment Property Renovation",
  "Other",
];

const BUDGETS = ["Under $25k", "$25k–$75k", "$75k–$150k", "$150k–$300k", "$300k+", "Not sure yet"];

type Status = "idle" | "submitting" | "success" | "error";

export default function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const started = useRef(false);

  function handleFocusOnce() {
    if (started.current) return;
    started.current = true;
    trackEvent("estimate_form_started");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      trackEvent("estimate_form_submitted");
      form.reset();
    } catch (err) {
      console.error("Estimate form submission failed:", err);
      setStatus("error");
      setErrorMsg("Something went wrong sending your request. Please call or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold-500 bg-gold-100/40 p-8">
        <h3 className="font-display text-2xl text-ink-950">Request received.</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">
          Thanks for telling us about your project. We&rsquo;ll follow up shortly with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFocusOnce} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Email" name="email" type="email" required />
        <Field label="Project Address / ZIP" name="projectAddress" />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <SelectField label="Project Type" name="projectType" options={PROJECT_TYPES} required />
        <SelectField label="Approximate Budget" name="approxBudget" options={BUDGETS} />
      </div>
      <Field label="Desired Start Date" name="desiredStart" />
      <div>
        <label className="block text-xs font-medium tracking-[0.1em] uppercase text-ink-600 mb-2">
          Project Description
        </label>
        <textarea
          name="description"
          rows={4}
          className="w-full border border-ink-200 bg-paper-50 px-4 py-3 text-sm text-ink-950 focus:border-gold-500 outline-none"
          placeholder="Tell us what you're working with — scope, condition, goals."
        />
      </div>

      {status === "error" && <p className="text-sm text-red-700">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-ink-950 text-paper-50 text-[13px] font-medium tracking-[0.14em] uppercase hover:bg-gold-700 transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request a Project Estimate"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium tracking-[0.1em] uppercase text-ink-600 mb-2">
        {label} {required && <span className="text-gold-700">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-ink-200 bg-paper-50 px-4 py-3 text-sm text-ink-950 focus:border-gold-500 outline-none"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium tracking-[0.1em] uppercase text-ink-600 mb-2">
        {label} {required && <span className="text-gold-700">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full border border-ink-200 bg-paper-50 px-4 py-3 text-sm text-ink-950 focus:border-gold-500 outline-none"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
