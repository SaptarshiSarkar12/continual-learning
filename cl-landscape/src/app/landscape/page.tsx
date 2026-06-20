"use client";

import { useCallback, useMemo, useState } from "react";
import strategies from "@/data/strategies.json";
import SearchBar from "@/components/SearchBar";
import CategoryColumn from "@/components/CategoryColumn";
import { CATEGORY_ORDER, type CategoryType, type FilterState, type Strategy } from "@/types";

export default function LandscapePage() {
  const [filters, setFilters] = useState<FilterState>({
    query: "",
    year: "",
    category: "",
    tag: "",
  });

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    (strategies as Strategy[]).forEach((s) => s.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filtered = useMemo(() => {
    return (strategies as Strategy[]).filter((s) => {
      if (filters.query) {
        const q = filters.query.toLowerCase();
        const match =
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q));
        if (!match) return false;
      }
      if (filters.year && s.year !== Number(filters.year)) return false;
      if (filters.category && s.category !== filters.category) return false;
      if (filters.tag && !s.tags.includes(filters.tag)) return false;
      return true;
    });
  }, [filters]);

  const grouped = useMemo(() => {
    const map = new Map<CategoryType, Strategy[]>();
    CATEGORY_ORDER.forEach((cat) => map.set(cat, []));
    filtered.forEach((s) => {
      const list = map.get(s.category as CategoryType);
      if (list) list.push(s);
    });
    return map;
  }, [filtered]);

  const handleFilterChange = useCallback((f: FilterState) => {
    setFilters(f);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Continual Learning{" "}
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-sky-400">
              Landscape
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            An interactive map of strategies that help neural networks learn
            continuously without catastrophic forgetting, organized by approach.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <SearchBar
            totalCount={strategies.length}
            filteredCount={filtered.length}
            allTags={allTags}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Category Grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg
              className="h-16 w-16 text-gray-300 dark:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <p className="mt-4 text-lg font-medium text-gray-500 dark:text-gray-400">
              No strategies found
            </p>
            <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
              Try adjusting your filters or search query.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {CATEGORY_ORDER.map((cat) => {
              const items = grouped.get(cat) || [];
              if (items.length === 0 && (filters.category || filters.query || filters.year || filters.tag)) return null;
              return (
                <CategoryColumn
                  key={cat}
                  category={cat}
                  strategies={items}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
