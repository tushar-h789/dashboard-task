import React, { useState } from "react";

export default function FAQs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How do I add new team members?",
      answer:
        "To add new team members, go to the Members page and click the 'Add Member' button. Fill in their information including name, email, department, and role. You can also invite them via email invitation.",
    },
    {
      id: 2,
      question: "How can I track lead progress?",
      answer:
        "Lead progress can be tracked through the Leads page. Each lead has a status that shows where they are in your sales pipeline. You can update statuses, add notes, and assign leads to team members.",
    },
    {
      id: 3,
      question: "What integrations are available?",
      answer:
        "We offer integrations with popular tools like Slack, Zapier, Stripe, Google Analytics, and more. You can connect these services through the Integrations page to automate workflows and sync data.",
    },
    {
      id: 4,
      question: "How do I customize the dashboard?",
      answer:
        "Dashboard customization is available through the Customization page. You can modify colors, layouts, add widgets, and personalize the interface to match your brand and preferences.",
    },
    {
      id: 5,
      question: "Can I export data from the dashboard?",
      answer:
        "Yes, you can export data in various formats including CSV, JSON, and XML. This feature is available in most sections of the dashboard and can be accessed through the export buttons.",
    },
    {
      id: 6,
      question: "How do I manage department permissions?",
      answer:
        "Department permissions can be managed through the Departments page. You can set different access levels for team members, assign managers, and control what each department can see and modify.",
    },
    {
      id: 7,
      question: "What payment methods are supported?",
      answer:
        "We support various payment methods including credit cards, PayPal, and bank transfers. Payment processing is handled securely through our Stripe integration.",
    },
    {
      id: 8,
      question: "How can I get technical support?",
      answer:
        "Technical support is available through our help desk, live chat, and email support. You can also check our knowledge base for common issues and solutions.",
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Find answers to common questions about using the dashboard.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openFaq === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {openFaq === faq.id && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            Still need help?
          </h2>
          <p className="text-blue-700 mb-4">
            Can't find the answer you're looking for? Our support team is here
            to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
              Live Chat
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
              Knowledge Base
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Quick Tips
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Use keyboard shortcuts for faster navigation</li>
              <li>• Set up notifications to stay updated</li>
              <li>• Customize your dashboard layout</li>
              <li>• Export data regularly for backup</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Popular Topics
            </h3>
            <div className="space-y-2">
              <button className="block text-sm text-blue-600 hover:text-blue-800 text-left">
                Getting Started Guide
              </button>
              <button className="block text-sm text-blue-600 hover:text-blue-800 text-left">
                User Management
              </button>
              <button className="block text-sm text-blue-600 hover:text-blue-800 text-left">
                Data Import/Export
              </button>
              <button className="block text-sm text-blue-600 hover:text-blue-800 text-left">
                API Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
