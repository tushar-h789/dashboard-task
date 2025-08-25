import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Download } from "lucide-react";
import type { Lead } from "@/types/lead";
import type { Filters } from "@/types/filters";
import { LeadsFiltersButton, LeadsFiltersContent } from "./LeadsFiltersPanel";
import { LeadRow } from "./LeadRow";
import { Pagination } from "@/components/ui/pagination";
import { useLeadsStore } from "@/store/leadsStore";

export function LeadsTable() {
  const [activeTab, setActiveTab] = useState("leads");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Zustand store
  const {
    leads,
    selectedLeads,
    showFilters,
    filters,
    page,
    pageSize,
    setShowFilters,
    setFilters,
    toggleCheckboxFilter,
    clearAllFilters,
    setPage,
    selectAll,
    clearSelection,
    toggleSelect,
  } = useLeadsStore();

  const tabs = [
    { id: "leads", name: "Leads" },
    { id: "quality", name: "Lead Quality Score" },
    { id: "leaderboard", name: "Leaderboard" },
  ];

  // Define table headers config at the top
  const tableHeaders = [
    { id: "checkbox", label: "", isCheckbox: true },
    { id: "lead", label: "Lead" },
    { id: "tags", label: "Tags" },
    { id: "connectedWith", label: "Connected with" },
    { id: "date", label: "Date" },
    { id: "actions", label: "Export" },
  ];

  // Get unique values for filter options
  const getUniqueExportTypes = () => [
    ...new Set(leads.map((lead) => lead.exportType)),
  ];
  const getUniqueTags = () => [...new Set(leads.flatMap((lead) => lead.tags))];

  // console.log("data", leadsData);

  // Filter leads based on current filters
  const filteredLeads = leads.filter((lead) => {
    // Search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesName = lead.name.toLowerCase().includes(query);
      const matchesEmail = lead.email.toLowerCase().includes(query);
      const matchesTags = lead.tags.some((tag) =>
        tag.toLowerCase().includes(query)
      );
      if (!matchesName && !matchesEmail && !matchesTags) return false;
    }

    // Export type filter
    if (
      filters.exportType.length > 0 &&
      !filters.exportType.includes(lead.exportType)
    ) {
      return false;
    }

    // Tags filter
    if (filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some((filterTag) =>
        lead.tags.includes(filterTag)
      );
      if (!hasMatchingTag) return false;
    }

    return true;
  });

  // Pagination calculations
  const total = filteredLeads.length;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleLeads = filteredLeads.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      selectAll(visibleLeads.map((lead) => lead.id));
    } else {
      clearSelection();
    }
  };

  const handleSelectLead = (leadId: string, checked: boolean) => {
    toggleSelect(leadId, checked);
  };

  const handleFilterChange = <K extends keyof Filters>(
    filterType: K,
    value: Filters[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleCheckboxFilter = (
    filterKey: "exportType" | "tags",
    value: string
  ) => {
    toggleCheckboxFilter(filterKey, value);
  };

  // clearAllFilters provided by store

  const getActiveFiltersCount = () => {
    return (
      filters.exportType.length +
      filters.tags.length +
      (filters.searchQuery ? 1 : 0) +
      (filters.dateRange ? 1 : 0)
    );
  };

  const getTagColor = (tag: string) => {
    const colors = {
      Team: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
      },
      "GITEX DUBAI": {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
      },
      Summit: {
        bg: "bg-orange-50",
        text: "text-orange-700",
        border: "border-orange-200",
      },
      Enterprise: {
        bg: "bg-purple-50",
        text: "text-purple-700",
        border: "border-purple-200",
      },
      Conference: {
        bg: "bg-indigo-50",
        text: "text-indigo-700",
        border: "border-indigo-200",
      },
      Startup: {
        bg: "bg-pink-50",
        text: "text-pink-700",
        border: "border-pink-200",
      },
      "Demo Day": {
        bg: "bg-yellow-50",
        text: "text-yellow-700",
        border: "border-yellow-200",
      },
    } as const;
    return (
      (colors as Record<string, { bg: string; text: string; border: string }>)[
        tag
      ] || {
        bg: "bg-gray-50",
        text: "text-gray-700",
        border: "border-gray-200",
      }
    );
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="border-b border-gray-100 pb-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Tabs */}
          <div className="flex overflow-x-auto no-scrollbar bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-6 sm:px-10 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-white text-[#171717] shadow-sm"
                    : "text-[#A3A3A3] hover:text-gray-900"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <LeadsFiltersButton
              onToggle={() => setShowFilters(!showFilters)}
              activeFiltersCount={getActiveFiltersCount()}
            />
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export ({selectedLeads.length})
            </Button>
          </div>
        </div>

        {/* Filter Panel */}
        <LeadsFiltersContent
          show={showFilters}
          filters={filters}
          onFilterChange={handleFilterChange}
          onCheckboxFilter={handleCheckboxFilter}
          getUniqueExportTypes={getUniqueExportTypes}
          getUniqueTags={getUniqueTags}
          clearAll={clearAllFilters}
          activeFiltersCount={getActiveFiltersCount()}
        />
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          {activeTab === "leads" && (
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  {tableHeaders.map((header) => (
                    <th
                      key={header.id}
                      className={`text-left py-4 px-6 ${
                        header.id === "checkbox"
                          ? "w-12"
                          : "text-sm font-normal text-[#5C5C5C]"
                      }`}
                    >
                      {header.isCheckbox ? (
                        <Checkbox
                          checked={
                            selectedLeads.length === visibleLeads.length &&
                            visibleLeads.length > 0
                          }
                          onCheckedChange={handleSelectAll}
                        />
                      ) : (
                        header.label
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {visibleLeads.map((lead) => (
                  <LeadRow
                    key={lead.id}
                    lead={lead}
                    isSelected={selectedLeads.includes(lead.id)}
                    onToggleSelect={handleSelectLead}
                    setIsModalOpen={setIsModalOpen}
                    setSelectedLead={(l) => setSelectedLead(l)}
                    getTagColor={getTagColor}
                  />
                ))}
              </tbody>
            </table>
          )}

          {/* Tags Modal rendered once at parent level */}
          {isModalOpen && selectedLead && (
            <div className="fixed inset-0 flex justify-center items-center bg-black/10 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Lead Tags</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    &times;
                  </button>
                </div>
                <div className="mt-4">
                  <ul>
                    {selectedLead.tags.map((tag: string, index: number) => (
                      <li key={index} className="text-md text-gray-700">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "leads" && (
            <Pagination
              page={page}
              pageSize={pageSize}
              total={total}
              onPageChange={setPage}
            />
          )}

          {activeTab === "quality" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Lead Quality Score
              </h2>
            </div>
          )}

          {activeTab === "leaderboard" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Leaderboard
              </h2>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
