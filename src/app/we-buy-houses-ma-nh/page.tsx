import type { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import Navbar from "@/components/Navbar";
import SchemaMarkup from "@/components/SchemaMarkup";
import TrustIndicators from "@/components/TrustIndicators";

export const metadata: Metadata = {
  title: "We Buy Houses in MA & NH | Fast Cash Offers | TheHomeZilla",
  description:
    "Looking for a fast cash home buyer in Massachusetts or New Hampshire? TheHomeZilla buys houses as-is with no fees and flexible closing dates.",
  alternates: {
    canonical: "/we-buy-houses-ma-nh",
  },
  openGraph: {
    title: "We Buy Houses in MA & NH | Fast Cash Offers | TheHomeZilla",
    description:
      "Get a fair cash offer in 24 hours. No repairs, no commissions, and close on your timeline in MA and NH.",
    url: "https://thehomezilla.com/we-buy-houses-ma-nh",
    type: "website",
    images: [
      {
        url: "/Logo1.jpg",
        width: 1200,
        height: 630,
        alt: "TheHomeZilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Buy Houses in MA & NH | TheHomeZilla",
    description:
      "Sell your house as-is for cash. No fees, no repairs, close fast in Massachusetts and New Hampshire.",
    images: ["/Logo1.jpg"],
  },
};

const cities = [
  "Boston",
  "Worcester",
  "Springfield",
  "Lowell",
  "Lawrence",
  "Haverhill",
  "Methuen",
  "Chelsea",
  "Cambridge",
  "Quincy",
  "Manchester",
  "Nashua",
  "Concord",
  "Salem",
  "Derry",
  "Portsmouth",
];

const benefits = [
  {
    title: "Cash Offer in 24 Hours",
    text: "Get a fair, data-driven offer quickly without waiting on banks or agents.",
  },
  {
    title: "Sell As-Is",
    text: "No repairs, cleanups, or staging. We buy houses in any condition.",
  },
  {
    title: "No Fees or Commissions",
    text: "You keep more of your equity with zero agent fees and no hidden costs.",
  },
  {
    title: "Flexible Closing",
    text: "Pick a closing date that works for you, from fast to flexible.",
  },
];

const delayClasses = [
  "[animation-delay:0.12s]",
  "[animation-delay:0.2s]",
  "[animation-delay:0.28s]",
  "[animation-delay:0.36s]",
  "[animation-delay:0.44s]",
  "[animation-delay:0.52s]",
  "[animation-delay:0.6s]",
  "[animation-delay:0.68s]",
];

export default function WeBuyHousesPage() {
  return (
    <div className="min-h-screen">
      <SchemaMarkup />
      <Navbar />
      <main className="pt-16">
        <section className="relative overflow-hidden bg-linear-to-br from-[#0b2f3c] via-[#114B5F] to-[#0f3a4d] py-20 text-white">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="hero-orb animate-float absolute -left-16 top-10 h-52 w-52 rounded-full" />
            <div className="hero-orb animate-drift absolute right-0 top-16 h-64 w-64 rounded-full" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl space-y-6">
              <p className="reveal-up text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Massachusetts & New Hampshire
              </p>
              <h1 className="reveal-up reveal-delay-1 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
                We Buy Houses Fast in MA & NH
              </h1>
              <p className="reveal-up reveal-delay-2 text-base text-white/85 sm:text-lg">
                Get a fair cash offer in 24 hours, sell as-is, and close on your
                timeline. TheHomeZilla makes selling simple and stress-free.
              </p>
              <div className="reveal-up reveal-delay-3 flex flex-wrap gap-3">
                <a
                  href="#lead-form"
                  className="cta-glow inline-flex items-center rounded-full bg-[#F28F3B] px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#e07f2f]"
                >
                  Get My Cash Offer
                </a>
                <a
                  href="tel:+19785550123"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Call (978) 555-0123
                </a>
              </div>
            </div>

            <div className="reveal-up reveal-delay-2 w-full max-w-lg rounded-3xl bg-white/10 p-6 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className={`reveal-up ${delayClasses[index % delayClasses.length]} rounded-2xl bg-white/10 p-4`}
                  >
                    <h3 className="text-sm font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-xs text-white/80">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <TrustIndicators />

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="reveal-up font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
                Cities We Serve Across MA & NH
              </h2>
              <p className="reveal-up reveal-delay-1 text-base text-[#45494E] sm:text-lg">
                From major metros to growing suburbs, we buy houses throughout
                Massachusetts and New Hampshire.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {cities.map((city, index) => (
                <div
                  key={city}
                  className={`reveal-up ${delayClasses[index % delayClasses.length]} rounded-xl bg-[#F9FAFB] px-4 py-3 text-sm font-semibold text-[#114B5F] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md`}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shine bg-[#F9FAFB] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="reveal-up font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
                Sell Your House As-Is with Confidence
              </h2>
              <p className="reveal-up reveal-delay-1 text-base text-[#45494E] sm:text-lg">
                We buy houses in any condition, including inherited properties,
                rentals with tenants, or homes that need repairs.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`reveal-up ${delayClasses[index % delayClasses.length]} rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <h3 className="text-lg font-semibold text-[#114B5F]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="lead-form" className="bg-white py-16" tabIndex={-1}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div className="space-y-4">
                <h2 className="reveal-up font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
                  Request Your Free Cash Offer
                </h2>
                <p className="reveal-up reveal-delay-1 text-base text-[#45494E] sm:text-lg">
                  Tell us about your property and get a fair offer without
                  pressure, fees, or repairs.
                </p>
                <ul className="reveal-up reveal-delay-2 space-y-2 text-sm text-gray-600">
                  <li>No obligation or commitment.</li>
                  <li>Local MA & NH buyers.</li>
                  <li>Close fast or on your schedule.</li>
                </ul>
              </div>
              <div className="reveal-up reveal-delay-3">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
