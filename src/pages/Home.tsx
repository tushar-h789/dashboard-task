import React from "react";
import { LeadsTable } from "@/components/dashboard/LeadsTable";

export default function Home() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here's your leads overview.
        </p>
      </div>

      <LeadsTable />
    </div>
  );
}
