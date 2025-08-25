import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter } from "lucide-react";
import type { Filters } from "@/types/filters";

type LeadsFiltersButtonProps = {
  onToggle: () => void;
  activeFiltersCount: number;
};

export function LeadsFiltersButton({
  onToggle,
  activeFiltersCount,
}: LeadsFiltersButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className={activeFiltersCount > 0 ? "bg-blue-50 border-blue-200" : ""}
    >
      <Filter className="w-4 h-4 mr-2" />
      Filter
      {activeFiltersCount > 0 && (
        <Badge className="ml-2 bg-blue-500 text-white text-xs px-1 py-0 h-4 min-w-4 flex items-center justify-center">
          {activeFiltersCount}
        </Badge>
      )}
    </Button>
  );
}

type LeadsFiltersContentProps = {
  show: boolean;
  filters: Filters;
  onFilterChange: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
  onCheckboxFilter: (key: "exportType" | "tags", value: string) => void;
  getUniqueExportTypes: () => string[];
  getUniqueTags: () => string[];
  clearAll: () => void;
  activeFiltersCount: number;
};

export function LeadsFiltersContent({
  show,
  filters,
  onFilterChange,
  onCheckboxFilter,
  getUniqueExportTypes,
  getUniqueTags,
  clearAll,
  activeFiltersCount,
}: LeadsFiltersContentProps) {
  if (!show) return null;
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-900">Filters</h3>
        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            className="text-xs text-gray-500"
          >
            Clear all
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">
            Search
          </label>
          <input
            type="text"
            placeholder="Search leads..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            value={filters.searchQuery}
            onChange={(e) => onFilterChange("searchQuery", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">
            Export Type
          </label>
          <div className="space-y-2">
            {getUniqueExportTypes().map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <Checkbox
                  checked={filters.exportType.includes(type)}
                  onCheckedChange={() => onCheckboxFilter("exportType", type)}
                />
                <span className="text-sm text-gray-700 capitalize">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">
            Tags
          </label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {getUniqueTags().map((tag) => (
              <label key={tag} className="flex items-center space-x-2">
                <Checkbox
                  checked={filters.tags.includes(tag)}
                  onCheckedChange={() => onCheckboxFilter("tags", tag)}
                />
                <span className="text-sm text-gray-700">{tag}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
