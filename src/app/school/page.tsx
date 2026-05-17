import Link from "next/link";

const coverage = [
  { id: "tuition", title: "Tuition & Fees", desc: "Full coverage of school tuition and administrative fees so no child is turned away." },
  { id: "books", title: "Books & Materials", desc: "Textbooks, notebooks, pens, and all learning materials needed for the school year." },
  { id: "uniforms", title: "Uniforms", desc: "School uniforms that give students dignity, belonging, and the confidence to learn." },
  { id: "meals", title: "Daily Meals", desc: "Nutritious meals served each school day — for many students, this is their most reliable meal." },
  { id: "health", title: "Health & Hygiene", desc: "Basic health screenings, hygiene supplies, and first aid to keep students healthy and in class." },
  { id: "teachers", title: "Teacher Support", desc: "Resources and training for local teachers to ensure quality instruction in every classroom." },
];

export default function SchoolPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-emerald-900 text-white py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/images/classroom.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/80 to-emerald-900/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/25 text-amber-200 text-xs font-semibold uppercase tracking-widest mb-4">
            Our School
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Where Learning Happens
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto">
            We partner with schools in Haiti to provide safe, supportive learning
            environments where children can thrive.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">A Place to Grow</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Our partner school in Haiti serves children from kindergarten
                  through 9th grade. For many of these students, school is more than
                  a place to learn — it&apos;s a source of stability, safety, and hope.
                </p>
                <p>
                  Classrooms are modest but full of energy. Teachers are passionate
                  members of the local community who are committed to their students&apos;
                  success despite limited resources.
                </p>
                <p>
                  Through SOLCEF&apos;s sponsorship program, we provide the resources
                  that make it possible for these children to attend school — removing
                  the financial barriers that would otherwise keep them at home.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-stone-100">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url(/images/classroom.jpg)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What sponsorship covers */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-4">
              Sponsorship Coverage
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              What Your Sponsorship Provides
            </h2>
            <p className="text-lg text-stone-600">
              Every dollar goes directly toward giving a child the education they deserve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverage.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 border border-stone-100 hover:shadow-md hover:border-emerald-100 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold mb-4">
                  ✓
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Sponsor a Student Today</h2>
          <p className="text-emerald-100/80 mb-8 text-lg">
            Your monthly contribution gives a child access to everything on this page
            — and opens the door to a future they deserve.
          </p>
          <Link
            href="/sponsor"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:from-amber-400 hover:to-amber-500 transition-all"
          >
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
