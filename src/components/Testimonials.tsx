import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "They made the process easy and fast. We closed on our schedule with zero repairs.",
    name: "Maria R.",
    city: "Lowell, MA",
    avatar: "/avatar-1.svg",
  },
  {
    quote:
      "Clear communication and a fair offer. Exactly what we needed during a stressful time.",
    name: "James K.",
    city: "Manchester, NH",
    avatar: "/avatar-2.svg",
  },
  {
    quote:
      "Quick offer, no commissions, and the closing was smooth. Highly recommended.",
    name: "Samantha T.",
    city: "Worcester, MA",
    avatar: "/avatar-3.svg",
  },
  {
    quote:
      "Exceptional service from start to finish. They handled everything professionally and paid us on time.",
    name: "David L.",
    city: "Boston, MA",
    avatar: "/avatar-4.svg",
  },
  {
    quote:
      "I was stressed about my property situation, but TheHomeZilla made it painless. Best decision ever.",
    name: "Patricia S.",
    city: "Nashua, NH",
    avatar: "/avatar-5.svg",
  },
  {
    quote:
      "Fair price, fast closing, and zero hassle. They are the real deal. I'd recommend them to anyone.",
    name: "Robert M.",
    city: "Springfield, MA",
    avatar: "/avatar-6.svg",
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

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-2xl bg-gradient-to-br from-[#F9FAFB] to-[#FFFFFF] p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">"{item.quote}"</p>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-12 w-12 flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500">{item.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
