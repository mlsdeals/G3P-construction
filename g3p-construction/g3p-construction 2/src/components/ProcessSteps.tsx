const steps = [
  { num: "01", title: "Discovery", desc: "We learn the property, the goals, and the constraints — budget, timeline, and use case." },
  { num: "02", title: "Site Walk", desc: "A walkthrough to confirm condition, scope, and anything that changes the plan." },
  { num: "03", title: "Scope & Estimate", desc: "A written scope and estimate — what's being done, what it costs, and why." },
  { num: "04", title: "Pre-Construction", desc: "Permitting, scheduling, and material selections locked before work begins." },
  { num: "05", title: "Construction", desc: "Managed execution with daily job-site discipline and clear communication." },
  { num: "06", title: "Quality Control", desc: "Work is checked against scope at every phase, not just at the end." },
  { num: "07", title: "Final Walkthrough", desc: "A line-by-line review against the original scope before we call it done." },
  { num: "08", title: "Project Completion", desc: "Documentation, close-out, and a finished product we're proud to put our name on." },
];

export default function ProcessSteps() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-100">
      {steps.map((step) => (
        <div key={step.num} className="bg-paper-50 p-7">
          <span className="font-display text-3xl text-gold-600">{step.num}</span>
          <h3 className="mt-3 text-sm font-medium tracking-[0.14em] uppercase text-ink-950">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
