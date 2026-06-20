import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — CL Landscape",
  description:
    "Learn about the Continual Learning Landscape project, its purpose, and how to contribute.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
            About the{" "}
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-sky-400">
              CL Landscape
            </span>
          </h1>
        </div>

        <div className="space-y-12">
          {/* Purpose */}
          <section className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 p-2.5 text-white shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Purpose
              </h2>
            </div>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              The Continual Learning Landscape is an interactive visual map of
              strategies and methods designed to help neural networks learn
              continuously without catastrophic forgetting. Inspired by the{" "}
              <a
                href="https://landscape.cncf.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-violet-600 underline decoration-violet-600/30 hover:decoration-violet-600 dark:text-violet-400"
              >
                CNCF Landscape
              </a>
              , this project aims to provide researchers, students, and
              practitioners with a clear overview of the continual learning
              ecosystem.
            </p>
          </section>

          {/* What is Continual Learning? */}
          <section className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 p-2.5 text-white shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                What is Continual Learning?
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                Continual Learning (also known as Lifelong Learning or
                Incremental Learning) addresses one of the fundamental
                challenges in machine learning:{" "}
                <strong className="text-gray-900 dark:text-gray-100">
                  catastrophic forgetting
                </strong>
                .
              </p>
              <p>
                When neural networks are trained on a sequence of tasks, they
                tend to abruptly forget previously learned knowledge as they
                adapt to new data. This stands in stark contrast to human
                learning, where we continuously accumulate knowledge throughout
                our lives.
              </p>
              <p>
                Continual learning strategies aim to bridge this gap by
                developing methods that allow models to learn from a stream of
                data while retaining knowledge from the past — balancing the
                fundamental tension between{" "}
                <strong className="text-gray-900 dark:text-gray-100">
                  stability
                </strong>{" "}
                (retaining old knowledge) and{" "}
                <strong className="text-gray-900 dark:text-gray-100">
                  plasticity
                </strong>{" "}
                (learning new information).
              </p>
            </div>
          </section>

          {/* How to Use */}
          <section className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 text-white shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                How to Use This Site
              </h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              {[
                "Browse the Landscape page to see all strategies organized by category.",
                "Use the search bar to filter by keyword, year, category, or tags.",
                "Click on any strategy card to see its full description and link to the original paper.",
                "Visit the Resources page for curated surveys, frameworks, and tutorials.",
                "Toggle dark mode using the moon/sun icon in the navbar.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Contributing */}
          <section className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-2.5 text-white shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Contributing
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                We welcome contributions from the research community! To add a
                new strategy to the landscape:
              </p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Fork the repository on GitHub.</li>
                <li>
                  Add your strategy entry to{" "}
                  <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-violet-600 dark:bg-gray-800 dark:text-violet-400">
                    /data/strategies.json
                  </code>{" "}
                  following the existing format.
                </li>
                <li>
                  Include the strategy name, category, year, description, arXiv
                  link, and relevant tags.
                </li>
                <li>Open a Pull Request with a brief description of the strategy.</li>
              </ol>
            </div>
          </section>

          {/* Acknowledgments */}
          <section className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 p-2.5 text-white shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Acknowledgments
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                This project would not be possible without the incredible work
                of the continual learning research community. Special thanks to:
              </p>
              <ul className="space-y-2">
                {[
                  {
                    name: "ContinualAI",
                    desc: "For building and nurturing the largest CL research community.",
                  },
                  {
                    name: "CNCF Landscape",
                    desc: "For providing the inspiration for this visual mapping approach.",
                  },
                  {
                    name: "All researchers",
                    desc: "Whose papers and implementations make this landscape possible.",
                  },
                ].map((ack) => (
                  <li key={ack.name} className="flex gap-2">
                    <span className="mt-1 text-violet-500">•</span>
                    <span>
                      <strong className="text-gray-900 dark:text-gray-100">
                        {ack.name}
                      </strong>{" "}
                      — {ack.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
