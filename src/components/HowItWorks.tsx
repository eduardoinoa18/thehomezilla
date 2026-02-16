import { Banknote, Phone, Search } from "lucide-react";

const steps = [
  {
    title: "1. Call or Click",
    text: "Enter your address above or call us at (978) 555-0123.",
    icon: Phone,
    color: "text-[#F28F3B]",
  },
  {
    title: "2. Get a Fair Offer",
    text: "We analyze the market and give you a no-obligation cash offer.",
    icon: Search,
    color: "text-[#114B5F]",
  },
  {
    title: "3. Cash in Hand",
    text: "Pick your closing date. We close at a local title company.",
    icon: Banknote,
    color: "text-emerald-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
          Sell Your House in 3 Easy Steps
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl bg-white p-6 text-center shadow-lg"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <step.icon className={`h-6 w-6 ${step.color}`} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
