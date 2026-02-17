import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo1.jpg"
            alt="TheHomeZilla"
            width={72}
            height={72}
            priority
            className="h-14 w-14 rounded-2xl object-cover shadow-md ring-2 ring-[#114B5F]/25 sm:h-16 sm:w-16"
          />
          <div>
            <span className="font-heading text-2xl font-extrabold tracking-tight text-[#114B5F] sm:text-3xl">
              TheHomeZilla
            </span>
            <p className="text-xs text-gray-600 font-medium">🌐 English • Español • Português • Italiano</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="#lead-form"
            className="cta-glow rounded-full bg-[#114B5F] px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#0d3b4a]"
          >
            Get Offer
          </a>
          <a
            href="tel:+19785550123"
            className="hidden items-center gap-2 rounded-full bg-[#F28F3B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e07f2f] sm:inline-flex"
            aria-label="Call TheHomeZilla"
          >
            Call Now (978) 555-0123
          </a>
          <a
            href="tel:+19785550123"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#114B5F] text-white shadow-sm sm:hidden"
            aria-label="Call TheHomeZilla"
          >
            <PhoneCall className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
