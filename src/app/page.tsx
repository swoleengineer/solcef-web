import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Haiti Through Education
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-10">
            SOLCEF runs a school in Haiti and connects US-based sponsors with
            individual students to fund their education and future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sponsor"
              className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Sponsor a Student
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Spirit Of Life Community Empowerment Foundation provides access to
              quality education for children in Haiti by connecting them with
              sponsors who invest in their future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education",
                desc: "We run a school in Haiti providing quality education to children who might not otherwise have access.",
                icon: "📚",
              },
              {
                title: "Sponsorship",
                desc: "US-based sponsors are matched with individual students, creating personal connections that change lives.",
                icon: "🤝",
              },
              {
                title: "Community",
                desc: "Beyond education, we empower the broader community through resources, support, and opportunity.",
                icon: "🌍",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Change a Child&apos;s Life Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            For as little as a monthly contribution, you can sponsor a student
            and give them the gift of education. All donations are tax-deductible.
          </p>
          <Link
            href="/sponsor"
            className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
