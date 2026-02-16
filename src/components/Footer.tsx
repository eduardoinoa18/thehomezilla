import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/Logo1.jpg"
                alt="TheHomeZilla"
                width={72}
                height={72}
                className="h-16 w-16 rounded-2xl object-cover ring-2 ring-white/20"
              />
              <div>
                <p className="font-heading text-xl font-bold">TheHomeZilla</p>
                <p className="text-sm text-white/70">
                  Unlocking value in every square foot.
                </p>
              </div>
            </div>
            <p className="text-sm text-white/70">Service States: MA & NH</p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Active Markets</h3>
            <p className="mt-4 text-sm text-white/80">
              Buying Residential & Commercial assets across New England and
              beyond.
            </p>
          </div>

          <div className="space-y-3 text-sm text-white/80">
            <h3 className="font-heading text-lg font-semibold text-white">
              Contact
            </h3>
            <p>
              Phone: <span className="text-white">(978) 555-0123</span>
            </p>
            <p>
              Email: <span className="text-white">info@thehomezilla.com</span>
            </p>
            <p>
              Address: <span className="text-white">Lawrence, MA</span>
            </p>
            <div className="flex gap-4 text-xs text-white/70">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-white/70 sm:px-6">
           2026 TheHomeZilla. All rights reserved. Disclaimer: We are a private
          real estate investment firm. We are not real estate brokers. We buy
          properties for our own portfolio or in partnership with our network of
          investors.
        </div>
      </div>
    </footer>
  );
}
