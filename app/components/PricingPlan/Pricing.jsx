'use client'
import Switcher12 from "./ToggleButton";

const Pricing = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col gap-y-6 items-center justify-between  mt-48 px-6 lg:px-[80px] ">
          <div className="flex flex-col gap-6  relative">
            <p className="text-[#007E60] leading-5 md:text-start text-center font-bold text-base tracking-wider uppercase">
              Pricing Plan
            </p>
            <div className="flex md:text-start text-center gap-1">
              <p className="text-[#0B141F] text-[30px] lg:text-[48px] leading-48 font-bold">
                Simple,
              </p>
              <div className="text-[#0B141F] relative text-[30px] lg:text-[48px]  flex flex-col items-center leading-48 font-bold">
                <p className="z-50"> affordable </p>
                <img
                  src="/images/Vector4.png"
                  alt=""
                  className="absolute top-7 lg:top-12"
                />
              </div>
            </div>
            <p className="text-[#0B141F] md:text-start text-center text-[30px] lg:text-[48px] font-bold -mt-7">
              pricing for all teams.
            </p>
          </div>
          <div>
            <Switcher12 />
            <div className="flex items-center">
              <p className="text-lg leading-6 font-medium text-[#007E60]">
                Save Up To 58%
              </p>
              <img src="/images/Arrow3.svg" alt="" />
            </div>
          </div>
        </div>
          <div className="px-6 lg:px-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[50px] mx-auto justify-center items-center">
            <div className="border shadow-xl rounded-2xl flex flex-col justify-between  px-5 py-6 h-full">
              <div>
                <h1 className="text-2xl font-bold leading-8 text-[#0B141F]">
                  Basic
                </h1>
                <p className="text-lg font-normal leading-6 mt-5 tracking-wide">
                  Free 14-day trial. No credit card required. Cancel anytime.
                </p>

                <div className="text-[#0B141F] mt-9 relative text-2xl flex flex-col text-start leading-10 font-bold">
                  <p className="z-50">
                    {" "}
                    $29.00 <span className="text-lg"> /month </span>{" "}
                  </p>
                  <img
                    src="/images/arrow4.svg"
                    alt=""
                    className="absolute top-5"
                  />
                </div>
                <hr className="bg-[#000000] bg-opacity-20 h-[1px] mt-4" />
                <div className="flex flex-col gap-y-5 mt-10">
                  <div className="flex items-center gap-x-4">
                    <img src="/images/tick.svg" alt="" />
                    <p>One User</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <img src="/images/tick.svg" alt="" />
                    <p>Unlimited Viewers</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <img src="/images/tick.svg" alt="" />
                    <p>Basic Insights</p>
                  </div>
                </div>
              </div>

              <div className="mt-[170px]">
                <button className="w-full h-[60px] rounded-xl justify-end bg-[#007E60] text-white">
                  Start Free Trial
                </button>
              </div>
            </div>
            <div className="border shadow-xl bg-[#007E60] rounded-2xl flex flex-col justify-between h-full px-5 py-6">
              <div>
                <h1 className="text-2xl font-bold leading-8 text-[#FFFFFF]">
                  Intermediate
                </h1>
                <p className="text-lg font-normal leading-6 mt-5 tracking-wide text-[#FFFFFF]">
                  Free 14-day trial. No credit card required. Cancel anytime.
                </p>

                <div className="text-[#FFFFFF] mt-9 relative text-2xl flex flex-col text-start leading-10 font-bold">
                  <p className="z-50">
                    {" "}
                    $49.00 <span className="text-lg"> /month </span>{" "}
                  </p>
                  <img
                    src="/images/arrow4.svg"
                    alt=""
                    className="absolute top-5"
                  />
                </div>
                <hr className="bg-[#000000] bg-opacity-20 h-[1px] mt-4" />
                <div className="flex flex-col text-[#FFFFFF] gap-y-5 mt-10">
                  <div className="flex items-center gap-x-4">
                    <img src="/images/tickWhite.svg" alt="" />
                    <p>One User</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <img src="/images/tickWhite.svg" alt="" />
                    <p>Unlimited Viewers</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <img src="/images/tickWhite.svg" alt="" />
                    <p>Basic Insights</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <img src="/images/tickWhite.svg" alt="" />
                    <p>
                      Integrations with your CRM, Google Analytics and more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[170px]">
                <button className="w-full h-[60px] font-bold rounded-xl bg-white text-[#007E60]">
                  Start Free Trial
                </button>
              </div>
            </div>

            <div className="border shadow-xl rounded-2xl flex flex-col justify-between h-full px-5 py-6">
              <div>
                <h1 className="text-2xl font-bold leading-8 text-[#0B141F]">
                  Advanced
                </h1>
                <p className="text-lg font-normal leading-6 mt-5 tracking-wide">
                  Free 14-day trial. No credit card required. Cancel anytime.
                </p>

                <div className="text-[#0B141F] mt-9 relative text-2xl flex flex-col text-start leading-10 font-bold">
                  <p className="z-50">
                    {" "}
                    $79.00 <span className="text-lg"> /month </span>{" "}
                  </p>
                  <img
                    src="/images/arrow4.svg"
                    alt=""
                    className="absolute top-5"
                  />
                </div>
                <hr className="bg-[#000000] bg-opacity-20 h-[1px] mt-4" />
                <div className="flex flex-col gap-y-5 mt-10">
                  <div className="flex items-center gap-x-4">
                    <img src="/images/tick.svg" alt="" />
                    <p>6 User</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <img src="/images/tick.svg" alt="" />
                    <p>Unlimited Viewers</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <img src="/images/tick.svg" alt="" />
                    <p>Basic Insights</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <img src="/images/tick.svg" alt="" />
                    <p>Whitelabelling</p>
                  </div>
                </div>
              </div>

              <div className="mt-[170px]">
                <button className="w-full h-[60px] rounded-xl justify-end bg-[#007E60] text-white">
                  Start Free Trial
                </button>
              </div>
            </div>

            <div className="border shadow-xl rounded-2xl flex flex-col justify-between h-full px-5 py-6">
              <div>
                <h1 className="text-2xl font-bold leading-8 text-[#0B141F]">
                  Custom
                </h1>
                <p className="text-lg font-normal leading-6 mt-5 tracking-wide">
                  Tailor a plan to meet the needs of your growing business.
                </p>

                <div className="text-[#0B141F] mt-9 relative text-2xl flex flex-col text-start leading-10 font-bold">
                  <p className="z-50">
                    {" "}
                    Contact Us <span className="text-lg"> /month </span>{" "}
                  </p>
                  <img
                    src="/images/arrow4.svg"
                    alt=""
                    className="absolute top-5"
                  />
                </div>
                <hr className="bg-[#000000] bg-opacity-20 h-[1px] mt-4" />
                <div className="flex flex-col gap-y-5 mt-10">
                  <div className="flex items-center gap-x-4">
                    <img src="/images/msg.svg" alt="" />
                    <p>support@bizzy.com</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <img src="/images/phone.svg" alt="" />
                    <p>+1-202-555-0144</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <img src="/images/loaction.svg" alt="" />
                    <p>San Francisco, CA 94104, US 🌦️ 12°</p>
                  </div>
                </div>
              </div>

              <div className="mt-[170px]">
                <button className="w-full h-[60px] rounded-xl justify-end bg-[#007E60] text-white">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Pricing;
