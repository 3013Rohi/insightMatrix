import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
      <div className="text-gray-600">Welcome, User</div>
    </header>
  );
};

export default Header;
