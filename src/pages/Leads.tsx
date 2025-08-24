import React from "react";

export default function Leads() {
  const leads = [
    {
      id: 1,
      name: "Acme Corp",
      email: "contact@acme.com",
      phone: "+1-555-0123",
      status: "New",
      source: "Website",
      assignedTo: "John Doe",
      value: "$50,000",
    },
    {
      id: 2,
      name: "TechStart Inc",
      email: "hello@techstart.com",
      phone: "+1-555-0124",
      status: "Contacted",
      source: "LinkedIn",
      assignedTo: "Jane Smith",
      value: "$75,000",
    },
    {
      id: 3,
      name: "Global Solutions",
      email: "info@globalsolutions.com",
      phone: "+1-555-0125",
      status: "Qualified",
      source: "Referral",
      assignedTo: "Mike Johnson",
      value: "$120,000",
    },
    {
      id: 4,
      name: "Innovate Labs",
      email: "contact@innovatelabs.com",
      phone: "+1-555-0126",
      status: "Proposal",
      source: "Trade Show",
      assignedTo: "Sarah Wilson",
      value: "$90,000",
    },
    {
      id: 5,
      name: "Future Systems",
      email: "hello@futuresystems.com",
      phone: "+1-555-0127",
      status: "Negotiation",
      source: "Cold Call",
      assignedTo: "David Brown",
      value: "$200,000",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800";
      case "Contacted":
        return "bg-yellow-100 text-yellow-800";
      case "Qualified":
        return "bg-green-100 text-green-800";
      case "Proposal":
        return "bg-purple-100 text-purple-800";
      case "Negotiation":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Leads Management
        </h1>
        <p className="text-gray-600">
          Track and manage your sales leads through the entire pipeline.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {leads.filter((l) => l.status === "New").length}
            </div>
            <div className="text-sm text-gray-600">New Leads</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {leads.filter((l) => l.status === "Contacted").length}
            </div>
            <div className="text-sm text-gray-600">Contacted</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {leads.filter((l) => l.status === "Qualified").length}
            </div>
            <div className="text-sm text-gray-600">Qualified</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {
                leads.filter(
                  (l) => l.status === "Proposal" || l.status === "Negotiation"
                ).length
              }
            </div>
            <div className="text-sm text-gray-600">In Pipeline</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">All Leads</h2>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Add Lead
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {lead.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{lead.email}</div>
                    <div className="text-sm text-gray-500">{lead.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        lead.status
                      )}`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.source}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.assignedTo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {lead.value}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      Edit
                    </button>
                    <button className="text-green-600 hover:text-green-900 mr-3">
                      Convert
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
