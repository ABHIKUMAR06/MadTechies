import React from "react";
import { AiOutlineFundProjectionScreen, AiOutlineLayout, AiOutlineCode, AiOutlineDeploymentUnit, AiOutlineRocket } from "react-icons/ai";
const roadmapSteps = [
  {
    title: "Planning & Research",
    description: "Define project goals, target audience, and technology stack.",
    icon: <AiOutlineFundProjectionScreen className="text-white h-12 w-12 mx-auto" />,
  },
  {
    title: "Wireframing & Design",
    description: "Create wireframes and UI/UX designs for a seamless user experience.",
    icon: <AiOutlineLayout className="text-white h-12 w-12 mx-auto" />,
  },
  {
    title: "Development",
    description: "Build frontend and backend, ensuring responsiveness and functionality.",
    icon: <AiOutlineCode className="text-white h-12 w-12 mx-auto" />,
  },
  {
    title: "Testing & Deployment",
    description: "Conduct rigorous testing and deploy the website on the server.",
    icon: <AiOutlineDeploymentUnit className="text-white h-12 w-12 mx-auto" />,
  },
  {
    title: "Launch & Maintenance",
    description: "Monitor performance, update content, and optimize SEO regularly.",
    icon: <AiOutlineRocket className="text-white h-12 w-12 mx-auto" />,
  },
];

const Roadmap = () => {
  return (
    <section className="py-12 px-6 sm:px-10 lg:px-24 mx-auto max-w-[1400px]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        Website Development Roadmap
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {roadmapSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-8 hover:shadow-2xl hover:-translate-y-2 transform transition duration-300"
          >
            <div className="flex justify-center items-center mb-6">
              <p className="bg-black p-4 rounded-full flex items-center justify-center">
                {step.icon}
              </p>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center">
              {step.title}
            </h2>
            <p className="text-gray-600 text-center leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Roadmap;