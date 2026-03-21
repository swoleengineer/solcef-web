export default function SchoolPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">The School</h1>

      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <p>
          SOLCEF operates a school in Haiti dedicated to providing children with
          quality education, nutrition, and a safe learning environment.
        </p>

        {/* TODO: Add school details — location, number of students, grades served, photos */}
        <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-400">
          <p className="text-lg">School photos and details coming soon.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12">What Sponsorship Covers</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Tuition and school fees</li>
          <li>Books and learning materials</li>
          <li>School uniforms</li>
          <li>Daily meals</li>
          <li>Basic health and hygiene supplies</li>
        </ul>
      </div>
    </div>
  );
}
