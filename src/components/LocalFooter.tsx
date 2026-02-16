import Image from "next/image";

const cities = [
  "Lawrence",
  "Methuen",
  "Haverhill",
  "Lowell",
  "Manchester",
  "Nashua",
  "Salem",
  "Worcester",
  "Boston",
  "Concord",
];

export default function LocalFooter() {
  return (
    <footer className="bg-[#114B5F] py-12 text-white">
      <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/Logo1.jpg"
              alt="TheHomeZilla"
              width={64}
              height={64}
              className="h-14 w-14 rounded-2xl object-cover ring-2 ring-white/20 sm:h-16 sm:w-16"
            />
            <h2 className="font-heading text-2xl font-bold">
              Buying Houses Across New England
            </h2>
          </div>
          <p className="text-sm text-white/80 sm:max-w-sm sm:text-right">
            Serving homeowners across Massachusetts and New Hampshire with fast,
            fair cash offers.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-white/90">
          {cities.map((city) => (
            <span
              key={city}
              className="rounded-full border border-white/20 px-3 py-1"
            >
              {city}
            </span>
          ))}
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-xs text-white/80">
          TheHomeZilla is a real estate investment group. We are not real estate
          agents and do not represent you. We buy properties for cash directly
          or through our buyer network.
        </div>
      </div>
    </footer>
  );
}
