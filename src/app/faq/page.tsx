import Link from "next/link";

const faqs = [
  {
    q: "What is SOLCEF?",
    a: "SOLCEF (Spirit Of Life Community Empowerment Foundation) is a registered 501(c)(3) nonprofit organization dedicated to providing access to quality education for children in Haiti. We partner with local schools and connect US-based sponsors directly with students."
  },
  {
    q: "How does student sponsorship work?",
    a: "You choose a student to sponsor and set up a monthly contribution starting at $25/month. Your donation covers tuition, school supplies, uniforms, daily meals, and basic health needs. You'll receive updates and photos of your sponsored student throughout the year."
  },
  {
    q: "Is my donation tax-deductible?",
    a: "Yes. SOLCEF is a registered 501(c)(3) public charity (EIN: 45-5611617). All donations are tax-deductible to the full extent of US law. You'll receive a donation receipt for your records."
  },
  {
    q: "Where does my money go?",
    a: "Over 95% of donations go directly to program costs — tuition, school supplies, uniforms, meals, and teacher support. We keep administrative costs minimal to maximize impact for the students."
  },
  {
    q: "Can I choose which student to sponsor?",
    a: "Yes. Browse our student profiles and select the child you'd like to sponsor. Each profile shares their age, grade, and a little about their personality and dreams."
  },
  {
    q: "Can I communicate with my sponsored student?",
    a: "Absolutely. We encourage sponsors to write letters and send photos. We facilitate the exchange and will deliver your messages to your sponsored student. It's a rewarding way to build a real connection."
  },
  {
    q: "How long does a sponsorship last?",
    a: "We ask for a minimum commitment of one year, but many sponsors choose to continue supporting the same student through their entire education journey — from kindergarten through 9th grade."
  },
  {
    q: "What if I need to cancel my sponsorship?",
    a: "You can pause or cancel at any time. If you cancel, your student will be matched with a new sponsor. We appreciate advance notice if possible so we can ensure continuity for the child."
  },
  {
    q: "What percentage of donations go to the students?",
    a: "Over 95% of every dollar goes directly to program services. We are run by volunteers and keep overhead low so your contribution has maximum impact."
  },
  {
    q: "How do I get started?",
    a: "Browse our student profiles, choose a sponsorship level that works for you, and click 'Get Started.' You'll set up secure recurring payment through our platform and we'll handle the rest."
  }
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-emerald-900 text-white py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/images/faq-hero.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/80 to-emerald-900/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/25 text-amber-200 text-xs font-semibold uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto">
            Everything you need to know about sponsoring a student through SOLCEF.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-stone-200 overflow-hidden transition-all duration-200 open:shadow-md open:border-emerald-200"
              >
                <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer text-stone-900 font-semibold hover:bg-stone-50 transition-colors list-none">
                  <span className="pr-4">{item.q}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-stone-600 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-50 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-stone-600 mb-8 text-lg">
            We're happy to help. Reach out and we'll get back to you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:from-emerald-500 hover:to-emerald-600 transition-all"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
