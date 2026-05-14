import Link from "next/link";

const timeline = [
  { year: "2014", event: "SOLCEF is founded by Joram and Rose with a vision to bring quality education to underserved communities in Haiti." },
  { year: "2016", event: "First school partnership established in rural Haiti. 35 students enrolled in the inaugural class." },
  { year: "2018", event: "Sponsorship program launches, connecting US-based donors with individual students for the first time." },
  { year: "2020", event: "Despite global challenges, SOLCEF keeps its doors open — providing meals, supplies, and continued education." },
  { year: "2025", event: "150+ students currently supported. Three school partnerships established. Expanding toward a self-sustaining model." },
];

const team = [
  { name: "Joram N.", role: "Co-Founder & Director", bio: "Born and raised in Haiti, Joram brings firsthand understanding of the educational challenges facing Haitian communities." },
  { name: "Rose N.", role: "Co-Founder & Program Lead", bio: "Rose oversees student sponsorship programs and ensures every sponsored child receives the support they need." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-emerald-900 text-white py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/images/about-hero.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/80 to-emerald-900/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/25 text-amber-200 text-xs font-semibold uppercase tracking-widest mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Story</h1>
          <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto">
            How a vision for education became a movement that&apos;s changing lives
            in Haiti — one student at a time.
          </p>
        </div>
      </section>

      {/* Founding story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">The Beginning</h2>

          <div className="prose prose-lg max-w-none text-stone-600 space-y-6">
            <p className="lead text-xl text-stone-700 leading-relaxed">
              SOLCEF was born from a simple belief: <strong>education is the most powerful tool we have to break the cycle of poverty</strong> — and every child deserves access to it.
            </p>

            <p>
              Joram and Rose saw the gap firsthand. In rural Haiti, public education is
              limited, and private schooling — even at modest costs — is out of reach for
              many families. Children were being left behind not because they lacked
              potential, but because they lacked opportunity.
            </p>

            <p>
              What started as a small initiative to help a handful of children in one
              community grew into something larger. The Spirit Of Life Community
              Empowerment Foundation (SOLCEF) was established in 2014 as a registered
              501(c)(3) public charity with a clear mission: provide access to quality
              education for children in Haiti.
            </p>

            <p>
              Today, SOLCEF supports over 150 students across multiple school
              partnerships. Our sponsorship program connects US-based donors directly
              with individual students — funding tuition, school supplies, uniforms,
              daily meals, and basic health needs.
            </p>

            <p className="text-stone-500 italic border-l-4 border-emerald-200 pl-4 py-2">
              &ldquo;We don&apos;t just sponsor students. We invest in futures. Every child
              who walks through a SOLCEF classroom door carries the potential to
              transform their family, their community, and their country.&rdquo;
              <br /> <span className="not-italic text-sm">— Joram, Co-Founder</span>
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Our Journey</h2>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-600 mt-2 ring-4 ring-emerald-100" />
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-emerald-200 my-1" />
                  )}
                </div>
                <div className="pb-10">
                  <span className="text-sm font-bold text-amber-600 tracking-wider">{item.year}</span>
                  <p className="text-stone-600 mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Meet the Founders</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              The heart behind the mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-xl mb-4">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-xl font-bold text-stone-900">{member.name}</h3>
                <p className="text-amber-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-stone-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Want to Be Part of the Story?</h2>
          <p className="text-emerald-100/80 mb-8 text-lg">
            Your sponsorship gives a child access to education, nutrition, and a
            future full of possibility.
          </p>
          <Link
            href="/sponsor"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Sponsor a Student Today
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
