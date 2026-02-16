export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TheHomeZilla - We Buy Houses MA & NH",
    description: "Cash Home Buyers in Massachusetts and New Hampshire.",
    image: "https://thehomezilla.com/Logo1.jpg",
    address: {
      "@type": "PostalAddress",
      addressRegion: "MA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.70",
      longitude: "-71.16",
    },
    areaServed: [
      "Lawrence",
      "Methuen",
      "Haverhill",
      "Lowell",
      "Manchester",
      "Nashua",
    ],
    priceRange: "$$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
