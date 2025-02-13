import React, { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";

const faqData = [
  {
    question: "What services does MadTechies offer?",
    answer:
      "MadTechies offers software development, app development, and UI/UX design services tailored to business needs.",
  },
  {
    question: "What industries does MadTechies specialize in?",
    answer:
      "MadTechies specializes in industries such as eCommerce, healthcare, finance, education, and enterprise solutions.",
  },
  {
    question: "How does MadTechies ensure the quality of its software products?",
    answer:
      "We follow industry best practices, rigorous testing, and agile development methodologies to ensure high-quality software delivery.",
  },
  {
    question: "Does MadTechies provide ongoing support and maintenance?",
    answer:
      "Our development process typically follows these steps: initial consultation and requirements gathering, project planning and design, development, testing and quality assurance, deployment, and ongoing support and maintenance. We use Agile methodologies to ensure flexibility and collaboration throughout the project.",
  },
  {
    question: "What are MadTechies's pricing models?",
    answer:
      "We offer flexible pricing models to suit different project needs, including fixed-price contracts, time-and-materials billing, and dedicated team arrangements. During our initial consultation, we will discuss and recommend the best pricing model based on the scope and requirements of your project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-10 px-6 md:px-10 lg:px-24 max-w-[1400px] mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 transition duration-300 ease-in-out"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                {faq.question}
              </h2>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <CiCircleChevDown className="text-2xl text-blue-600" />
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
