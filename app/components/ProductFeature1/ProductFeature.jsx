"use client";

const ProductFeatureOne = () => {
  return (
    <>
      <div className="flex flex-col gap-6  items-center relative justify-center mt-24 md:mt-64">
        <p className="text-[#007E60] md:text-start text-center  leading-5 font-bold text-base tracking-wider uppercase">
          Product Features
        </p>
        <p className="text-[#0B141F] text-3xl md:text-start text-center  md:text-5xl leading-10 font-bold">
          Make your product better than
        </p>
        <div className="text-[#0B141F] relative md:text-start text-center -mt-6 md:mt-0 text-3xl md:text-5xl flex flex-col items-center leading-10 font-bold">
          <p className="z-50"> the competition </p>
          <img src="/images/Vector4.png" alt="" className="absolute top-7" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-14 gap-y-5 mt-16">
        <div className="flex-1 bg-[#F0F9F5] gap-x-3 h-[72px] shadow-xl rounded-3xl text-base font-bold leading-5 text-[#007E60] flex items-center justify-center text-center">
          <img src="/images/Icon.svg" alt="" className="w-8 h-8" />
          <span className="">Company’s Growth</span>
        </div>
        <div className="flex-1 bg-[#FFFFFF] gap-x-3 shadow-xl h-[72px] rounded-3xl text-base font-bold leading-5 text-[#007E60] flex items-center justify-center text-center">
          <img src="/images/Component.png" alt="" className="w-8 h-8" />
          <span>Startup & Business</span>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col px-4 items-center gap-y-10 justify-center mt-20 md:mt-14 ">
        <div>
          <p className="text-base text-[#007E60] md:text-start text-center  font-bold leading-5 tracking-wide uppercase">
            Product Feature 1
          </p>

          <div className="text-2xl md:text-5xl w-full md:w-[460px] md:text-start text-center  font-bold leading-10 mt-5">
            <p>Understand your company’s growth</p>
            <div className="text-[#0B141F] relative text-2xl md:text-5xl flex flex-col  leading-10 font-bold">
              <p className="z-50"> in real-time </p>
              <img
                src="/images/Vector4.png"
                alt=""
                className="absolute top-7 md:mx-0 mx-10"
              />
            </div>
          </div>

          <div className="mt-9 md:text-start text-center w-full md:w-[460px] text-lg font-medium text-[#0B141F] opacity-80">
            <p>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate.
            </p>
          </div>

          <hr className="h-[1px] bg-[#0B141F] bg-opacity-10 mt-8 shadow-2xl" />

          <div className="flex md:flex-row flex-col  items-center gap-8 mt-12 px-3">
            <img src="/images/Profile(2).png" alt="" className="" />
            <div className="">
              <div className="text-[#0B141F] w-full md:w-[340px] md:text-start text-center opacity-80 leading-5 font-medium text-lg">
                <p>
                  You can&apos;t win without tracking what&apos;s helped you get
                  customers hooked.&quot;
                </p>
              </div>

              <p className="md:text-start text-center font-bold text-base mt-3">
                Founder at Pulse
              </p>
            </div>
          </div>

        </div>
        <div>
          <img src="/images/div.png" alt="" className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default ProductFeatureOne;
