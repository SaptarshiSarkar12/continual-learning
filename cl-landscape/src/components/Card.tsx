"use client";

import Link from "next/link";
import { CATEGORY_COLORS, type CategoryType, type Strategy } from "@/types";

interface CardProps {
  strategy: Strategy;
}

export default function Card({ strategy }: CardProps) {
  const colors = CATEGORY_COLORS[strategy.category as CategoryType];

  return (
    <Link href={`/strategy/${strategy.id}`} className="group block">
      <div
        className={`relative overflow-hidden rounded-xl border-l-4 ${colors.border} bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:${colors.glow} dark:bg-gray-900 dark:shadow-none dark:hover:shadow-lg`}
      >
        {/* Top row: name + year */}
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-tight text-gray-900 transition-colors group-hover:text-violet-600 dark:text-gray-100 dark:group-hover:text-violet-400">
            {strategy.name}
          </h3>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${colors.bg} ${colors.text}`}
          >
            {strategy.year}
          </span>
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
          {strategy.description}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1">
          {strategy.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
          {strategy.tags.length > 3 && (
            <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-400 dark:bg-gray-800 dark:text-gray-500">
              +{strategy.tags.length - 3}
            </span>
          )}
        </div>

        {/* Hover glow accent */}
        <div
          className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${colors.bg}`}
        />
      </div>
    </Link>
  );
}
