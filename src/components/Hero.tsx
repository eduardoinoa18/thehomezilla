import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-[url('/hero-home.svg')] bg-cover bg-center">
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0b2f3c]/70 via-[#114B5F]/70 to-[#114B5F]/80"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center gap-8 px-4 pb-16 pt-24 sm:px-6">
        <div className="max-w-2xl space-y-4 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Massachusetts & New Hampshire
          </p>
          <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Sell Your House Fast in MA & NH - Get a Fair Cash Offer in 24 Hours
          </h1>
          <p className="text-base text-white/85 sm:text-lg">
            No Repairs. No Commissions. Close On Your Timeline.
          </p>
        </div>

        <div id="lead-form" className="space-y-3">
          <LeadForm />
          <a
            href="tel:+19785550123"
            className="inline-flex items-center text-sm font-semibold text-white/90 underline-offset-4 hover:text-white hover:underline"
          >
            Or Call Us Now: (978) 555-0123
          </a>
        </div>
      </div>
    </section>
  );
}
