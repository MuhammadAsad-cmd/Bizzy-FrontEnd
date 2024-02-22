'use client'

const Customer = () => {
  return (
    <>
      <div className="bgcustomer bg-cover bg-center h-full w-full">
        <div className="bgGroup">
          <div className="flex lg:flex-row flex-col items-center justify-center w-full h-full gap-24 py-6">
            <div className="px-4">
              <img
                src="/images/Image7.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-base font-medium leading-5 tracking-widest text-white uppercase">
                Customer Story
              </p>
              <p className="text-3xl md:text-5xl font-medium leading-relaxed tracking-wide text-white uppercase">
                Andre Bouzout
              </p>
              <div className="text-[24px] mt-7 leading-7 text-white text-opacity-80">
                <p>&quot;If my product has 10 customers, at least 5 are</p>
                <p>all thanks to Bizzy.&quot;</p>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-5 mt-10">
                <button className="w-full md:w-64 h-[68px] bg-[#F0F9F5] text-[#007E60] text-base font-bold leading-7 rounded-xl">
                  View customer story
                </button>
                <div className="flex items-center w-full md:w-64 gap-4">
                  <img src="/images/play.svg" alt="" />
                  <button className="text-white text-[17px] font-medium leading-7 rounded-xl">
                    Watch story • 5:47
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
