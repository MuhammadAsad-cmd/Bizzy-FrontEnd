"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="heroBackground bg-cover bg-center">
          <div className="flex items-center justify-between px-6 border-b-2">
            <div className="flex gap-4">
              <div className="flex py-2 md:py-5">
                <img src="/images/logomain.svg" alt="" className="" />
              </div>
            </div>
            <div className="hidden lg:flex gap-16 xl:gap-20 justify-center items-center text-[#04121F] font-medium h-[60px] py-3">
              <a href="#" className=" leading-5">Home</a>
              <a href="#" className=" leading-5">About</a>
              <a href="#" className=" leading-5">Pricing</a>
              <a href="#" className=" leading-5">Resources</a>
              <a href="#" className=" leading-5 ">Blog</a>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="xl:block hidden">
                <div className=" flex items-center cursor-pointer gap-2">
                  <img src="/images/cart.svg" alt="" />
                  <p className="text-[#007E60] text-lg leading-5 font-bold">
                    Cart
                  </p>
                </div>
              </div>
              <div>
                {menuOpen ? (
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden"
                  >
                    <GrClose className="text-2xl" /> {/* Close icon */}
                  </button>
                ) : (
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden"
                  >
                    <IoMenu className="text-2xl" /> {/* Menu icon */}
                  </button>
                )}
              </div>
              <button className="lg:block hidden w-[188px] h-[52px] bg-[#007E60] text-white rounded-xl">
                Buy Template
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="lg:hidden block">
              <div className="flex flex-col text-start px-5 bg-[#f0f9f5]">
                <p className="p-4 cursor-pointer">Home</p>
                <p className="p-4 cursor-pointer">About</p>
                <p className="p-4 cursor-pointer">Pricing</p>
                <p className="p-4 cursor-pointer">Resources</p>
                <p className="p-4 cursor-pointer">Blog</p>
              </div>
            </div>
          )}

        <div className="container mx-auto">
          <div className="flex flex-col mt-12 md:mt-24 px-2 text-center justify-center items-center">
            <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Analytics that transform <br />
              your product inside-out
            </p>
          </div>

          <div className="flex items-center justify-center gap-0 md:gap-4">
            <div className="mt-4 md:mt-9 w-[500px]">
              <p className="text-center">
                Make data-backed decisions and lead your product to sure- shot
                success with Bizzy.
              </p>

              <form className="px-2 md:block hidden">
                <div className="relative mt-8 md:mt-14">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full h-[75px] p-4 ps-4 text-md outline-none text-gray-900 border border-gray-300 rounded-xl bg-gray-50"
                    placeholder="Enter your email"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute h-[57px] end-2 bottom-2.5 bg-[#007E60] outline-none font-medium rounded-lg text-lg leading-5 px-4 py-2 "
                  >
                    Get started for free
                  </button>
                </div>
              </form>
            </div>
            <div className="-mt-8 md:block hidden">
              <img src="/images/Arrow.svg" alt="" />
            </div>
          </div>
          <div className="relative flex justify-center mt-6 md:mt-12">
            <img
              src="/images/Mockup.png"
              alt="Mockup"
              className="w-full md:w-[940px] h-auto md:h-[673px] px-3"
            />
            <img
              src="/images/Get.png"
              alt="Get"
              className="lg:block hidden absolute bottom-0 left-4 md:left-20 -mb-20 md:-mb-20 rounded-2xl w-full md:w-[280px] h-auto md:h-[392px] shadow-2xl"
            />
            <img
              src="/images/Content.png"
              alt="Get"
              className="lg:block hidden absolute bottom-4 right-4 md:right-20 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
