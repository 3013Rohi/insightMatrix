

import React from 'react';
import Sidebar from "../components/sidebar";
import Header from '../components/header';
import ChartCard from '../components/chartcard';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 space-y-6 overflow-auto">
          <h2 className="text-2xl font-semibold text-blue-600">Welcome to Excel Analyzer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ChartCard title="Upload Excel" description="Upload a new Excel file for analysis" link="/upload" />
            <ChartCard title="View History" description="See your past uploads and charts" link="/history" />
            <ChartCard title="AI Insights" description="Generate insights using AI APIs" link="/ai-insights" />
            <ChartCard title="Admin Panel" description="Manage users and data" link="/admin" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
