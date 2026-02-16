import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "They made the process easy and fast. We closed on our schedule with zero repairs.",
    name: "Maria R.",
    city: "Lowell, MA",
  },
  {
    quote:
      "Clear communication and a fair offer. Exactly what we needed during a stressful time.",
    name: "James K.",
    city: "Manchester, NH",
  },
  {
    quote:
      "Quick offer, no commissions, and the closing was smooth. Highly recommended.",
    name: "Samantha T.",
    city: "Worcester, MA",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-base text-[#45494E] sm:text-lg">
            Trusted by homeowners across Massachusetts and New Hampshire.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-2xl bg-[#F9FAFB] p-6 shadow-lg">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-700">"{item.quote}"</p>
              <div className="mt-4 text-sm font-semibold text-gray-900">
                {item.name}
              </div>
              <div className="text-xs text-gray-500">{item.city}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
