import React, { useState } from "react";

export default function Tags() {
  const [tags, setTags] = useState([
    {
      id: 1,
      name: "Hot Lead",
      color: "bg-red-100 text-red-800",
      count: 23,
      description: "High priority leads requiring immediate attention",
    },
    {
      id: 2,
      name: "Cold Lead",
      color: "bg-blue-100 text-blue-800",
      count: 45,
      description: "Leads that need follow-up or re-engagement",
    },
    {
      id: 3,
      name: "Qualified",
      color: "bg-green-100 text-green-800",
      count: 67,
      description: "Leads that meet qualification criteria",
    },
    {
      id: 4,
      name: "Enterprise",
      color: "bg-purple-100 text-purple-800",
      count: 12,
      description: "Large company leads with high potential value",
    },
    {
      id: 5,
      name: "Startup",
      color: "bg-yellow-100 text-yellow-800",
      count: 34,
      description: "New company leads in growth phase",
    },
    {
      id: 6,
      name: "Returning",
      color: "bg-indigo-100 text-indigo-800",
      count: 28,
      description: "Previous customers returning for new services",
    },
  ]);

  const [newTag, setNewTag] = useState({
    name: "",
    color: "bg-gray-100 text-gray-800",
    description: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const addTag = () => {
    if (newTag.name.trim()) {
      const tag = {
        id: Date.now(),
        name: newTag.name,
        color: newTag.color,
        description: newTag.description,
        count: 0,
      };
      setTags([...tags, tag]);
      setNewTag({
        name: "",
        color: "bg-gray-100 text-gray-800",
        description: "",
      });
      setShowAddForm(false);
    }
  };

  const deleteTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const colorOptions = [
    { value: "bg-red-100 text-red-800", label: "Red" },
    { value: "bg-blue-100 text-blue-800", label: "Blue" },
    { value: "bg-green-100 text-green-800", label: "Green" },
    { value: "bg-purple-100 text-purple-800", label: "Purple" },
    { value: "bg-yellow-100 text-yellow-800", label: "Yellow" },
    { value: "bg-indigo-100 text-indigo-800", label: "Indigo" },
    { value: "bg-pink-100 text-pink-800", label: "Pink" },
    { value: "bg-gray-100 text-gray-800", label: "Gray" },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Tags Management
        </h1>
        <p className="text-gray-600">
          Organize and categorize your leads with custom tags.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {tags.length}
            </div>
            <div className="text-sm text-gray-600">Total Tags</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {tags.reduce((sum, tag) => sum + tag.count, 0)}
            </div>
            <div className="text-sm text-gray-600">Tagged Leads</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {Math.round(
                tags.reduce((sum, tag) => sum + tag.count, 0) / tags.length
              )}
            </div>
            <div className="text-sm text-gray-600">Avg. Leads/Tag</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              {tags.filter((tag) => tag.count > 0).length}
            </div>
            <div className="text-sm text-gray-600">Active Tags</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">All Tags</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              {showAddForm ? "Cancel" : "Add Tag"}
            </button>
          </div>
        </div>

        {showAddForm && (
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tag Name
                </label>
                <input
                  type="text"
                  value={newTag.name}
                  onChange={(e) =>
                    setNewTag({ ...newTag, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter tag name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color
                </label>
                <select
                  value={newTag.color}
                  onChange={(e) =>
                    setNewTag({ ...newTag, color: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {colorOptions.map((color) => (
                    <option key={color.value} value={color.value}>
                      {color.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  value={newTag.description}
                  onChange={(e) =>
                    setNewTag({ ...newTag, description: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter description"
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={addTag}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create Tag
              </button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tag
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Leads Count
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tags.map((tag) => (
                <tr key={tag.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${tag.color}`}
                    >
                      {tag.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {tag.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {tag.count}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTag(tag.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Tag Usage Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Best Practices</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Use consistent naming conventions</li>
              <li>• Keep tags descriptive but concise</li>
              <li>• Avoid creating too many similar tags</li>
              <li>• Review and clean up unused tags regularly</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Common Use Cases</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Lead priority levels (Hot, Warm, Cold)</li>
              <li>• Company size (Startup, SMB, Enterprise)</li>
              <li>• Industry verticals (Tech, Healthcare, Finance)</li>
              <li>• Lead source (Website, Referral, Trade Show)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
