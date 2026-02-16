const areas = [
  "Boston",
  "Worcester",
  "Lowell",
  "Springfield",
  "Manchester",
  "Nashua",
  "Merrimack Valley",
  "Southern NH",
];

export default function ServiceAreas() {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
            We Buy Properties Throughout MA & NH
          </h2>
          <p className="text-base text-[#45494E] sm:text-lg">
            From city centers to small towns, we cover Massachusetts and New
            Hampshire.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area}
              className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#114B5F] shadow-sm"
            >
              {area}
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
