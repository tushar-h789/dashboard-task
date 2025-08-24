import React from "react";

export default function Departments() {
  const departments = [
    {
      id: 1,
      name: "Sales",
      members: 24,
      manager: "John Doe",
      status: "Active",
    },
    {
      id: 2,
      name: "Marketing",
      members: 18,
      manager: "Jane Smith",
      status: "Active",
    },
    {
      id: 3,
      name: "Engineering",
      members: 32,
      manager: "Mike Johnson",
      status: "Active",
    },
    {
      id: 4,
      name: "Human Resources",
      members: 8,
      manager: "David Brown",
      status: "Active",
    },
    {
      id: 5,
      name: "Finance",
      members: 12,
      manager: "Lisa Chen",
      status: "Active",
    },
    {
      id: 6,
      name: "Customer Support",
      members: 15,
      manager: "Alex Turner",
      status: "Active",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Departments</h1>
        <p className="text-gray-600">
          Organize your team into departments and manage their structure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {dept.name}
              </h3>
              <span
                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  dept.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {dept.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Members:</span>
                <span className="text-sm font-medium text-gray-900">
                  {dept.members}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Manager:</span>
                <span className="text-sm font-medium text-gray-900">
                  {dept.manager}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  Edit
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                  View Members
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Department Statistics
          </h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Create Department
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {departments.length}
            </div>
            <div className="text-sm text-gray-600">Total Departments</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {departments.reduce((sum, dept) => sum + dept.members, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {Math.round(
                departments.reduce((sum, dept) => sum + dept.members, 0) /
                  departments.length
              )}
            </div>
            <div className="text-sm text-gray-600">Avg. Members/Dept</div>
          </div>
        </div>
      </div>
    </div>
  );
}
