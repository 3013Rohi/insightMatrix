import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-600 text-white flex flex-col p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-6">ExcelApp</h1>
   
      <Link to="/upload" className="hover:bg-blue-500 p-2 rounded">Upload File</Link>
      <Link to="/history" className="hover:bg-blue-500 p-2 rounded">My History</Link>
      <Link to="/ai-insights" className="hover:bg-blue-500 p-2 rounded">AI Insights</Link>
      <Link to="/admin" className="hover:bg-blue-500 p-2 rounded">Admin Panel</Link>
    </div>
  );
};

export default Sidebar;
