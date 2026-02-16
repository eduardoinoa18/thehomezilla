import { CheckCircle2 } from "lucide-react";

const items = [
  "Local MA & NH Buyers",
  "Fast Closings",
  "Secure Transactions",
  "Transparent Process",
];

export default function TrustIndicators() {
  return (
    <section className="bg-white py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-[#114B5F] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span className="font-semibold">{item}</span>
          </div>
        ))}
        <span className="text-xs font-semibold text-[#114B5F]/80">
          Fully Compliant & Professional
        </span>
      </div>
    </section>
  );
}
