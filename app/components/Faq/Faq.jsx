'use client'
import FaqItem from "./FAQItem";

const Faq = () => {
  return (
    <div>
      <div className="flex flex-col gap-6  items-center relative justify-center mt-36">
        <p className="text-[#007E60] leading-5 font-bold text-base tracking-wider uppercase">
          Common Questions
        </p>
        <div className="flex md:flex-row flex-col gap-1">
          <p className="text-[#0B141F] text-[30px] md:text-[47px] leading-10 font-bold">
            Frequently Asked
          </p>
          <div className="text-[#0B141F] relative text-[30px] md:text-[47px] flex flex-col items-center leading-10 font-bold">
            <p className="z-50"> Questions </p>
            <img src="/images/Vector4.png" alt="" className="absolute top-7" />
          </div>
        </div>
      </div>

      <FaqItem/>
    </div>
  );
};

export default Faq;
