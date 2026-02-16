const rows = [
  { label: "Fees", zilla: "$0 Fees", traditional: "6% Commission" },
  { label: "Repairs", zilla: "No Repairs Needed", traditional: "Costly Repairs" },
  { label: "Timeline", zilla: "7-14 Days", traditional: "60-90+ Days" },
  { label: "Showings", zilla: "No Showings", traditional: "Open Houses" },
  { label: "Control", zilla: "You Pick Closing Date", traditional: "Uncertain Closing" },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
            Why Homeowners Choose TheHomeZilla
          </h2>
          <p className="text-base text-[#45494E] sm:text-lg">
            Sell as-is. Skip repairs, fees, and months of waiting.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#114B5F]/20 bg-[#114B5F]/10 p-6">
            <h3 className="font-heading text-xl font-bold text-[#114B5F]">
              TheHomeZilla Offer
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#114B5F] sm:text-base">
              {rows.map((row) => (
                <li key={row.label} className="flex items-center justify-between">
                  <span className="font-semibold">{row.label}</span>
                  <span>{row.zilla}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-gray-800">
              Traditional Agent
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 sm:text-base">
              {rows.map((row) => (
                <li key={row.label} className="flex items-center justify-between">
                  <span className="font-semibold">{row.label}</span>
                  <span>{row.traditional}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#lead-form"
            className="inline-flex items-center rounded-full bg-[#F28F3B] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e07f2f]"
          >
            Get My Cash Offer
          </a>
        </div>
      </div>
    </section>
  );
}
