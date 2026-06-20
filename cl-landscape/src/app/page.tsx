import Link from "next/link";
import strategies from "@/data/strategies.json";

export default function Home() {
  const categoryCount = new Set(strategies.map((s) => s.category)).size;
  const yearMin = Math.min(...strategies.map((s) => s.year));
  const yearMax = Math.max(...strategies.map((s) => s.year));

  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-violet-950">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="animate-float absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" style={{ animationDelay: "2s" }} />
          <div className="animate-float absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" style={{ animationDelay: "4s" }} />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          {/* Badge */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Inspired by the CNCF Landscape
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-white">The Continual Learning</span>
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Landscape
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl" style={{ animationDelay: "0.1s" }}>
            An interactive guide to strategies that help neural networks learn
            continuously without forgetting.
          </p>

          {/* Stats */}
          <div className="animate-fade-in mt-10 flex items-center justify-center gap-8 sm:gap-12" style={{ animationDelay: "0.2s" }}>
            {[
              { value: strategies.length, label: "Strategies" },
              { value: categoryCount, label: "Categories" },
              { value: `${yearMin}–${yearMax}`, label: "Years Covered" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-gray-500 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-in mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/landscape"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-sky-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:brightness-110"
            >
              Explore the Landscape
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── Feature Cards ────────────────────────────────────── */}
      <section className="bg-gray-50 py-24 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            Everything you need to navigate
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-sky-400">
              continual learning research
            </span>
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                ),
                title: "Browse Strategies",
                description:
                  "Explore 24+ continual learning methods organized by category — from replay-based approaches to meta-learning techniques.",
                color: "from-violet-500 to-purple-600",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                ),
                title: "Filter & Search",
                description:
                  "Find exactly what you need with powerful filters by year, category, and tags. Search across all strategies instantly.",
                color: "from-sky-500 to-blue-600",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
                title: "Read Papers",
                description:
                  "Jump directly to the original research papers. Every strategy links to its source publication on arXiv.",
                color: "from-emerald-500 to-teal-600",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div
                  className={`inline-flex rounded-xl bg-gradient-to-br ${feature.color} p-3 text-white shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
