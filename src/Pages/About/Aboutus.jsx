import React from 'react'
import Banner from "../../img/banner.png"
export default function Aboutus() {
  return (
    <>
   <section className="grid md:grid-cols-2 gap-12 max-w-[1410px] mx-auto px-12  items-center ">
<div className="flex flex-col items-start max-w-lg mx-auto md:mx-0">
  <h3 className="text-3xl font-extrabold text-black mb-6">Our Story</h3>
  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
    At <span className="font-semibold text-black">MadTechies</span>, we are passionate about harnessing the power of technology to transform businesses. 
    Founded with a mission to provide high-quality, innovative digital solutions, we have been helping businesses thrive in the digital world since our inception.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed">
    We specialize in web development, mobile app development, digital marketing, and custom software solutions. Our diverse team of experts is driven by creativity, collaboration, and a commitment to excellence in everything we do.
  </p>
</div>
<div className="flex justify-center items-center">
  <img
    src={Banner}
    alt="MadTechies Team"
    className="w-full h-auto rounded-xl scale-x-[-1] object-cover"
  />
</div>
</section>
    {/* Mission Section */}
    <section className="mt-16 max-w-[1400px] px-6 md:px-12 mx-auto">
  <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 text-center">
    Our Mission
  </h3>
  <div className="rounded-xl px-6 md:px-12  ">
    <p className="text-base md:text-lg text-gray-800 leading-relaxed text-center">
      At <span className="font-semibold text-blue-600">MadTechies</span>, our mission is to empower businesses with innovative digital tools and strategies that spark growth and success. We strive to be your trusted partner, driving transformation through cutting-edge solutions tailored to your unique needs. Our goal is to help you navigate the digital world and achieve long-term success, no matter the size of your business.
    </p>
  </div>
</section>
    {/* Values Section */}
    <section className="mt-16 px-6 max-w-7xl py-6 mx-auto">
  <h3 className="text-3xl md:text-4xl font-bold text-black mb-10 text-center">
    Our Core Values
  </h3>
  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {/* Value 1 */}
    <div className="flex flex-col items-center text-center p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
      <h4 className="text-2xl font-semibold text-black mb-4">Innovation</h4>
      <p className="text-gray-700 text-base md:text-lg">
        We are always at the forefront of technological innovation, pushing the boundaries to craft groundbreaking solutions that solve real-world problems.
      </p>
    </div>
    {/* Value 2 */}
    <div className="flex flex-col items-center text-center p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
      <h4 className="text-2xl font-semibold text-black mb-4">Collaboration</h4>
      <p className="text-gray-700 text-base md:text-lg">
        By partnering closely with our clients, we create strong, long-lasting relationships that ensure mutual success and impactful results.
      </p>
    </div>
    {/* Value 3 */}
    <div className="flex flex-col items-center text-center p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
      <h4 className="text-2xl font-semibold text-black mb-4">Excellence</h4>
      <p className="text-gray-700 text-base md:text-lg">
        We are committed to the highest standards of quality in every project we undertake, delivering excellence that exceeds expectations.
      </p>
    </div>
  </div>
</section>
  </>
  )
}