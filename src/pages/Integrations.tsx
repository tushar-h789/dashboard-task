import React from "react";

export default function Integrations() {
  const integrations = [
    {
      id: 1,
      name: "Slack",
      description: "Team communication and notifications",
      status: "Connected",
      icon: "💬",
      category: "Communication",
    },
    {
      id: 2,
      name: "Zapier",
      description: "Automate workflows between apps",
      status: "Connected",
      icon: "⚡",
      category: "Automation",
    },
    {
      id: 3,
      name: "Stripe",
      description: "Payment processing and billing",
      status: "Connected",
      icon: "💳",
      category: "Payments",
    },
    {
      id: 4,
      name: "Mailchimp",
      description: "Email marketing campaigns",
      status: "Disconnected",
      icon: "📧",
      category: "Marketing",
    },
    {
      id: 5,
      name: "Google Analytics",
      description: "Website analytics and tracking",
      status: "Connected",
      icon: "📊",
      category: "Analytics",
    },
    {
      id: 6,
      name: "HubSpot",
      description: "CRM and marketing automation",
      status: "Disconnected",
      icon: "🎯",
      category: "CRM",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Connected":
        return "bg-green-100 text-green-800";
      case "Disconnected":
        return "bg-red-100 text-red-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Integrations</h1>
        <p className="text-gray-600">
          Connect your dashboard with external tools and services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {integrations.filter((i) => i.status === "Connected").length}
            </div>
            <div className="text-sm text-gray-600">Connected</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">
              {integrations.filter((i) => i.status === "Disconnected").length}
            </div>
            <div className="text-sm text-gray-600">Disconnected</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {integrations.length}
            </div>
            <div className="text-sm text-gray-600">Total Available</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{integration.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {integration.category}
                  </p>
                </div>
              </div>
              <span
                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                  integration.status
                )}`}
              >
                {integration.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              {integration.description}
            </p>

            <div className="flex space-x-2">
              {integration.status === "Connected" ? (
                <>
                  <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Configure
                  </button>
                  <button className="flex-1 bg-red-100 text-red-700 px-3 py-2 rounded-lg text-sm hover:bg-red-200 transition-colors">
                    Disconnect
                  </button>
                </>
              ) : (
                <button className="w-full bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                  Connect
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Available Integrations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-center">
            <div className="text-2xl mb-2">🔗</div>
            <div className="text-sm font-medium text-gray-700">Add Custom</div>
            <div className="text-xs text-gray-500">API Integration</div>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-center">
            <div className="text-2xl mb-2">📱</div>
            <div className="text-sm font-medium text-gray-700">Mobile App</div>
            <div className="text-xs text-gray-500">Push Notifications</div>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-center">
            <div className="text-2xl mb-2">🌐</div>
            <div className="text-sm font-medium text-gray-700">Webhook</div>
            <div className="text-xs text-gray-500">Real-time Updates</div>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-center">
            <div className="text-2xl mb-2">📊</div>
            <div className="text-sm font-medium text-gray-700">Data Export</div>
            <div className="text-xs text-gray-500">CSV, JSON, XML</div>
          </button>
        </div>
      </div>
    </div>
  );
}
