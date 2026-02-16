import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thehomezilla.com"),
  title: "Sell My House Fast MA & NH | TheHomeZilla - Cash Home Buyers",
  description:
    "Need to sell your house fast in Massachusetts or New Hampshire? We buy houses in any condition. No repairs, no fees, fair cash offers. Get your offer today.",
  keywords: [
    "sell house fast MA",
    "cash home buyers NH",
    "we buy houses Massachusetts",
    "sell home for cash",
    "sell house as is",
  ],
  authors: [{ name: "TheHomeZilla Team" }],
  openGraph: {
    title: "Sell My House Fast MA & NH | TheHomeZilla - Cash Home Buyers",
    description:
      "Need to sell your house fast in Massachusetts or New Hampshire? We buy houses in any condition. No repairs, no fees, fair cash offers. Get your offer today.",
    type: "website",
    images: [
      {
        url: "/Logo1.jpg",
        width: 1200,
        height: 630,
        alt: "TheHomeZilla",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
