export interface Strategy {
  id: string;
  category: CategoryType;
  name: string;
  year: number;
  description: string;
  paper_url: string;
  tags: string[];
}

export type CategoryType =
  | "Replay-based"
  | "Regularization-based"
  | "Architecture-based"
  | "Meta-learning"
  | "Hybrid";

export interface FilterState {
  query: string;
  year: string;
  category: string;
  tag: string;
}

export const CATEGORY_COLORS: Record<CategoryType, { border: string; bg: string; text: string; accent: string; glow: string }> = {
  "Replay-based": {
    border: "border-sky-500",
    bg: "bg-sky-500/10",
    text: "text-sky-600 dark:text-sky-400",
    accent: "bg-sky-500",
    glow: "shadow-sky-500/20",
  },
  "Regularization-based": {
    border: "border-emerald-500",
    bg: "bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    accent: "bg-emerald-500",
    glow: "shadow-emerald-500/20",
  },
  "Architecture-based": {
    border: "border-violet-500",
    bg: "bg-violet-500/10",
    text: "text-violet-600 dark:text-violet-400",
    accent: "bg-violet-500",
    glow: "shadow-violet-500/20",
  },
  "Meta-learning": {
    border: "border-amber-500",
    bg: "bg-amber-500/10",
    text: "text-amber-600 dark:text-amber-400",
    accent: "bg-amber-500",
    glow: "shadow-amber-500/20",
  },
  "Hybrid": {
    border: "border-slate-500",
    bg: "bg-slate-500/10",
    text: "text-slate-600 dark:text-slate-400",
    accent: "bg-slate-500",
    glow: "shadow-slate-500/20",
  },
};

export const CATEGORY_ORDER: CategoryType[] = [
  "Replay-based",
  "Regularization-based",
  "Architecture-based",
  "Meta-learning",
  "Hybrid",
];
