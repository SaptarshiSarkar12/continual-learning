import Link from "next/link";
import { notFound } from "next/navigation";
import strategies from "@/data/strategies.json";
import { CATEGORY_COLORS, type CategoryType, type Strategy } from "@/types";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const strategy = (strategies as Strategy[]).find((s) => s.id === id);
  if (!strategy) return { title: "Strategy Not Found" };
  return {
    title: `${strategy.name} — CL Landscape`,
    description: strategy.description,
  };
}

export function generateStaticParams() {
  return strategies.map((s) => ({ id: s.id }));
}

export default async function StrategyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const strategy = (strategies as Strategy[]).find((s) => s.id === id);
  if (!strategy) notFound();

  const colors = CATEGORY_COLORS[strategy.category as CategoryType];
  const related = (strategies as Strategy[])
    .filter((s) => s.category === strategy.category && s.id !== strategy.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/landscape"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Landscape
        </Link>

        {/* Main Card */}
        <article className={`rounded-2xl border-l-4 ${colors.border} bg-white p-8 shadow-sm dark:bg-gray-900 sm:p-10`}>
          {/* Category + Year badges */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-xs font-bold ${colors.bg} ${colors.text}`}>
              {strategy.category}
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
              {strategy.year}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
            {strategy.name}
          </h1>

          {/* Description */}
          <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-300">
            {strategy.description}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {strategy.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read Paper CTA */}
          <div className="mt-8">
            <a
              href={strategy.paper_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110`}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              Read Paper on arXiv
            </a>
          </div>
        </article>

        {/* Related Strategies */}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-6 text-lg font-bold text-gray-900 dark:text-gray-100">
              Related Strategies
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((r) => {
                const rc = CATEGORY_COLORS[r.category as CategoryType];
                return (
                  <Link
                    key={r.id}
                    href={`/strategy/${r.id}`}
                    className={`group rounded-xl border-l-4 ${rc.border} bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-900`}
                  >
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-violet-600 dark:text-gray-100 dark:group-hover:text-violet-400">
                      {r.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {r.year}
                    </p>
                    <p className="mt-2 line-clamp-2 text-xs text-gray-400 dark:text-gray-500">
                      {r.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
