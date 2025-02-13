import React from 'react';
import { FaWordpress, FaAndroid, FaReact, FaLaravel, FaShopify } from 'react-icons/fa';
import { SiAngular } from "react-icons/si";

const technologies = [
  { name: 'React', icon: <FaReact />, color: 'text-cyan-500' },
  { name: 'Shopify', icon: <FaShopify />, color: 'text-green-600' },
  { name: 'Angular', icon: <SiAngular />, color: 'text-red-600' },
  { name: 'WordPress', icon: <FaWordpress />, color: 'text-blue-600' },
  { name: 'Android', icon: <FaAndroid />, color: 'text-green-500' },
  { name: 'Laravel', icon: <FaLaravel />, color: 'text-red-700' },
];

const TechnologyGrid = () => {
  return (
    <div className="py-20 px-10  max-w-[1400px] mx-auto">
        <div className="py-20 px-6 rounded-3xl bg-black">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">
        You Can Hire Us For Following Technologies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className={`text-6xl ${tech.color} mb-4`}>{tech.icon}</div>
            <h2 className="text-lg font-semibold text-gray-800">{tech.name}</h2>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TechnologyGrid;
