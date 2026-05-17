import Link from "next/link";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-emerald-900 text-white py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/images/haiti-landscape.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/80 to-emerald-900/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/25 text-amber-200 text-xs font-semibold uppercase tracking-widest mb-4">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto">
            Have questions about SOLCEF, our sponsorship program, or how you can
            get involved? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                Let&apos;s Talk
              </h2>
              <p className="text-stone-600 leading-relaxed mb-10">
                Whether you&apos;re interested in sponsoring a student, want to learn
                more about our work in Haiti, or have questions about making a
                donation — we&apos;re here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                    <a href="mailto:info@solcef.org" className="text-emerald-700 hover:text-emerald-600 transition-colors">
                      info@solcef.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Location</h3>
                    <p className="text-stone-600">Lauderhill, Florida</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M10.464 8.746c.227-.18.497-.296.786-.339.502-.076.945-.286 1.303-.62.353-.33.6-.753.71-1.216.114-.465.088-.957-.054-1.404a1.916 1.916 0 00-.322-.557 1.95 1.95 0 00-.51-.412 2.89 2.89 0 00-1.286-.576c-.496-.07-.998-.031-1.446.127-.445.158-.826.434-1.103.804-.282.377-.447.829-.469 1.3a1.888 1.888 0 00.119.793c.137.424.382.79.706 1.09.318.295.718.508 1.15.556.422.047.846-.019 1.216-.204z" />
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6.54c-.046.296-.06.56.047.788.106.228.291.384.486.487.2.105.44.154.657.167.222.013.436-.013.613-.062.18-.05.329-.13.442-.217.237-.184.372-.441.428-.707a1.34 1.34 0 00-.027-.58c-.08-.239-.225-.415-.408-.55a1.4 1.4 0 00-.53-.278 1.63 1.63 0 00-.733-.053c-.307.048-.573.16-.767.316-.199.159-.326.354-.408.566z" />
                      <path d="M12 12.75c-1.01 0-2 .166-2 .5 0 .56.82.75 2 .75s2-.19 2-.75c0-.334-.99-.5-2-.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Organization</h3>
                    <p className="text-stone-600">Spirit Of Life Community Empowerment Foundation</p>
                    <p className="text-sm text-stone-400">501(c)(3) Public Charity · EIN: 45-5611617</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form (mock) */}
            <div className="bg-stone-50 rounded-2xl p-8 md:p-10 border border-stone-100">
              <h2 className="text-xl font-bold text-stone-900 mb-2">Send a Message</h2>
              <p className="text-stone-500 text-sm mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Ready to Make a Difference?</h2>
          <p className="text-emerald-100/80 mb-6">
            Browse students available for sponsorship and change a life today.
          </p>
          <Link
            href="/sponsor"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-lg"
          >
            View Students
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
