import Link from "next/link";

const pricing = [
  {
    tier: "Essential",
    amount: "$25",
    period: "/month",
    desc: "Covers tuition, basic supplies, and one daily meal for a student.",
    features: ["Tuition & fees", "School supplies", "Daily meals"],
  },
  {
    tier: "Complete",
    amount: "$50",
    period: "/month",
    desc: "Everything in Essential plus uniforms, health screenings, and learning materials.",
    features: ["Everything in Essential", "School uniforms", "Health check-ups", "Learning materials"],
    popular: true,
  },
  {
    tier: "Sustainer",
    amount: "$100",
    period: "/month",
    desc: "Our most impactful tier. Covers a student fully plus supports teacher resources and classroom needs.",
    features: ["Everything in Complete", "Teacher support", "Classroom resources", "Annual progress report"],
  },
];

const placeholderStudents = [
  {
    name: "Micah",
    age: "7",
    grade: "1st",
    bio: "Micah loves story time and dreams of becoming a librarian. His favorite subject is reading and he never misses a day of school.",
    image: "/images/student-4.jpg",
  },
  {
    name: "Ruth",
    age: "11",
    grade: "6th",
    bio: "A thoughtful student who excels in science. Ruth hopes to become a doctor one day and leads her classmates in group projects.",
    image: "/images/student-5.jpg",
  },
  {
    name: "Jean",
    age: "9",
    grade: "3rd",
    bio: "Jean is full of energy and loves playing soccer during recess. He's sharp with numbers and wants to build houses when he grows up.",
    image: "/images/student-6.jpg",
  },
];

const steps = [
  { step: "1", title: "Choose a Student", desc: "Browse student profiles and choose the child you'd like to sponsor. Each profile shares their story, age, and dreams." },
  { step: "2", title: "Set Up Your Sponsorship", desc: "Choose a monthly amount that fits your budget and set up secure recurring payment. All donations are tax-deductible." },
  { step: "3", title: "Stay Connected", desc: "Receive updates, photos, and progress reports about your sponsored student. Write letters and watch them grow." },
];

export default function SponsorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-emerald-900 text-white py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/images/learning.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/80 to-emerald-900/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/25 text-amber-200 text-xs font-semibold uppercase tracking-widest mb-4">
            Sponsor
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Sponsor a Student
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/80 max-w-3xl mx-auto">
            Choose a student to sponsor and make a direct impact on their education
            and future. For as little as <strong>$25/month</strong>, you can give a
            child access to quality education, meals, and opportunity.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-4">
              How It Works
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Three Simple Steps
            </h2>
            <p className="text-lg text-stone-600">
              Sponsoring a student is straightforward. Here&apos;s how it works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-700 flex items-center justify-center font-extrabold text-xl mx-auto mb-6 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Students */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-widest mb-4">
              Children Waiting
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Choose a Student to Sponsor
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
                  <div
                    className="w-full h-full bg-cover bg-[center_30%] group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${student.image})` }}
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
                    href="/contact"
                    className="inline-flex items-center gap-1.5 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-colors"
                  >
                    Sponsor {student.name}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-4">
              Pricing
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Choose Your Sponsorship Level
            </h2>
            <p className="text-lg text-stone-600">
              Every level makes a real difference. Pick the one that&apos;s right for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div
                key={plan.tier}
                className={`relative rounded-2xl border-2 p-8 transition-all duration-200 hover:shadow-xl ${
                  plan.popular
                    ? "border-amber-400 shadow-lg shadow-amber-100 bg-white"
                    : "border-stone-100 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{plan.tier}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-emerald-700">{plan.amount}</span>
                    <span className="text-stone-400 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-stone-500 text-sm mt-3">{plan.desc}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-stone-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-emerald-500 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-xl font-bold transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md hover:from-amber-400 hover:to-amber-500"
                      : "bg-stone-100 text-stone-700 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  Get Started — {plan.tier}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 bg-stone-50 border-t border-stone-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-600 mb-4">
            Have questions about sponsorship? We&apos;re happy to help.
          </p>
          <Link
            href="/contact"
            className="text-emerald-700 font-semibold hover:text-emerald-600 underline underline-offset-4"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
