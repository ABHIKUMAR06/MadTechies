import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function PriceSection() {
  return (
      <section className="px-4 pb-6 sm:pb-10 md:pb-16">
  <div className="container mx-auto bg-gray-900 p-6 sm:p-10 md:p-16 rounded-3xl">
    {/* Header Section */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h1 className="bg-purple-200 text-gray-700 font-medium py-2 px-6 rounded-full uppercase tracking-wider">
        Transparent Fees
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
        Estimated Pricing
      </h2>
    </div>

    {/* Cards Section */}
    <div className="mt-12 grid lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-gray-800 rounded-3xl text-white shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="pb-6 border-b border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold">UI/UX Design</h3>
            <p className="text-sm text-gray-300 mt-2">
              For personal or Industrial
            </p>
            <p className="text-2xl font-bold mt-4">$1,000 - $8,000</p>
          </div>
          <div className="pt-6">
            <h4 className="text-lg font-bold mb-4">Features</h4>
            <ul className="space-y-4">
              {[
                "Ensured proper UX",
                "Followed guide or create",
                "Modern softwares",
                "Scalable and ready to develop",
                "Collaborative",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheckCircle className=" text-white" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-800 rounded-3xl text-white shadow-lg overflow-hidden border-2 border-yellow-400">
        <div className="p-8">
          <div className="pb-6 border-b border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold">Development</h3>
            <p className="text-sm text-gray-300 mt-2">
              For personal or Industrial
            </p>
            <p className="text-2xl font-bold mt-4">$8,000 - $50,000</p>
          </div>
          <div className="pt-6">
            <h4 className="text-lg font-bold mb-4">Features</h4>
            <ul className="space-y-4">
              {[
                "Frontend Development",
                "Backend Development",
                "Database, Server Setup",
                "DevOps and Deploy",
                "Collaborative Team",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheckCircle className=" text-white" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-800 rounded-3xl text-white shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="pb-6 border-b border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold">Branding</h3>
            <p className="text-sm text-gray-300 mt-2">
              For personal or Industrial
            </p>
            <p className="text-2xl font-bold mt-4">$1,000 - $10,000</p>
          </div>
          <div className="pt-6">
            <h4 className="text-lg font-bold mb-4">Features</h4>
            <ul className="space-y-4">
              {[
                "Logo from scratch",
                "Brand Guideline",
                "Animation and Graphical assets",
                "3D Animation",
                "Brand Assets preparation",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheckCircle className=" text-white" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
