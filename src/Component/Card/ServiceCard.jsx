import React from 'react';
const ServiceCard = ({ id, icon, title, description }) => {
  return (
    <div
      key={id}
      className="service-card p-6 bg-black text-white shadow-lg rounded-lg transform transition duration-300 group hover:bg-yellow-500 flex flex-col items-center lg:items-start"
    >

  <p className="mb-6 bg-gray-800 flex items-center justify-center rounded-full  w-20 h-20 group-hover:bg-transparent group-hover:text-black">{icon}</p>


      <h1 className="text-xl font-semibold text-white mb-4 group-hover:text-black">
        {title}
      </h1>
      <p className="text-left text-white group-hover:text-black line-clamp-2">
        {description}
      </p>
    </div>
  );
};
export default ServiceCard;