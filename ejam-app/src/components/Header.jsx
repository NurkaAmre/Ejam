import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { MdMoneyOff } from 'react-icons/md';

const Header = () => {
  const [showSteps, setShowSteps] = useState(true);

  return (
    <header className='py-2 bg-[#252f3d]'>
      <ul className='list-none flex justify-evenly text-white'>
        <li className='flex flex-row gap-2'>
          <FaCheckCircle className="text-[20px]"/>
          <p className='text-[12px]'>30-DAY SATISFACTION QUARANTEE</p>
        </li>
        <li className='flex flex-row gap-2'>
          <FaTruck className="text-[20px]"/>
          <p className='text-[12px]'>FREE DELIVERY ON ORDERS OVER $40.00</p>
        </li>
        <li className='flex flex-row gap-2'>
          <FaHeart className="text-[20px]"/>
          <p className='text-[12px]'>50.000+ HAPPY CUSTOMERS</p>
        </li>
        <li className='flex flex-row gap-2'>
          < MdMoneyOff className="text-[20px]"/>
          <p className='text-[12px]'>100% MONEY BACK GUARANTEE</p>
        </li>
      </ul>
    </header>
  )
}

export default Header