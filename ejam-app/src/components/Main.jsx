import React from 'react'

const Main = () => {
  return (
    <div>
      <div className="flex justify-between w-full">
      <a href='/'>
        <img src="/assets/logo.svg" alt="logo" className="w-20 h-auto"/>
      </a>
      <div>
        <img src="/assets/mcafee.svg" alt="logo" className="w-20 h-auto"/>
        <img src="/assets/norton.svg" alt="logo" className="w-20 h-auto"/>
      </div>
    </div>
    <div className="pt-[20px] text-center flex flex-col gap-[24px]">
      <h1 className='text-center text-[48px] font-medium '>Wait ! your order in progress.</h1>
      <h2 className='text-[24px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing </h2>
    </div>
    <div className="py-40px px-0 w-full">
      {showSteps ? (
        <ul className='list-none flex justify-between w-full p-0'>
          <li className='flex items-center gap-20'>
               <FaCheck />
            <p>Step 1 : Cart Review</p>
          </li>
          <li className='flex items-center gap-20 font-semibold'>
               <FaCheck />
            <p>Step 2 : Checkout</p>
          </li>
          <li className='flex flex-col gap-y-10'>
            <img src="/assets/current.svg" alt="" />
            <p>Step 3 : Special Offer</p>
          </li>
          <li>
            <img src="/assets/next.svg" alt="" />
            <p>Step 4 : Confirmation</p>
          </li>
        </ul>
        ) : (
          <ul className="flex flex-col gap-y-10">
            <li>
               <FaCheck />
            <p>Cart Review</p>
          </li>
          <li>
               <FaCheck />
            <p>Checkout</p>
          </li>
          <li className='font-semibold'>
            <img src="/assets/current.svg" alt="" />
            <p>Special Offer</p>
          </li>
          <li>
            <img src="/assets/next.svg" alt="" />
            <p>St: Confirmation</p>
          </li>
          </ul>
        )}
        
    </div>
    </div>
  )
}

export default Main
