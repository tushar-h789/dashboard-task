import React, { useState } from "react";

export default function BulkAdjustments() {
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [adjustmentType, setAdjustmentType] = useState("department");
  const [adjustmentValue, setAdjustmentValue] = useState("");

  const members = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      department: "Sales",
      role: "Manager",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      department: "Marketing",
      role: "Lead",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      department: "Engineering",
      role: "Developer",
      status: "Active",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      department: "Sales",
      role: "Representative",
      status: "Active",
    },
    {
      id: 5,
      name: "David Brown",
      email: "david@example.com",
      department: "HR",
      role: "Manager",
      status: "Active",
    },
    {
      id: 6,
      name: "Lisa Chen",
      email: "lisa@example.com",
      department: "Finance",
      role: "Analyst",
      status: "Active",
    },
    {
      id: 7,
      name: "Alex Turner",
      email: "alex@example.com",
      department: "Customer Support",
      role: "Specialist",
      status: "Active",
    },
    {
      id: 8,
      name: "Emma Davis",
      email: "emma@example.com",
      department: "Marketing",
      role: "Coordinator",
      status: "Active",
    },
  ];

  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "HR",
    "Finance",
    "Customer Support",
    "Product",
    "Operations",
  ];
  const roles = [
    "Manager",
    "Lead",
    "Senior",
    "Mid-level",
    "Junior",
    "Intern",
    "Consultant",
    "Specialist",
  ];

  const toggleMember = (id: number) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((memberId) => memberId !== id)
        : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedMembers(members.map((member) => member.id));
  };

  const deselectAll = () => {
    setSelectedMembers([]);
  };

  const applyBulkAdjustment = () => {
    if (selectedMembers.length === 0) {
      alert("Please select at least one member");
      return;
    }
    if (!adjustmentValue) {
      alert("Please select a value for the adjustment");
      return;
    }

    // Here you would typically make an API call to update the selected members
    console.log(
      `Applying ${adjustmentType} adjustment to ${adjustmentValue} for members:`,
      selectedMembers
    );
    alert(`Successfully updated ${selectedMembers.length} members`);

    // Reset form
    setSelectedMembers([]);
    setAdjustmentValue("");
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Bulk Adjustments
        </h1>
        <p className="text-gray-600">
          Make changes to multiple team members at once.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Select Members
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={selectAll}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Select All
                  </button>
                  <button
                    onClick={deselectAll}
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Deselect All
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input
                        type="checkbox"
                        checked={selectedMembers.length === members.length}
                        onChange={() =>
                          selectedMembers.length === members.length
                            ? deselectAll()
                            : selectAll()
                        }
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {members.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedMembers.includes(member.id)}
                          onChange={() => toggleMember(member.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {member.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {member.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {member.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {member.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Bulk Actions
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adjustment Type
                </label>
                <select
                  value={adjustmentType}
                  onChange={(e) => setAdjustmentType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="department">Department</option>
                  <option value="role">Role</option>
                  <option value="status">Status</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Value
                </label>
                {adjustmentType === "department" && (
                  <select
                    value={adjustmentValue}
                    onChange={(e) => setAdjustmentValue(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                )}

                {adjustmentType === "role" && (
                  <select
                    value={adjustmentValue}
                    onChange={(e) => setAdjustmentValue(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Role</option>
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                )}

                {adjustmentType === "status" && (
                  <select
                    value={adjustmentValue}
                    onChange={(e) => setAdjustmentValue(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Suspended">Suspended</option>
                  </select>
                )}
              </div>

              <button
                onClick={applyBulkAdjustment}
                disabled={selectedMembers.length === 0 || !adjustmentValue}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Apply to {selectedMembers.length} Member
                {selectedMembers.length !== 1 ? "s" : ""}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Summary
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Selected Members:</span>
                <span className="font-medium text-gray-900">
                  {selectedMembers.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Members:</span>
                <span className="font-medium text-gray-900">
                  {members.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Adjustment Type:</span>
                <span className="font-medium text-gray-900 capitalize">
                  {adjustmentType}
                </span>
              </div>
              {adjustmentValue && (
                <div className="flex justify-between">
                  <span className="text-gray-600">New Value:</span>
                  <span className="font-medium text-gray-900">
                    {adjustmentValue}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Warning</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Bulk adjustments cannot be undone. Please review your
                    selection carefully before applying changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
