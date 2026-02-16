"use client";

import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
};

export default function MidPageLeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.phone || !formData.email || !formData.address) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: formData.address,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          propertyType: "",
          motivation: "",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-[#F9FAFB] p-8 shadow-xl md:p-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
              Get Your No-Obligation Cash Offer Today
            </h2>
            <p className="text-base text-[#45494E] sm:text-lg">
              Tell us a little about the property and we will respond quickly.
            </p>
          </div>

          {success ? (
            <p className="mt-6 text-sm font-semibold text-emerald-600">
              Thanks. We received your request and will contact you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 rounded-xl border border-gray-200 px-4 text-base text-gray-900 shadow-sm focus:border-[#114B5F] focus:outline-none focus:ring-2 focus:ring-[#114B5F]/30"
              />
              <input
                type="tel"
                placeholder="Phone *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 rounded-xl border border-gray-200 px-4 text-base text-gray-900 shadow-sm focus:border-[#114B5F] focus:outline-none focus:ring-2 focus:ring-[#114B5F]/30"
              />
              <input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 rounded-xl border border-gray-200 px-4 text-base text-gray-900 shadow-sm focus:border-[#114B5F] focus:outline-none focus:ring-2 focus:ring-[#114B5F]/30"
              />
              <input
                type="text"
                placeholder="Property Address *"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="h-12 rounded-xl border border-gray-200 px-4 text-base text-gray-900 shadow-sm focus:border-[#114B5F] focus:outline-none focus:ring-2 focus:ring-[#114B5F]/30"
              />

              {error && (
                <p className="text-sm font-medium text-red-600 md:col-span-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="h-12 rounded-xl bg-[#F28F3B] px-6 text-base font-semibold text-white shadow-sm transition hover:bg-[#e07f2f] disabled:opacity-50 md:col-span-2"
              >
                {loading ? "Sending..." : "Get My Offer Now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
