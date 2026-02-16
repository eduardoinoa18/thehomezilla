import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-[url('/hero-placeholder.svg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#114B5F]/85" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center gap-8 px-4 pb-16 pt-24 sm:px-6">
        <div className="max-w-2xl space-y-4 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Massachusetts & New Hampshire
          </p>
          <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Sell Your Property in MA or NH Without the Headache.
          </h1>
          <p className="text-base text-white/85 sm:text-lg">
            We buy properties in ANY condition. No repairs. No fees. Just a fair
            cash offer.
          </p>
        </div>

        <div id="lead-form">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
