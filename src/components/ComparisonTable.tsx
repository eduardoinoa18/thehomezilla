import { AlertCircle, CheckCircle2 } from "lucide-react";

const listingPoints = [
  "Wait for financing approval",
  "Strict inspections (Commercial/Resi)",
  "High Broker Commissions (up to 10%)",
  "Months of uncertainty",
];

const zillaPoints = [
  "Cash & Creative Offers",
  "As-Is Condition",
  "Zero Commissions",
  "Flexible Closing",
];

export default function ComparisonTable() {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
            The Easiest Way to Sell Any Property
          </h2>
          <p className="text-base text-[#45494E] sm:text-lg">
            Compare the traditional listing path to a direct, no-stress cash
            offer.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-100 p-6 shadow-lg">
            <h3 className="font-heading text-lg font-semibold text-slate-700">
              Traditional Listing
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:text-base">
              {listingPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 text-slate-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-teal-700 bg-white p-6 shadow-lg md:scale-105">
            <h3 className="font-heading text-lg font-semibold text-[#114B5F]">
              TheHomeZilla Advantage
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700 sm:text-base">
              {zillaPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#114B5F]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
