import { Building2, Home, Map, Store } from "lucide-react";

const types = [
  {
    title: "Houses & Condos",
    text: "Single-family, multi-family, or distressed rentals.",
    icon: Home,
  },
  {
    title: "Commercial",
    text: "Retail, office space, warehouses, and industrial.",
    icon: Building2,
  },
  {
    title: "Mixed-Use",
    text: "Storefronts with apartments above? We love them.",
    icon: Store,
  },
  {
    title: "Land & Development",
    text: "Raw land, lots, or tear-downs with potential.",
    icon: Map,
  },
];

export default function PropertyTypes() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
            We See Value Where Others Don&apos;t
          </h2>
          <p className="text-base text-[#45494E] sm:text-lg">
            From cozy homes to complex commercial buildings, we create exit
            strategies for any asset.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {types.map((type) => (
            <div
              key={type.title}
              className="rounded-2xl border border-slate-100 bg-[#F9FAFB] p-6 shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <type.icon className="h-6 w-6 text-[#114B5F]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {type.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{type.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
