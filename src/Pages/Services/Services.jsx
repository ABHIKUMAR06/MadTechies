import React from 'react';
import HeroSection from '../../Component/HeroSection/HeroSection';
import { FaSearch, FaPencilAlt, FaCogs,FaCog, FaCode, FaMobileAlt, FaPalette, FaBullhorn } from 'react-icons/fa';
const Services = [
  {
    title: "Web Development",
    description1:
      "We build responsive, user-friendly websites tailored to your needs. Our websites look great and function seamlessly across all devices.",
    description2:
      "Using the latest technologies, we create modern, scalable solutions for e-commerce and corporate websites.",
    icon: <FaCode />,
  },
  {
    title: "Android Development",
    description1:
      "We design efficient Android applications for excellent user experiences. Business apps, utility tools—you name it!",
    description2:
      "Our team ensures your app is high-performance and compatible with all Android devices.",
    icon: <FaMobileAlt />,
  },
  {
    title: "UI/UX Design",
    description1:
      "Our UI/UX designs are intuitive and visually stunning. We focus on making your brand shine through beautiful user interfaces.",
    description2:
      "We craft designs that enhance user interaction while reflecting your brand identity.",
    icon: <FaPalette />,
  },
  {
    title: "SEO Services",
    description1:
      "Boost your visibility with our SEO strategies. We focus on improving your rankings and driving organic traffic.",
    description2:
      "Our experts optimize your content and implement strategies to enhance your online presence.",
    icon: <FaSearch />,
  },
  {
    title: "Digital Marketing",
    description1:
      "Expand your reach with our digital marketing strategies. Engage audiences and grow your brand effectively.",
    description2:
      "From social media to email marketing, we provide services that keep you ahead of the competition.",
    icon: <FaBullhorn />,
  },
  {
    title: "Custom Solutions",
    description1:
      "For unique business needs, we create custom digital solutions that drive efficiency and growth.",
    description2:
      "Whether it’s an app, software, or a tailored tool, we deliver what your business needs.",
    icon: <FaCogs />,
  },
];
const ServicePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <HeroSection
        detail="At MadTechies, we specialize in providing innovative digital solutions tailored to your business.
        Whether you're looking for a responsive website, a custom Android app, or digital marketing strategies,
        we have the expertise to help you succeed in the digital world."
        to="/contact"
        heading="Welcome to MadTechies"
        btnName="Get in Touch"
      />
<section className="bg-white">
  <div className="py-16 px-8 max-w-[1410px] mx-auto">
    <h2 className="text-3xl sm:text-2xl font-bold text-black mb-12 text-center">
      Our Services
    </h2>

    <div className="space-y-16">
      {Services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center lg:gap-8`}
        >
          {/* Content */}
          <div className="text-center lg:text-left lg:w-2/3">
            <h3 className="flex items-center justify-center lg:justify-start text-xl font-semibold text-black mb-4">
              {/* Icon */}
              <span className="text-blue-600 text-2xl mr-2" aria-label={service.title}>
                {service.icon}
              </span>
              {service.title}
            </h3>
            <p className="text-base text-gray-700 mb-2">{service.description1}</p>
            <p className="text-base text-gray-700">{service.description2}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="bg-white">
        <div className="py-16 px-8 max-w-[1410px] mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12 text-center">Our Process</h2>

          <div className="space-y-12">

            {/* Step 1 */}
            <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-8">
              <div className="w-24 h-24 sm:w-20 sm:h-20 bg-blue-600 text-white flex justify-center items-center rounded-full">
                <FaSearch className="text-3xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-lg font-semibold text-black mb-4">Discovery</h3>
                <p className="text-lg sm:text-base text-gray-700">
                  We begin by deeply understanding your business needs, challenges, and goals. This helps us form a strategy that will provide the best results.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-8">
              <div className="w-24 h-24 sm:w-20 sm:h-20 bg-blue-600 text-white flex justify-center items-center rounded-full">
                <FaPencilAlt className="text-3xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-lg font-semibold text-black mb-4">Design</h3>
                <p className="text-lg sm:text-base text-gray-700">
                  Our team creates intuitive and visually stunning designs that align with your brand and objectives, making sure your users enjoy the experience.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-8">
              <div className="w-24 h-24 sm:w-20 sm:h-20 bg-blue-600 text-white flex justify-center items-center rounded-full">
                <FaCode className="text-3xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-lg font-semibold text-black mb-4">Development</h3>
                <p className="text-lg sm:text-base text-gray-700">
                  Our developers bring your design to life, ensuring that the product is not only beautiful but also functional, reliable, and scalable.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-8">
              <div className="w-24 h-24 sm:w-20 sm:h-20 bg-blue-600 text-white flex justify-center items-center rounded-full">
                <FaCog className="text-3xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-lg font-semibold text-black mb-4">Testing & Launch</h3>
                <p className="text-lg sm:text-base text-gray-700">
                  We rigorously test your project to ensure it works flawlessly across all devices and platforms before launching it to the public.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>



    </div>
  );
};

export default ServicePage;
