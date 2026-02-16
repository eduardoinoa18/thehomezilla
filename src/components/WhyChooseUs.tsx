import {
  BadgeDollarSign,
  CalendarClock,
  Clock,
  Wrench,
} from "lucide-react";

const benefits = [
  {
    title: "Fast Offers",
    text: "Receive a no-obligation cash offer within 24 hours.",
    icon: Clock,
  },
  {
    title: "No Repairs Needed",
    text: "Sell your home exactly as-is. We handle everything.",
    icon: Wrench,
  },
  {
    title: "No Fees or Commissions",
    text: "No agents. No hidden costs. You keep more money.",
    icon: BadgeDollarSign,
  },
  {
    title: "Close On Your Schedule",
    text: "Pick your closing date. We adapt to you.",
    icon: CalendarClock,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
            Why Homeowners in MA & NH Choose Us
          </h2>
          <p className="text-base text-[#45494E] sm:text-lg">
            Local buyers focused on speed, clarity, and real solutions.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl bg-[#F9FAFB] p-6 shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <benefit.icon className="h-6 w-6 text-[#114B5F]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="#lead-form"
            className="inline-flex items-center rounded-full bg-[#F28F3B] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e07f2f]"
          >
            Get My Cash Offer -&gt;
          </a>
        </div>
      </div>
    </section>
  );
}
