"use client"
import React, { useState } from 'react';

const Switcher12 = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center  mb-6'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <span className='label flex items-center text-lg leading-6 font-medium text-[#0B141F] text-opacity-80'>
        Monthly
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-[#CCCCCE]' : 'bg-[#007E60]'
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
        <span className='label flex items-center text-lg leading-6 font-medium text-[#0B141F] text-opacity-80'>
        Yearly
        </span>
      </label>
    </>
  )
}

export default Switcher12
