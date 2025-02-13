import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ConImg from "../../Component/img/contact.png";

export default function ContactUs() {
  return (
    <main className="bg-gray-50 px-6 sm:px-20">
      {/* Header Section */}
      <section className="sm:py-8 md:py-12 px-6 sm:px-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div className="flex flex-col text-center md:text-left">
              <h2 className="text-sm font-medium text-gray-600 uppercase">Get in Touch</h2>
              <h1 className="text-4xl md:text-7xl font-bold text-gray-800">Contact Us</h1>
            </div>
            <p className="text-base sm:text-xl md:text-3xl font-medium text-gray-700 text-center md:text-right">
              We respect your query <br /> and opinion
            </p>
          </div>
        </div>
      </section>
      {/* Main Section */}
      <section className="px-4 py-6 sm:pb-10 lg:pb-20">
        <div className="container mx-auto px-4 bg-black rounded-3xl text-gray-900 p-4 sm:p-6 md:p-8 shadow-md">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-14">
            {/* Contact Information */}
            <div className="flex-1 bg-gray-100 py-6 sm:py-8 md:py-11 px-5 sm:px-8 md:px-10 rounded-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Contact Information</h2>
              <p className="text-gray-600 mt-4">
                We love to hear from you. Our friendly team is always here to help.
              </p>
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-4">
                  <FaWhatsapp className="text-xl text-green-500" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Phone:</p>
                    <p className="text-gray-600 text-sm">+91 8894393439</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-xl text-black" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Email:</p>
                    <p className="text-gray-600 text-sm">madtechies.help@gmail.com</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={ConImg}
                    alt="Contact"
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="flex-1">
              <h2 className="text-lg font-medium text-black">
                We listen to our clients and well-wishers..
              </h2>
              <div className="flex flex-col gap-4 mt-6">
                <label htmlFor="email" className="text-sm font-medium text-black">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                  className="text-sm text-black border border-gray-300 rounded-xl p-4 w-full outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col gap-4 mt-6">
                <label htmlFor="message" className="text-sm font-medium text-black">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message..."
                  required
                  className="text-sm text-black border border-gray-300 rounded-xl p-4 w-full h-40 outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-10 py-3 rounded-xl hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
