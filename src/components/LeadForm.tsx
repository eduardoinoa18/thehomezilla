"use client";

import { CheckCircle } from "lucide-react";
import { useState } from "react";

type FormData = {
  address: string;
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  motivation: string;
};

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormData>({
    address: "",
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    motivation: "",
  });

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.address.trim()) {
      setError("Please enter a property address");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.phone || !formData.email) {
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
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStep(3);
    } catch (err) {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (step === 3) {
    return (
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle className="h-10 w-10 text-emerald-600" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-[#114B5F]">
          Offer Request Received!
        </h3>
        <p className="mt-4 text-base text-gray-700">
          We are analyzing{" "}
          <span className="font-semibold text-[#114B5F]">{formData.address}</span>{" "}
          right now. A specialist from TheHomeZilla team will text or call you
          within 24 hours.
        </p>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">
        <h3 className="font-heading text-xl font-bold text-[#114B5F] sm:text-2xl">
          Where should we send your offer?
        </h3>
        <form onSubmit={handleStep2Submit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Full Name *"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="h-12 w-full rounded-xl border border-gray-200 px-4 text-base text-gray-900 shadow-sm focus:border-[#114B5F] focus:outline-none focus:ring-2 focus:ring-[#114B5F]/30"
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone *"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="h-12 w-full rounded-xl border border-gray-200 px-4 text-base text-gray-900 shadow-sm focus:border-[#114B5F] focus:outline-none focus:ring-2 focus:ring-[#114B5F]/30"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-12 w-full rounded-xl border border-gray-200 px-4 text-base text-gray-900 shadow-sm focus:border-[#114B5F] focus:outline-none focus:ring-2 focus:ring-[#114B5F]/30"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="propertyType" className="sr-only">
              Property Type
            </label>
            <select
              id="propertyType"
              value={formData.propertyType}
              onChange={(e) =>
                setFormData({ ...formData, propertyType: e.target.value })
              }
              className="h-12 w-full rounded-xl border border-gray-200 px-4 text-base text-gray-900 shadow-sm focus:border-[#114B5F] focus:outline-none focus:ring-2 focus:ring-[#114B5F]/30"
            >
              <option value="">Select Property Type</option>
              <option value="Single Family">Single Family</option>
              <option value="Multi-Family">Multi-Family</option>
              <option value="Commercial / Mixed Use">
                Commercial / Mixed Use
              </option>
              <option value="Land / Other">Land / Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="motivation" className="sr-only">
              Why are you selling?
            </label>
            <textarea
              id="motivation"
              placeholder="Why are you selling? (Optional - helps us give a better offer)"
              value={formData.motivation}
              onChange={(e) =>
                setFormData({ ...formData, motivation: e.target.value })
              }
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm focus:border-[#114B5F] focus:outline-none focus:ring-2 focus:ring-[#114B5F]/30"
            />
          </div>

          {error && (
            <p className="text-sm font-medium text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-xl bg-[#114B5F] px-5 text-base font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#0d3b4a] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Lock In My Offer"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">
      <h3 className="font-heading text-xl font-bold text-[#114B5F] sm:text-2xl">
        Get Your Fair Cash Offer Today
      </h3>
      <form onSubmit={handleStep1Submit} className="mt-6">
        <div className="space-y-3">
          <label htmlFor="address-step1" className="sr-only">
            Property address
          </label>
          <input
            id="address-step1"
            type="text"
            placeholder="Enter Property Address..."
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="h-12 w-full rounded-xl border border-gray-200 px-4 text-base text-gray-900 shadow-sm focus:border-[#114B5F] focus:outline-none focus:ring-2 focus:ring-[#114B5F]/30"
          />
          {error && (
            <p className="text-sm font-medium text-red-600">{error}</p>
          )}
          <button
            type="submit"
            className="cta-glow h-12 w-full rounded-xl bg-[#F28F3B] px-5 text-base font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#e07f2f]"
          >
            Get My Cash Offer -&gt;
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-gray-600">
          No repairs. No fees. No obligation.
        </p>
      </form>
    </div>
  );
}
