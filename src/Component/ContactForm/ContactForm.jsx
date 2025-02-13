import React from 'react'

export default function ContactForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center md:text-left mb-6">
        Contact Us
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-800 font-medium" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-800 font-medium" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-800 font-medium" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
