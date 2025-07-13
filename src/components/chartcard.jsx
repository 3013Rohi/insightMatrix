import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChartCard = ({ title, description, link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition"
    >
      <h3 className="text-xl font-bold text-blue-700">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ChartCard;
