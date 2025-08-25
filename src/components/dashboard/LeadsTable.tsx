import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Filter,
  Download,
  Star,
  Crown,
  Plus,
  MoreHorizontal,
} from "lucide-react";

export function LeadsTable() {
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("leads");

  const tabs = [
    { id: "leads", name: "Leads" },
    { id: "quality", name: "Lead Quality Score" },
    { id: "leaderboard", name: "Leaderboard" },
  ];

  const leadsData = [
    {
      id: "1",
      name: "Efehan Coskun",
      email: "efehan@acme.com",
      tags: ["Team", "Enterprise"],
      connectedWith: {
        name: "Efehan Coskun",
        email: "efehan@alignui.com",
        avatar: "EC",
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
        avatar: "HY",
      },
      date: "Tuesday Aug 04 - 2025",
      exportType: "star",
      status: "Pending",
      score: 85,
    },
    {
      id: "3",
      name: "Demir Vural",
      email: "demir@test.com",
      tags: ["GITEX DUBAI", "Summit"],
      connectedWith: {
        name: "Demir Vural",
        email: "demir@alignui.com",
        avatar: "DV",
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
      tags: ["Enterprise", "Conference"],
      connectedWith: {
        name: "Sarah Johnson",
        email: "sarah@alignui.com",
        avatar: "SJ",
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
      tags: ["Startup", "Demo Day"],
      connectedWith: {
        name: "Michael Chen",
        email: "michael@alignui.com",
        avatar: "MC",
      },
      date: "Tuesday Aug 04 - 2025",
      exportType: "star",
      status: "Active",
      score: 88,
    },
  ];

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedLeads(leadsData.map((lead) => lead.id));
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

  const getStatusColor = (status: string) => {
    const colors = {
      Active: {
        bg: "bg-green-50",
        text: "text-green-700",
        dot: "bg-green-500",
      },
      Pending: {
        bg: "bg-yellow-50",
        text: "text-yellow-700",
        dot: "bg-yellow-500",
      },
      Converted: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        dot: "bg-blue-500",
      },
    };
    return (
      colors[status as keyof typeof colors] || {
        bg: "bg-gray-50",
        text: "text-gray-700",
        dot: "bg-gray-500",
      }
    );
  };

  const renderExportIcon = (type: string) => {
    switch (type) {
      case "star":
        return <Star className="w-5 h-5 text-orange-500 fill-orange-500" />;
      case "crown":
        return (
          <div className="flex items-center gap-1">
            <Crown className="w-4 h-4 text-green-500 fill-green-500" />
            <span className="text-green-500 text-sm font-bold">P</span>
            <span className="text-yellow-500 text-sm">🎯</span>
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
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export ({selectedLeads.length})
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Lead
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          {activeTab === "leads" && (
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left py-4 px-6 w-12">
                    <Checkbox
                      checked={selectedLeads.length === leadsData.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Lead
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Tags
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Connected with
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Score
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Date
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {leadsData.map((lead) => {
                  const statusColors = getStatusColor(lead.status);
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
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {lead.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {lead.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {lead.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${statusColors.bg} ${statusColors.text}`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${statusColors.dot}`}
                          ></div>
                          {lead.status}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-1">
                          {lead.tags.length > 0 ? (
                            lead.tags.slice(0, 2).map((tag, tagIndex) => {
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
                          {lead.tags.length > 2 && (
                            <Badge
                              variant="outline"
                              className="text-xs bg-gray-50 text-gray-500"
                            >
                              +{lead.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-xs font-semibold">
                            {lead.connectedWith.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 text-sm">
                              {lead.connectedWith.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {lead.connectedWith.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <div
                            className={`text-sm font-bold ${
                              lead.score >= 90
                                ? "text-green-600"
                                : lead.score >= 80
                                ? "text-blue-600"
                                : "text-orange-600"
                            }`}
                          >
                            {lead.score}%
                          </div>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                lead.score >= 90
                                  ? "bg-green-500"
                                  : lead.score >= 80
                                  ? "bg-blue-500"
                                  : "bg-orange-500"
                              }`}
                              style={{ width: `${lead.score}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm text-gray-600">
                          <div className="font-medium">
                            {lead.date.split(" - ")[0]}
                          </div>
                          <div className="text-xs text-gray-400">
                            {lead.date.split(" - ")[1]}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          {renderExportIcon(lead.exportType)}
                          <Button variant="ghost" size="sm" className="p-1">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
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
