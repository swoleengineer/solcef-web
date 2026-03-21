export default function SponsorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Sponsor a Student</h1>
      <p className="text-lg text-gray-600 mb-12">
        Choose a student to sponsor and make a direct impact on their education
        and future. All donations are tax-deductible (EIN: 45-5611617).
      </p>

      {/* TODO: Student cards grid — pull from database */}
      <div className="bg-gray-50 rounded-xl p-12 text-center">
        <p className="text-gray-400 text-lg mb-4">
          Student profiles are being set up. Check back soon!
        </p>
        <p className="text-gray-500">
          In the meantime, reach out to us at{" "}
          <a href="mailto:info@solcef.org" className="text-emerald-700 hover:underline">
            info@solcef.org
          </a>{" "}
          to learn about sponsorship opportunities.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Choose a Student", desc: "Browse profiles and pick a student whose story resonates with you." },
            { step: "2", title: "Set Up Sponsorship", desc: "Choose a monthly amount and set up secure, recurring payments via Stripe." },
            { step: "3", title: "Stay Connected", desc: "Receive updates, photos, and progress reports about your sponsored student." },
          ].map((item) => (
            <div key={item.step} className="p-6 rounded-xl border border-gray-200">
              <div className="w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
