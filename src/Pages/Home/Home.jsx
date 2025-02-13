import React from "react";
import ServiceCard from "../../Component/Card/ServiceCard";
import { CgWebsite } from "react-icons/cg";
import { IoLogoAndroid } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { AiOutlineBulb, AiOutlineCheckCircle, AiOutlineExpand, AiOutlineSmile, AiOutlineSolution, AiOutlineSync, AiOutlineTeam } from "react-icons/ai";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import PriceSection from "../../Component/PricingSection/PriceSection";
import FQ from "../../Component/F&q/fQ.JSX";
import TechnologyGrid from "../../Component/Technologies/Technologies";
import HeroSection from "../../Component/HeroSection/HeroSection";
import Roadmap from "../../Component/Roadmap/Roadmap";
const features = [
  {
    title: "Expert Team",
    description: "Our experienced professionals bring expertise and creativity to deliver exceptional results.",
    icon: <AiOutlineTeam className="text-white h-12 w-12 mx-auto" />,
  },
  {
    title: "Innovative Solutions",
    description: "We leverage the latest technologies to create custom solutions tailored to your needs.",
    icon: <AiOutlineBulb className="text-white h-12 w-12 mx-auto" />,
  },
  {
    title: "Customer Focused",
    description: "We prioritize your goals and deliver solutions that align with your vision and requirements.",
    icon: <AiOutlineSmile className="text-white h-12 w-12 mx-auto" />,
  },
  {
    title: "Proven Track Record",
    description: "Trusted by clients worldwide for delivering projects on time and exceeding expectations.",
    icon: <AiOutlineCheckCircle className="text-white h-12 w-12 mx-auto" />,
  },
  {
    title: "Transparent Process",
    description: "Open communication and transparency throughout the project lifecycle.",
    icon: <AiOutlineSync className="text-white h-12 w-12 mx-auto" />,
  },
  {
    title: "Scalable Solutions",
    description: "We build solutions designed to grow and adapt as your business evolves.",
    icon: <AiOutlineExpand className="text-white h-12 w-12 mx-auto" />,
  },
];
const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We create responsive and user-friendly websites tailored to your business needs, ensuring great performance and design.",
      icon: <CgWebsite className=" w-16 h-16"/>
    },
    {
      id: 2,
      title: "Android Development",
      description:
        "Our team builds robust Android apps with excellent user experience, focusing on seamless functionality and speed.",
      icon: <IoLogoAndroid className=" w-16 h-16"/>,
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Our UI/UX designers ensure your product has an intuitive interface, creating delightful user experiences.",
      icon: <MdDesignServices className=" w-16 h-16" />,
    },
    {
      id: 4,
      title: "SEO Services",
      description:
        "Improve your online visibility with our tailored SEO strategies that help your website rank higher in search results.",
      icon: <TbSeo className=" w-16 h-16" />,
    },
    {
      id: 5,
      title: "Custom Solutions",
      description:
        "We offer tailor-made digital solutions to meet the unique challenges of your business, boosting efficiency and growth.",
        icon: <AiOutlineSolution className=" w-16 h-16" />,
    },
    {
      id: 6,
      title: "Digital Marketing",
      description:
        "Our digital marketing strategies will help you increase your online presence and reach your target audience effectively.",
        icon: <LiaDigitalTachographSolid className=" w-16 h-16" />,

    }, 
  ];
const HomePage = () => {
  return (
    <div className=" bg-gray-100">
      {/* Hero Section */}
      <HeroSection 
      heading="Turning Ideas into Digital  Experiences"
      detail="MadTechies offers innovative web development, Android app solutions, and stunning UI/UX designs tailored to your needs."
      to= "/services#"
      btnName="Explore Our Services"
      />

      {/* Services Section */}
      <section className="py-20 px-6 text-center">
  <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-12">
    Our Services
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
    {services.map((service) => (
      <ServiceCard
        key={service.id}
        id={service.id}
        icon={service.icon}
        description={service.description}
        title={service.title}
      />
    ))}
  </div>
</section>

    {/* Pricing Section */}
     <PriceSection/>
     {/* Why Choose us */}
 
     <section className="py-12 px-6 sm:px-10 lg:px-24 mx-auto max-w-[1400px]">
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
    Why Choose Us
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {features.map((feature, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-8 hover:shadow-2xl hover:-translate-y-2 transform transition duration-300"
      >
        <div className="flex justify-center items-center mb-6">
          <p className="bg-black  p-4 rounded-full flex items-center justify-center">
            {feature.icon}
          </p>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center">
          {feature.title}
        </h2>
        <p className="text-gray-600 text-center leading-relaxed">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</section>
 <TechnologyGrid/>

     {/* F&Q */}
     <FQ/>
     
    </div>
  );
};

export default HomePage;
