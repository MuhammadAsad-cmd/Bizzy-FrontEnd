"use client"
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Transition } from "@headlessui/react";

const FaqItem = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What kind of data can I see in Bizzy?",
      answer: "Because I love coding.",
    },
    {
      question: "Does Bizzy read my customers' data?",
      answer: "I mainly use HTML, CSS, and JavaScript.",
    },
    {
      question: "What makes Bizzy different from other analytics tools?",
      answer:
        "I learned through online tutorials, courses, and practice projects.",
    },
    {
      question: "What's your refund and cancellation policy?",
      answer: "I enjoy working with React and Vue.js.",
    },
    {
      question: "How do you take payments?",
      answer: "I use VS Code, Git, and various browser developer tools.",
    },
    {
      question: "Can I also track website analytics on Bizzy?",
      answer:
        "Start with the basics, practice regularly, and don't be afraid to ask for help.",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 px-3 gap-4 md:gap-6 ">
        {faqData.map((faq, index) => (
          <div key={index} className="w-full">
            <button
              className="flex items-center text-start justify-between w-full p-4 bg-white border rounded-xl shadow-lg outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <h4 className="text-xl font-medium">{faq.question}</h4>
              {activeIndex === index ? (
                <FaChevronUp className="text-[#000000] text-xl" />
              ) : (
                <FaChevronDown className="text-[#000000] text-xl" />
              )}
            </button>
            <Transition
              show={activeIndex === index}
              enter="transition duration-300 ease-out"
              enterFrom="opacity-0 max-h-0"
              enterTo="opacity-100 max-h-screen"
              leave="transition duration-200 ease-in"
              leaveFrom="opacity-100 max-h-screen"
              leaveTo="opacity-0 max-h-0"
            >
              {(ref) => (
                <div
                  ref={ref}
                  className="overflow-hidden transition-max-height duration-300"
                >
                  <p className="p-4 border-t border-gray-300">{faq.answer}</p>
                </div>
              )}
            </Transition>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqItem;
