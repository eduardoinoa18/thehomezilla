import { ArrowRight, Banknote, FileText, BadgeCheck } from "lucide-react";

const steps = [
  {
    title: "Submit Your Property",
    text: "Fill out our quick form with basic property details.",
    icon: FileText,
  },
  {
    title: "Receive Your Offer",
    text: "We evaluate your home and send a fair cash offer.",
    icon: BadgeCheck,
  },
  {
    title: "Close & Get Paid",
    text: "Choose your closing date and receive your funds.",
    icon: Banknote,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
          Simple 3-Step Process
        </h2>
        <div className="relative mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl bg-white p-6 text-center shadow-lg"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <step.icon className="h-6 w-6 text-[#114B5F]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{step.text}</p>
            </div>
          ))}

          <div className="pointer-events-none absolute left-1/3 top-1/2 hidden -translate-y-1/2 md:flex">
            <ArrowRight className="h-6 w-6 text-[#114B5F]/40" />
          </div>
          <div className="pointer-events-none absolute left-2/3 top-1/2 hidden -translate-y-1/2 md:flex">
            <ArrowRight className="h-6 w-6 text-[#114B5F]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
