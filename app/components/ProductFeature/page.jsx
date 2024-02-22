'use client'

const ProductFeature = () => {
  return (
    <>
      <div className="flex flex-col gap-5 text-center items-center relative justify-center mt-20 md:mt-36">
        <p className="text-[#007E60] leading-5 font-bold text-base tracking-wider uppercase">
          Product Feature GRID
        </p>
        <p className="text-[#0B141F] text-[30px] md:text-[47px] leading-10 font-bold">
          Make more out of your data
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 lg:gap-16 mt-20 px-5 md:px-10">
          <div className="flex flex-col text-center md:text-start">
            <img
              src="/images/analytics (2).svg"
              alt=""
              className="w-20 h-20 md:mx-0 mx-auto"
            />
            <p className="font-bold text-2xl leading-7 text-[#0B141F] mt-8">
              Real-time analytics
            </p>
            <div className="mt-5 text-[#0B141F] text-3vw leading-5 opacity-80">
              <p>See product usage, sign-ins, </p>
              <p>feature metrics change as users work on</p>
              <p>your tool.</p>
            </div>
          </div>
          <div className="flex flex-col text-center md:text-start">
            <img
              src="/images/analytics (2).svg"
              alt=""
              className="w-20 h-20 md:mx-0 mx-auto"
            />
            <p className="font-bold text-2xl leading-7 text-[#0B141F] mt-8">
              Intuitive dashboard
            </p>
            <div className="mt-5 text-[#0B141F] text-3vw leading-5 opacity-80">
              <p>Anyone can use our easy-to-understand</p>
              <p>dashboard. No training required.</p>
            </div>
          </div>
          <div className="flex flex-col text-center md:text-start">
            <img
              src="/images/smart.svg"
              alt=""
              className="w-20 h-20 md:mx-0 mx-auto"
            />
            <p className="font-bold text-2xl leading-7 text-[#0B141F] mt-8">
              Smart suggestions
            </p>
            <div className="mt-5 text-[#0B141F] text-3vw leading-5 opacity-80">
              <p>Let our tool suggest fixes,</p>
              <p>improvements and remedies.</p>
            </div>
          </div>

          <div className="flex flex-col text-center md:text-start">
            <img
              src="/images/View.svg"
              alt=""
              className="w-20 h-20 md:mx-0 mx-auto"
            />
            <p className="font-bold text-2xl leading-7 text-[#0B141F] mt-8">
              Multiple views
            </p>
            <div className="mt-5 text-[#0B141F] text-3vw leading-5 opacity-80">
              <p>View different timeframes, user types</p>
              <p>etc. via graphs, charts and more.</p>
            </div>
          </div>
          <div className="flex flex-col text-center md:text-start">
            <img
              src="/images/dollar.svg"
              alt=""
              className="w-20 h-20 md:mx-0 mx-auto"
            />
            <p className="font-bold text-2xl leading-7 text-[#0B141F] mt-8">
              AI-led diagnoses
            </p>
            <div className="mt-5 text-[#0B141F] text-3vw leading-5 opacity-80">
              <p>Find why churn is happening, where</p>
              <p>people get stuck and get to the root</p>
              <p> of problems.</p>
            </div>
          </div>
          <div className="flex flex-col text-center md:text-start">
            <img
              src="/images/headphones.svg"
              alt=""
              className="w-20 h-20 md:mx-0 mx-auto"
            />
            <p className="font-bold text-2xl leading-7 text-[#0B141F] mt-8">
              24/7 Support
            </p>
            <div className="mt-5 text-[#0B141F] text-3vw leading-5 opacity-80">
              <p>Get experts on call anywhere,</p>
              <p> anytime with our 24/7 support.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFeature;
