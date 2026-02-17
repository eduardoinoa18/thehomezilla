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
  title: "Sell My House Fast MA & NH | TheHomeZilla - Cash Property Buyers",
  description:
    "Need to sell your house fast in Massachusetts or New Hampshire? We buy properties in any condition. No repairs, no fees, fair cash offers. Get your offer today.",
  keywords: [
    "sell house fast MA",
    "cash property buyers NH",
    "we buy properties Massachusetts",
    "sell property for cash",
    "sell house as is",
  ],
  authors: [{ name: "TheHomeZilla Team" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sell My House Fast MA & NH | TheHomeZilla - Cash Property Buyers",
    description:
      "Need to sell your house fast in Massachusetts or New Hampshire? We buy properties in any condition. No repairs, no fees, fair cash offers. Get your offer today.",
    type: "website",
    url: "https://thehomezilla.com",
    images: [
      {
        url: "/Logo1.jpg",
        width: 1200,
        height: 630,
        alt: "TheHomeZilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell My House Fast MA & NH | TheHomeZilla",
    description:
      "Get a fair cash offer in 24 hours. No repairs, no fees, and close on your timeline.",
    images: ["/Logo1.jpg"],
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
