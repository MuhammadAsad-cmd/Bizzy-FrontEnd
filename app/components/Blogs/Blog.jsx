"use client";

const Blog = () => {
  return (
    <>
      <div className="flex flex-col gap-6 items-center relative justify-center mt-36">
        <p className="text-[#007E60] leading-5 font-bold text-base tracking-wider uppercase">
          RESOURCES
        </p>
        <div className="flex gap-1">
          <p className="text-[#0B141F] text-[30px] md:text-[48px] leading-48 font-bold">
            Read latest
          </p>
          <div className="text-[#0B141F] relative text-[30px] md:text-[48px] flex flex-col items-center leading-48 font-bold">
            <p className="z-50"> blogs </p>
            <img
              src="/images/Vector4.png"
              alt=""
              className="absolute top-8 md:top-12"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 justify-center gap-9 mt-20">
          <div className="flex flex-col">
            <div className="relative">
              <img src="/images/Blog1.png" alt="" className="" />
              <button className="absolute top-6 left-6 w-[98px] h-9 bg-white text-black font-bold leading-5  shadow-2xl rounded-2xl">
                Business
              </button>
            </div>
            <div className="flex md:text-start text-center w-full xl:w-[375px] mt-5 md:mt-10 flex-col gap-4 md:gap-7 ">
              <h1 className="text-2xl md:text-3xl font-bold">The Art of Reading Data</h1>
              <div className="text-lg font-normal leading-6 text-[#0B141F]">
                <p>
                  Quis nostrud exercitation ullamco laboris commodo consequat.
                  Duis aute irure dolor reprehenderit in voluptate.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div class="relative">
              <img src="/images/Blog2.png" alt="" className="" />
              <button className="absolute top-6 left-6 w-[98px] h-9 bg-white text-black font-bold leading-5  shadow-2xl rounded-2xl">
                Business
              </button>
            </div>
            <div className="flex md:text-start text-center mt-5 md:mt-10 flex-col gap-4 md:gap-7  w-full xl:w-[375px]">
              <h1 className="text-2xl md:text-3xl font-bold">
                One product mistake everyone is making
              </h1>
              <div className="text-lg font-normal leading-6 text-[#0B141F]">
                <p>
                  Quis nostrud exercitation ullamco laboris commodo consequat.
                  Duis aute irure dolor reprehenderit in voluptate.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <img src="/images/Blog3.png" alt="" className="" />
              <button className="absolute top-6 left-6 w-[98px] h-9 bg-white text-black font-bold leading-5  shadow-2xl rounded-2xl">
                Business
              </button>
            </div>
            <div className="flex md:text-start text-center  w-full xl:w-[375px] mt-5 md:mt-10 flex-col gap-4 md:gap-7  ">
              <h1 className="text-2xl md:text-3xl font-bold">
                Best prototyping tools for designers
              </h1>
              <div className="text-lg font-normal leading-6 text-[#0B141F]">
                <p>
                  Quis nostrud exercitation ullamco laboris commodo consequat.
                  Duis aute irure dolor reprehenderit in voluptate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
