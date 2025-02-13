import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import { Link } from 'react-router-dom'
export default function HeroSection({heading, detail, btnName,to}) {
  return (
    <div>
      <section className=" px-4 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Left Side (Text Content) */}
    <div className="text-center md:text-left">
      <h1 className="ak-main-class text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-800">
       {heading} 
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-600">
       {detail}
      </p>
      <div className="mt-6 flex justify-center md:justify-start">
        <Link
          to={to}
          className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          {btnName} 
        </Link>
      </div>
    </div>
    <ContactForm/>
  </div>
</section>
    </div>
  )
}