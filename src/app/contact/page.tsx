export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about SOLCEF or our sponsorship program? We&apos;d love to
            hear from you.
          </p>

          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <a href="mailto:info@solcef.org" className="text-emerald-700 hover:underline">
                info@solcef.org
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Location</h3>
              <p>Lauderhill, FL</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Organization</h3>
              <p>Spirit Of Life Community Empowerment Foundation</p>
              <p className="text-sm text-gray-400">501(c)(3) • EIN: 45-5611617</p>
            </div>
          </div>
        </div>

        {/* TODO: Add contact form */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Send a Message</h2>
          <p className="text-gray-400 text-sm">Contact form coming soon.</p>
        </div>
      </div>
    </div>
  );
}
