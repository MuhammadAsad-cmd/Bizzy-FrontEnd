"use client";

const Footer = () => {
  return (
    <>
      <div className="bg-[#007E60] lg:p-0 py-6 px-4  mt-20">
        {/* <div className="container mx-auto"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="md:ml-10">
            <p className="xl:text-xl text-base font-medium leading-5 tracking-wider text-white">
              START YOUR FREE TRIAL
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div>
                <p className="text-3xl md:text-5xl font-bold text-white mt-3 md:mt-7">
                  Ready to transform your product? 🚀
                </p>
              </div>
            </div>
            <button className="w-full md:w-60 cursor-pointer h-[3rem] md:h-[4.5rem] mt-6 md:mt-9 bg-[#F0F9F5] text-[#007E60] text-base font-bold leading-7 rounded-xl">
              Get started for free
            </button>
          </div>
          <div className="lg:block hidden">
            <img src="/images/Group2.png" alt="" className="w-full" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#002E24] h-full w-full  ">
        <div className="bgFooterGroup bg-cover bg-center">
          <div className="flex xl:flex-row flex-col md:items-center items-start gap-9 justify-center pt-10 md:pt-20 mx-auto px-6">
            <div className="flex flex-col mb-10">
              <img
                src="/images/LogoFoter.png"
                alt=""
                className="w-[140px] h-10 mx-auto md:mx-0"
              />
              <div className="text-lg  md:w-[360px] w-full font-normal text-white tracking-wide mt-7 text-center md:text-left">
                <p>
                  Put your business in the spotlight with a playful,
                  conversion-oriented website.
                </p>
              </div>
              <div className="flex justify-center md:justify-start gap-3 mt-11">
                <img src="/images/facebook.svg" alt="" />
                <img src="/images/twitter.svg" alt="" />
                <img src="/images/instagram.svg" alt="" />
                <img src="/images/dribble.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-16">
              <div className="flex flex-col mt-12 md:mt-0">
                <h1 className="text-xl font-medium leading-6 text-white">
                  Home
                </h1>
                <div className="flex flex-col gap-y-5 mt-9 text-lg leading-6 font-normal tracking-normal text-white text-opacity-80">
                  <a href="#">Home 1</a>
                  <a href="#">Home 2</a>
                  <a href="#">Home 3</a>
                </div>
                <h2 className="text-xl font-medium leading-6 text-white mt-7">
                  About
                </h2>
                <div className="flex flex-col gap-y-5 mt-9 text-lg leading-6 font-normal tracking-normal text-white text-opacity-80">
                  <a href="#">About1</a>
                  <a href="#">About2</a>
                  <a href="#">About3</a>
                </div>
              </div>

              <div className="flex flex-col mt-12 md:mt-0">
                <p className="text-xl font-medium leading-6 text-white">
                  Pricing
                </p>

                <ul className="space-y-4  mt-9 text-lg leading-6 font-normal tracking-normal text-white text-opacity-80">
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70 "
                    >
                      Pricing 1
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70 "
                    >
                      Pricing 2
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70 "
                    >
                      Pricing 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70 "
                    >
                      Pricing- Ecommerce
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col mt-12 md:mt-0">
                <p className="text-xl font-medium leading-6 text-white">
                  Company
                </p>

                <ul className="space-y-4  mt-9 text-lg leading-6 font-normal tracking-normal text-white text-opacity-80">
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Careers Post
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Integration
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Integration- Details
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Help Centre
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Help Centre Details
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mt-12 md:mt-0">
                <p className="text-xl font-medium leading-6 text-white">
                  Other Pages
                </p>

                <ul className="space-y-4  mt-9 text-lg leading-6 font-normal tracking-normal text-white text-opacity-80">
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Blog
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Blog Details
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Case Study
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Case Study Details
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Changelog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      License
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFF] leading-6 text-opacity-70"
                    >
                      Sign In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-content flex flex-col justify-center items-center pb-10 px-4 md:px-6 mt-10 md:mt-20">
            <hr className="h-px w-full bg-white bg-opacity-80 mb-4" />
            <p className="text-white text-sm md:text-base leading-5 font-normal text-center md:text-left">
              © All rights reserved. By Conversion Flow. Powered by Webflow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
