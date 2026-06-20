import { CATEGORY_COLORS, type CategoryType, type Strategy } from "@/types";
import Card from "./Card";

interface CategoryColumnProps {
  category: CategoryType;
  strategies: Strategy[];
}

export default function CategoryColumn({
  category,
  strategies,
}: CategoryColumnProps) {
  const colors = CATEGORY_COLORS[category];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <div className={`h-1 w-full rounded-full ${colors.accent} mb-3`} />
        <div className="flex items-center justify-between">
          <h2 className={`text-sm font-bold ${colors.text}`}>{category}</h2>
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${colors.bg} ${colors.text}`}
          >
            {strategies.length}
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {strategies.map((strategy, i) => (
          <div
            key={strategy.id}
            className="animate-fade-in opacity-0"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <Card strategy={strategy} />
          </div>
        ))}
      </div>
    </div>
  );
}
