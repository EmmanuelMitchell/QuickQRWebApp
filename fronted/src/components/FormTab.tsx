import { useState } from "react";

export default function TabForm() {
  const [activeTab, setActiveTab] = useState("link");

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 border-b pb-2">
        {["link", "email"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold text-gray-600 ${
              activeTab === tab
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "hover:text-indigo-500"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Form for Link or Email */}
      <div className="space-y-4">
        {activeTab === "link" ? (
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              Enter URL
            </label>
            <input
              type="url"
              id="url"
              placeholder="https://example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>
        )}
        <button className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">
          Generate QR Code
        </button>
      </div>
    </div>
  );
}
