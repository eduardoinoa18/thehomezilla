"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const successStories = [
  {
    image: "/success-property-1.svg",
    location: "Lowell, MA",
    timeline: "Closed in 14 days",
    saved: "$25,000+",
    description: "Residential home sold cash, no repairs needed",
  },
  {
    image: "/success-property-2.svg",
    location: "Manchester, NH",
    timeline: "Closed in 21 days",
    saved: "$18,500+",
    description: "Commercial multi-unit property sold as-is",
  },
  {
    image: "/success-property-3.svg",
    location: "Boston, MA",
    timeline: "Closed in 7 days",
    saved: "$35,000+",
    description: "Land development opportunity purchased quickly",
  },
];

const delayClasses = [
  "[animation-delay:0.12s]",
  "[animation-delay:0.2s]",
  "[animation-delay:0.28s]",
];

export default function SuccessStories() {
  return (
    <section className="bg-linear-to-b from-[#F9FAFB] to-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl space-y-3">
          <h2 className="reveal-up font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
            Recent Success Stories
          </h2>
          <p className="reveal-up reveal-delay-1 text-base text-[#45494E] sm:text-lg">
            Real results from real homeowners and property owners across MA & NH.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {successStories.map((story, idx) => (
            <div
              key={idx}
              className={`reveal-up ${delayClasses[idx % delayClasses.length]} group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src={story.image}
                  alt={story.location}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-lg font-bold text-[#114B5F]">
                    {story.location}
                  </h3>
                  <p className="text-sm text-[#F28F3B] font-semibold mt-1">
                    {story.timeline}
                  </p>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {story.description}
                </p>

                <div className="rounded-lg bg-linear-to-r from-[#114B5F]/5 to-[#F28F3B]/5 p-4">
                  <p className="text-xs text-gray-600 font-medium">
                    COMMISSION SAVED
                  </p>
                  <p className="text-2xl font-bold text-[#114B5F] mt-1">
                    {story.saved}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 text-[#4CAF50] font-medium text-sm">
                  <Check className="h-4 w-4" />
                  Cash offer received
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal-up mt-12 rounded-2xl bg-linear-to-r from-[#114B5F] to-[#0f3a4d] p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Get Your Free Cash Offer Today
          </h3>
          <p className="mt-2 text-[#E8F4F8]">
            Join hundreds of satisfied sellers. No obligation, no repairs needed.
          </p>
          <button
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="cta-glow mt-6 inline-block rounded-xl bg-[#F28F3B] px-8 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#E07C2C]"
          >
            Get My Offer Now
          </button>
        </div>
      </div>
    </section>
  );
}
