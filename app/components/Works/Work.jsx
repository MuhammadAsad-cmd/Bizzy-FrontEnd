'use client'
const Work = () => {
  return (
    <>
      <div className="flex flex-col gap-6  items-center relative justify-center mt-16 md:mt-36 px-5">
        <p className="text-[#007E60] leading-5 font-bold text-base tracking-wider uppercase">
          How it works
        </p>
        <div className="flex gap-1">
          <p className="text-[#0B141F] text-2xl md:text-5xl font-bold leading-10">
            Getting
          </p>
          <div className="text-[#0B141F] relative text-2xl md:text-5xl leading-10 flex flex-col items-center font-bold">
            <p className="z-50"> started </p>
            <img src="/images/Vector4.png" alt="" className="absolute top-7" />
          </div>
        </div>
        <p className="text-[#0B141F] -mt-6 md:-mt-3 text-2xl md:text-5xl leading-10 md:text-center text-center font-bold">
          is as easy as 1,2,3...
        </p>
      </div>

      <div className="flex items-center justify-center px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] items-center mt-20">
          <div>
            <img src="/images/Visual1.png" alt="" className="w-full h-full" />
            <p className="mt-12 text-2xl font-medium leading-7 text-[#0B141F]">
              1. Start your free trial
            </p>
            <div className="mt-5 text-center text-lg font-normal leading-6 text-[#0B141F] opacity-80">
              <p>Quis nostrud exercitation</p>
              <p>ullamco laboris nisi ut aliquip ex</p>
              <p> commodo consequat.</p>
            </div>
          </div>

          <div>
            <img src="/images/Visual2.png" alt="" />
            <p className="mt-12 text-2xl font-medium leading-7 text-[#0B141F]">
              2. Connect your product
            </p>
            <div className="mt-5 text-center text-lg font-normal leading-6 text-[#0B141F] opacity-80">
              <p>Quis nostrud exercitation</p>
              <p>ullamco laboris nisi ut aliquip ex</p>
              <p> commodo consequat.</p>
            </div>
          </div>

          <div>
            <img src="/images/Visual3.png" alt="" />
            <p className="mt-12 text-2xl font-medium leading-7 text-[#0B141F]">
              3. Get data right in hand
            </p>
            <div className="mt-5 text-lg text-center font-normal leading-6 text-[#0B141F] opacity-80">
              <p>Quis nostrud exercitation</p>
              <p>ullamco laboris nisi ut aliquip ex</p>
              <p> commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
