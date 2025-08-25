import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Filter, Download, Plus, X } from "lucide-react";
import { ExportStarIcon } from "@/assets/icons/export-start-icon";
import { ExportPIcon } from "@/assets/icons/export-p-icon";
import { ExportHubspotIcon } from "@/assets/icons/export-hubspot-icon";

interface Lead {
  id: string;
  name: string;
  email: string;
  tags: string[];
  connectedWith: {
    name: string;
    email: string;
    avatar: string;
  };
  date: string;
  exportType: "export" | "star" | "crown";
  status: string;
  score: number;
}

export function LeadsTable() {
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("leads");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  
  // Filter states
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    status: [] as string[],
    exportType: [] as string[],
    tags: [] as string[],
    dateRange: "",
    searchQuery: ""
  });

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

  const leadsData: Lead[] = [
    {
      id: "1",
      name: "Efehan Coskun",
      email: "efehan@acme.com",
      tags: ["Team", "Enterprise", "GITEX DUBAI", "Summit", "Team"],
      connectedWith: {
        avatar: "/src/assets/images/connected-avater.png",
        name: "Efehan Coskun",
        email: "efehan@alignui.com",
        // avatar: "EC",
      },
      date: "Tuesday Aug 04 - 2025",
      exportType: "export",
      status: "Active",
      score: 92,
    },
    {
      id: "2",
      name: "Hande Yilmaz",
      email: "hande@example.com",
      tags: [],
      connectedWith: {
        name: "Hande Yilmaz",
        email: "hande@alignui.com",
        avatar: "/src/assets/images/profile-avatar.png",
      },
      date: "Monday Aug 03 - 2025",
      exportType: "star",
      status: "Pending",
      score: 85,
    },
    {
      id: "3",
      name: "Demir Vural",
      email: "demir@test.com",
      tags: [
        "GITEX DUBAI",
        "Summit",
        "Team",
        "Enterprise",
        "GITEX DUBAI",
        "Summit",
        "Team",
      ],
      connectedWith: {
        name: "Demir Vural",
        email: "demir@alignui.com",
        avatar: "/src/assets/images/connected-avater.png",
      },
      date: "Tuesday Aug 04 - 2025",
      exportType: "crown",
      status: "Converted",
      score: 98,
    },
    {
      id: "4",
      name: "Sarah Johnson",
      email: "sarah@techcorp.com",
      tags: [
        "Enterprise",
        "Conference",
        "Team",
        "Enterprise",
        "GITEX DUBAI",
        "Summit",
      ],
      connectedWith: {
        name: "Sarah Johnson",
        email: "sarah@alignui.com",
        avatar: "/src/assets/images/connected-avater.png",
      },
      date: "Tuesday Aug 04 - 2025",
      exportType: "export",
      status: "Active",
      score: 76,
    },
    {
      id: "5",
      name: "Michael Chen",
      email: "michael@startup.io",
      tags: ["Startup", "Demo Day", "Team", "Enterprise"],
      connectedWith: {
        name: "Michael Chen",
        email: "michael@alignui.com",
        avatar: "/src/assets/images/connected-avater.png",
      },
      date: "Tuesday Aug 04 - 2025",
      exportType: "crown",
      status: "Active",
      score: 88,
    },
  ];

  // Get unique values for filter options
  const getUniqueExportTypes = () => [...new Set(leadsData.map(lead => lead.exportType))];
  const getUniqueTags = () => [...new Set(leadsData.flatMap(lead => lead.tags))];

  // Filter leads based on current filters
  const filteredLeads = leadsData.filter(lead => {
    // Search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesName = lead.name.toLowerCase().includes(query);
      const matchesEmail = lead.email.toLowerCase().includes(query);
      const matchesTags = lead.tags.some(tag => tag.toLowerCase().includes(query));
      if (!matchesName && !matchesEmail && !matchesTags) return false;
    }



    // Export type filter
    if (filters.exportType.length > 0 && !filters.exportType.includes(lead.exportType)) {
      return false;
    }

    // Tags filter
    if (filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some(filterTag => lead.tags.includes(filterTag));
      if (!hasMatchingTag) return false;
    }

    return true;
  });

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedLeads(filteredLeads.map((lead) => lead.id));
    } else {
      setSelectedLeads([]);
    }
  };

  const handleSelectLead = (leadId: string, checked: boolean) => {
    if (checked) {
      setSelectedLeads((prev) => [...prev, leadId]);
    } else {
      setSelectedLeads((prev) => prev.filter((id) => id !== leadId));
    }
  };

  const handleFilterChange = (filterType: keyof typeof filters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };



  const clearAllFilters = () => {
    setFilters({
      status: [],
      exportType: [],
      tags: [],
      dateRange: "",
      searchQuery: ""
    });
  };

  const getActiveFiltersCount = () => {
    return filters.exportType.length + filters.tags.length + 
           (filters.searchQuery ? 1 : 0) + (filters.dateRange ? 1 : 0);
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
    };
    return (
      colors[tag as keyof typeof colors] || {
        bg: "bg-gray-50",
        text: "text-gray-700",
        border: "border-gray-200",
      }
    );
  };

  const renderExportIcon = (type: string) => {
    switch (type) {
      case "star":
        return <ExportStarIcon className="w-7 h-7" />;
      case "crown":
        return (
          <div className="flex items-center gap-1">
            <ExportStarIcon className="w-7 h-7 " />
            <ExportPIcon className="w-7 h-7 " />
            <ExportHubspotIcon className="w-7 h-7 " />
          </div>
        );
      default:
        return (
          <Button size="sm" variant="outline" className="text-xs px-3">
            Export
          </Button>
        );
    }
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="border-b border-gray-100 pb-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-10 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 ${
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
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className={getActiveFiltersCount() > 0 ? "bg-blue-50 border-blue-200" : ""}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
              {getActiveFiltersCount() > 0 && (
                <Badge className="ml-2 bg-blue-500 text-white text-xs px-1 py-0 h-4 min-w-4 flex items-center justify-center">
                  {getActiveFiltersCount()}
                </Badge>
              )}
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export ({selectedLeads.length})
            </Button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-900">Filters</h3>
              {getActiveFiltersCount() > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-xs text-gray-500"
                >
                  Clear all
                </Button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search leads..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  value={filters.searchQuery}
                  onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
                />
              </div>


              {/* Export Type Filter */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Export Type</label>
                <div className="space-y-2">
                  {getUniqueExportTypes().map(type => (
                    <label key={type} className="flex items-center space-x-2">
                      <Checkbox
                        checked={filters.exportType.includes(type)}
                        onCheckedChange={() => handleCheckboxFilter('exportType', type)}
                      />
                      <span className="text-sm text-gray-700 capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Tags</label>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {getUniqueTags().map(tag => (
                    <label key={tag} className="flex items-center space-x-2">
                      <Checkbox
                        checked={filters.tags.includes(tag)}
                        onCheckedChange={() => handleCheckboxFilter('tags', tag)}
                      />
                      <span className="text-sm text-gray-700">{tag}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
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
                          checked={selectedLeads.length === filteredLeads.length && filteredLeads.length > 0}
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
                {filteredLeads.map((lead) => {
                  return (
                    <tr
                      key={lead.id}
                      className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                        selectedLeads.includes(lead.id) ? "bg-purple-25" : ""
                      }`}
                    >
                      <td className="py-4 px-6">
                        <Checkbox
                          checked={selectedLeads.includes(lead.id)}
                          onCheckedChange={(checked) =>
                            handleSelectLead(lead.id, checked as boolean)
                          }
                        />
                      </td>
                      <td className="py-3 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#FFC0C5] to-pink-500 rounded-full flex items-center justify-center text-[#681219] text-sm font-bold">
                            {lead.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="text-sm  text-[#171717]">
                              {lead.name}
                            </p>
                            <p className="text-[12px] text-[#5C5C5C]">
                              {lead.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-1">
                          {lead.tags.length > 0 ? (
                            lead.tags.slice(0, 1).map((tag, tagIndex) => {
                              const colors = getTagColor(tag);
                              return (
                                <Badge
                                  key={tagIndex}
                                  variant="outline"
                                  className={`${colors.bg} ${colors.text} ${colors.border} text-xs font-medium`}
                                >
                                  {tag}
                                </Badge>
                              );
                            })
                          ) : (
                            <span className="text-sm text-gray-400 italic">
                              No tags added
                            </span>
                          )}
                          {lead.tags.length > 1 && (
                            <Badge
                              variant="outline"
                              className="text-xs bg-gray-50 text-gray-500 cursor-pointer"
                              onClick={() => {
                                setSelectedLead(lead);
                                setIsModalOpen(true);
                              }}
                            >
                              +{lead.tags.length - 1}
                            </Badge>
                          )}
                        </div>
                        {/* Show Modal in the lead */}
                        {isModalOpen && selectedLead && (
                          <div className="fixed inset-0 flex justify-center items-center bg-black/10 bg-opacity-50 z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                              <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">
                                  Lead Tags
                                </h3>
                                <button
                                  onClick={() => setIsModalOpen(false)}
                                  className="text-gray-600 hover:text-gray-900"
                                >
                                  &times;
                                </button>
                              </div>
                              <div className="mt-4">
                                <ul>
                                  {selectedLead.tags.map(
                                    (tag: string, index: number) => (
                                      <li
                                        key={index}
                                        className="text-md text-gray-700"
                                      >
                                        {tag}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-xs font-semibold">
                            {/* {lead.connectedWith.avatar} */}
                            {lead.connectedWith.avatar ? (
                              <img
                                src={lead.connectedWith.avatar}
                                alt="connected avatar"
                                className="w-full h-full object-cover rounded-full"
                              />
                            ) : (
                              lead.connectedWith.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                            )}
                          </div>
                          <div>
                            <p className=" text-[#171717] text-sm">
                              {lead.connectedWith.name}
                            </p>
                            <p className="text-xs text-[#5C5C5C]">
                              {lead.connectedWith.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <div className="">
                          <div className="text-sm text-[#171717]">
                            {lead.date.split(" - ")[0]}
                          </div>
                          <div className="text-xs text-[#5C5C5C]">
                            {lead.date.split(" - ")[1]}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-2 w-10">
                          {renderExportIcon(lead.exportType)}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {activeTab === "quality" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Lead Quality Score
              </h2>
              {/* Display Lead Quality Score Content */}
            </div>
          )}

          {activeTab === "leaderboard" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Leaderboard
              </h2>
              {/* Display Leaderboard Content */}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}