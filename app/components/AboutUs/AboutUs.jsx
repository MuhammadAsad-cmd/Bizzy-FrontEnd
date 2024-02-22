"use client";

const AboutUs = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-8 md:gap-12 lg:gap-[100px] items-center px-4 justify-center mt-32">
        <div className="relative">
          <img src="/images/Image.png" alt="" className="" />
          <img
            src="/images/Item.png"
            alt=""
            className="absolute -top-10 left-0 xl:-left-14 shadow-2xl rounded-2xl"
          />
        </div>

        <div className="">
          <p className="text-base text-[#007E60] md:text-start text-center font-bold leading-5 tracking-wide uppercase">
            about us
          </p>

          <div className="text-2xl md:text-4xl xl:text-5xl md:text-start text-center font-bold leading-10 mt-5">
            <p>A dedicated</p>
            <p>solution for startups </p>
            <p> and enterprises</p>
          </div>
          <img src="/images/Vector.png" alt="" />
          <div className="mt-9 w-full md:w-[460px] text-lg font-medium text-[#0B141F] md:text-start text-center opacity-80">
            <p>
              We were tired of product analytics tools that just told you the
              obvious. So we built one better.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 px-3 mt-[52px]">
            <div>
              <p className="font-bold text-[25px] leading-8">
                97 <span className="text-[#007E60]">%</span>
              </p>
              <p className="text-base font-normal leading-5 tracking-wide mt-2 text-[#0B141F] opacity-80">
                Customer satisfaction
              </p>
            </div>
            <div>
              <p className="font-bold text-[25px] leading-8">
                100M <span className="text-[#007E60]">+</span>
              </p>
              <p className="text-base font-normal leading-5 tracking-wide mt-2 text-[#0B141F] opacity-80">
                Monthly active user
              </p>
            </div>
            <div>
              <p className="font-bold text-[25px] leading-8">
                25K <span className="text-[#007E60]">+</span>
              </p>
              <p className="text-base font-normal leading-5 tracking-wide mt-2 text-[#0B141F] opacity-80">
                New users per week
              </p>
            </div>
            <div>
              <p className="font-bold text-[25px] leading-8">
                70 <span className="text-[#007E60]">%</span>
              </p>
              <p className="text-base font-normal leading-5 tracking-wide mt-2 text-[#0B141F] opacity-80">
                Growth year-over-year
              </p>
            </div>
          </div>
          <hr className="h-[1px] bg-[#0B141F] bg-opacity-10 mt-8" />

          <div className="flex md:flex-row flex-col  items-center gap-8 mt-12 px-3">
            <img
              src="/images/Profile.png"
              alt=""
              className="h-[70px] w-[70px]"
            />
            <div>
              <p className="text-[#0B141F] w-full md:w-[300px] opacity-80 leading-5 font-medium text-lg">
                &quot;Bizzy is for teams that care about their product
                growth.&quot;
              </p>
              <p className="md:text-start text-center font-bold text-base mt-3">
                Founder & CEO, Bizzy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
