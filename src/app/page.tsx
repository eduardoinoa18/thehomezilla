import ComparisonTable from "@/components/ComparisonTable";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import PropertyTypes from "@/components/PropertyTypes";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SchemaMarkup />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <PropertyTypes />
        <ComparisonTable />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
