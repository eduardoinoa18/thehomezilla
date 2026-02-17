const faqs = [
  {
    question: "How fast can I sell my house in Massachusetts or New Hampshire?",
    answer:
      "Most sellers receive a fair cash offer within 24 hours and can close in as little as 7 to 21 days, depending on your timeline.",
  },
  {
    question: "Do you buy houses as-is?",
    answer:
      "Yes. We buy properties in any condition, so you do not need to make repairs, clean out, or stage the home.",
  },
  {
    question: "Are there any fees or commissions?",
    answer:
      "No. There are no agent fees or commissions when you sell directly to TheHomeZilla.",
  },
  {
    question: "What kinds of properties do you buy?",
    answer:
      "We buy single-family homes, multi-family properties, mixed-use buildings, commercial assets, and land across MA and NH.",
  },
  {
    question: "How do you determine the cash offer?",
    answer:
      "We evaluate recent sales, property condition, and market trends to create a fair, data-driven offer.",
  },
  {
    question: "Can I choose my closing date?",
    answer:
      "Yes. We let you pick a closing date that fits your schedule, whether it is fast or flexible.",
  },
];

const delayClasses = [
  "[animation-delay:0.12s]",
  "[animation-delay:0.2s]",
  "[animation-delay:0.28s]",
  "[animation-delay:0.36s]",
  "[animation-delay:0.44s]",
  "[animation-delay:0.52s]",
];

export default function FaqSection() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-white py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="reveal-up font-heading text-3xl font-extrabold text-[#114B5F] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="reveal-up reveal-delay-1 text-base text-[#45494E] sm:text-lg">
            Quick answers to common questions about selling your property fast in MA and NH.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`reveal-up ${delayClasses[index % delayClasses.length]} rounded-2xl border border-slate-100 bg-[#F9FAFB] p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <h3 className="text-lg font-semibold text-[#114B5F]">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#lead-form"
            className="cta-glow inline-flex items-center rounded-full bg-[#F28F3B] px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#e07f2f]"
          >
            Get My Cash Offer -&gt;
          </a>
        </div>
      </div>
    </section>
  );
}
