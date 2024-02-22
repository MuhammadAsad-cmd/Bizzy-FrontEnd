'use client'

const Rating = () => {
  return (
    <>
      <div className="RatingBg bg-cover bg-center h-full w-full pb-20 pt-[140px] mt-20 md:mt-[200px]">
        <div className="flex flex-col lg:flex-row gap-56 justify-center">
          <div className="flex text-center items-center gap-[120px] justify-center flex-col px-4">
            <div className="flex text-center items-center justify-center flex-col">
              <div className="flex gap-x-[10px]">
                <img src="/images/VectorStar.png" alt="" className="w-5 h-5" />
                <img src="/images/VectorStar.png" alt="" className="w-5 h-5" />
                <img src="/images/VectorStar.png" alt="" className="w-5 h-5" />
                <img src="/images/VectorStar.png" alt="" className="w-5 h-5" />
                <img src="/images/VectorStar.png" alt="" className="w-5 h-5" />
              </div>
              <div className="text-center mt-6 text-[24px] leading-7 font-medium text-[#0B141F]">
                <p>Our customer retention rates doubled.</p>
                <p> Bizzy helps us decode product usage and</p>
                <p>shows us what makes users tick.</p>
              </div>

              <p className="mt-6 font-medium text-base leading-5 text-[#0B141F]">
                Andrew Baygulov - CEO at Foundry
              </p>
            </div>

            <div className="flex text-center items-center justify-center flex-col">
              <div className="flex gap-x-[10px]">
                <img src="/images/VectorStar.png" alt="" className="w-5 h-5" />
                <img src="/images/VectorStar.png" alt="" className="w-5 h-5" />
                <img src="/images/VectorStar.png" alt="" className="w-5 h-5" />
                <img src="/images/VectorStar.png" alt="" className="w-5 h-5" />
                <img src="/images/VectorStar.png" alt="" className="w-5 h-5" />
              </div>
              <div className="text-center mt-6 text-[24px] leading-7 font-medium text-[#0B141F]">
                <p>We are building a better product now, thanks</p>
                <p>to Bizzy. It helped us see the obvious flaws</p>
                <p> that made people churn.</p>
              </div>
              <p className="mt-6 font-medium text-base leading-5 text-[#0B141F]">
                Robert Machac - Founder, Alton
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center  items-center gap-11">
            <div>
              <div className="flex flex-row gap-5">
                <img src="/images/div_border.png" alt="" />
                <p className="text-[33px] font-bold leading-10">4.97/5</p>
              </div>
              <div className="text-[20px] font-medium leading-6 tracking-wide mt-4">
                <p>Rating on review sites</p>
                <p> such as Capterra, G2</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="flex flex-row gap-5">
                <img src="/images/div_border.png" alt="" />
                <p className="text-[33px] font-bold leading-10">87%</p>
              </div>
              <div className="text-[20px] font-medium leading-6 tracking-wide mt-4">
                <p>87% of our customers</p>
                <p>say they&apos;d give their</p>
                <p>first-born for Bizzy.</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="flex flex-row gap-5">
                <img src="/images/div_border.png" alt="" />
                <p className="text-[33px] font-bold leading-10">250M+</p>
              </div>
              <div className="text-[20px] font-medium leading-6 tracking-wide mt-4">
                <p>Users currently loving Bizzy.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-center flex-col gap-2 mt-10">
          <div className="flex gap-1.5">
            <p className="text-base font-bold leading-5 text-[#007E60]">
              See All Reviews
            </p>
            <img src="/images/Icon3.png" alt="" className="h-5 w-5" />
          </div>
          <hr className="w-[170px] h-[2px] bg-[#007E60]" />
        </div>
      </div>
    </>
  );
};

export default Rating;
