export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About SOLCEF</h1>

      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <p>
          The <strong>Spirit Of Life Community Empowerment Foundation (SOLCEF)</strong> is
          a 501(c)(3) public charity founded in 2014 and based in South Florida. Our
          mission is to empower communities in Haiti through access to quality education.
        </p>

        <p>
          SOLCEF operates a school in Haiti, serving children who would otherwise lack
          access to education. Through our sponsorship program, individuals in the
          United States can directly sponsor a student — covering tuition, supplies,
          uniforms, and meals — creating a personal connection that transforms lives
          on both sides.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12">Our Story</h2>
        <p>
          {/* TODO: Add the founding story — Joram and Rose's journey starting SOLCEF */}
          More details coming soon.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12">Tax-Deductible Giving</h2>
        <p>
          SOLCEF is a registered 501(c)(3) nonprofit (EIN: 45-5611617). All contributions
          are tax-deductible to the extent allowed by law.
        </p>
      </div>
    </div>
  );
}
