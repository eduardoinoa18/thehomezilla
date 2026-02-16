import ComparisonTable from "@/components/ComparisonTable";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MidPageLeadForm from "@/components/MidPageLeadForm";
import Navbar from "@/components/Navbar";
import PropertyTypes from "@/components/PropertyTypes";
import SchemaMarkup from "@/components/SchemaMarkup";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import TrustIndicators from "@/components/TrustIndicators";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SchemaMarkup />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <TrustIndicators />
        <WhyChooseUs />
        <PropertyTypes />
        <ComparisonTable />
        <HowItWorks />
        <Testimonials />
        <MidPageLeadForm />
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
}
