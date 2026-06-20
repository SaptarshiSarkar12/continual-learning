"use client";

import { useCallback, useMemo, useState } from "react";
import type { FilterState } from "@/types";

interface SearchBarProps {
  totalCount: number;
  filteredCount: number;
  allTags: string[];
  onFilterChange: (filters: FilterState) => void;
}

export default function SearchBar({
  totalCount,
  filteredCount,
  allTags,
  onFilterChange,
}: SearchBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    query: "",
    year: "",
    category: "",
    tag: "",
  });

  const years = useMemo(
    () => ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    []
  );

  const categories = useMemo(
    () => [
      "Replay-based",
      "Regularization-based",
      "Architecture-based",
      "Meta-learning",
      "Hybrid",
    ],
    []
  );

  const update = useCallback(
    (key: keyof FilterState, value: string) => {
      const next = { ...filters, [key]: value };
      setFilters(next);
      onFilterChange(next);
    },
    [filters, onFilterChange]
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
      <div className="flex flex-wrap items-center gap-3">
        {/* Search input */}
        <div className="relative min-w-[200px] flex-1">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search strategies..."
            value={filters.query}
            onChange={(e) => update("query", e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-violet-400"
          />
        </div>

        {/* Year filter */}
        <select
          value={filters.year}
          onChange={(e) => update("year", e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
        >
          <option value="">All Years</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        {/* Category filter */}
        <select
          value={filters.category}
          onChange={(e) => update("category", e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* Tag filter */}
        <select
          value={filters.tag}
          onChange={(e) => update("tag", e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
        >
          <option value="">All Tags</option>
          {allTags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-700 dark:text-gray-200">
          {filteredCount}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-700 dark:text-gray-200">
          {totalCount}
        </span>{" "}
        strategies
      </div>
    </div>
  );
}
