import Script from "next/script";

export default function SchemaScript() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TheHomeZilla",
    description: "We buy houses for cash in New England.",
    areaServed: ["Massachusetts", "New Hampshire"],
    priceRange: "$$$",
    url: "https://thehomezilla.com",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
    ],
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
