import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support Education in Haiti | SOLCEF",
  description:
    "Sponsor a student in Haiti. SOLCEF connects US donors with individual students, covering tuition, supplies, uniforms, and meals. 501(c)(3) nonprofit.",
  openGraph: {
    title: "Support Education in Haiti | SOLCEF",
    description: "Sponsor a student and give them the gift of education in Haiti.",
    images: ["/images/hero-students.jpg"],
  },
};

const placeholderStudents = [
  {
    name: "Marie",
    age: "10",
    grade: "4th",
    bio: "Marie loves drawing and dreams of becoming an artist. She is always the first to arrive at school and helps organize the classroom.",
    image: "/images/student-1.jpg",
  },
  {
    name: "David",
    age: "12",
    grade: "6th",
    bio: "An aspiring engineer who excels in mathematics. David helps his younger siblings with their homework each evening.",
    image: "/images/student-2.jpg",
  },
  {
    name: "Sarah",
    age: "9",
    grade: "3rd",
    bio: "Sarah wants to become a doctor when she grows up. She leads her class in attendance and loves science.",
    image: "/images/student-3.jpg",
  },
];

const stats = [
  { number: "150+", label: "Students Supported" },
  { number: "10+", label: "Years Serving Haiti" },
  { number: "95%", label: "of Donations Go to Programs" },
  { number: "3", label: "Schools Partnered" },
];

const causes = [
  {
    title: "Quality Education",
    desc: "Every child deserves access to learning. We fund tuition, books, uniforms, and daily meals so students can focus on their future.",
    image: "/images/books.jpg",
    imagePosition: "bg-center",
  },
  {
    title: "Student Sponsorship",
    desc: "US-based sponsors are matched with individual students, creating personal connections and accountability that transform lives on both sides.",
    image: "/images/learning.jpg",
    imagePosition: "bg-center",
  },
  {
    title: "Community Empowerment",
    desc: "Beyond the classroom, we invest in the broader community — supporting families, local teachers, and the infrastructure that makes education possible.",
    image: "/images/community.jpg",
    imagePosition: "bg-center",
  },
];

export default function Home() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative min-h-[90vh] flex items-center bg-emerald-900 overflow-x-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-students.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/80 to-emerald-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />

        {/* Decorative gold accent ring */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border-[1px] border-amber-500/10" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full border-[1px] border-amber-400/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/25 text-amber-200 text-sm font-medium mb-8 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              501(c)(3) Nonprofit — All Donations Tax-Deductible
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Education for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Haiti
              </span>
            </h1>

            <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mb-10 leading-relaxed">
              SOLCEF runs schools in Haiti and connects US-based sponsors with
              individual students. Your sponsorship covers tuition, supplies,
              uniforms, and daily meals — giving a child the education they deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sponsor"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/30 hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
              >
                Sponsor a Student
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border-2 border-white/20 text-white/90 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Impact Stats ───── */}
      <section className="relative -mt-16 z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl shadow-stone-200/60 border border-stone-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100 overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="py-8 px-4 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-700 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-stone-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Mission / Causes ───── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              How We Make a Difference
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              From funding classrooms to connecting sponsors with students, every
              dollar goes toward breaking the cycle of poverty through education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {causes.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300"
              >
                <div className="h-56 bg-stone-100 overflow-hidden">
                  <div
                    className={`w-full h-full bg-cover ${item.imagePosition} group-hover:scale-105 transition-transform duration-500`}
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Meet the Students ───── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-widest mb-4">
              Sponsor a Child
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Children Waiting for a Sponsor
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              These placeholder profiles show how real students will appear once
              Joram provides their photos and stories. Each child has a unique
              dream and a future worth investing in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {placeholderStudents.map((student) => (
              <div
                key={student.name}
                className="group bg-stone-50 rounded-2xl overflow-hidden border border-stone-100 hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300"
              >
                <div className="h-72 bg-stone-100 overflow-hidden">
                  <img
                    src={student.image}
                    alt={`${student.name}, age ${student.age}, grade ${student.grade}`}
                    className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-stone-900">{student.name}</h3>
                    <span className="text-sm text-stone-400">· Age {student.age}</span>
                    <span className="text-sm text-stone-400">· Grade {student.grade}</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">{student.bio}</p>
                  <Link
                    href="/sponsor"
                    className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-sm hover:text-emerald-600 transition-colors"
                  >
                    Sponsor {student.name}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Final CTA ───── */}
      <section className="py-24 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Ready to Change a Life?
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            For as little as a monthly contribution, you can sponsor a student
            and give them the gift of education. Every donation is tax-deductible,
            and you&apos;ll receive regular updates on your student&apos;s progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sponsor"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-emerald-200 hover:shadow-xl hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300"
            >
              Sponsor a Student
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:border-emerald-300 transition-all duration-300"
            >
              Ask Us Questions
            </Link>
          </div>
          <p className="text-sm text-stone-400 mt-6">
            SOLCEF is a registered 501(c)(3) · EIN: 45-5611617
          </p>
        </div>
      </section>
    </>
  );
}
