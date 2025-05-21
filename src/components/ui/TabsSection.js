import { useState } from "react";

export default function TabsSection({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-section">
      <div className="flex mb-4 space-x-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 border rounded ${
              activeTab === index ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="border p-4 rounded">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
