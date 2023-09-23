import React from 'react'

const Banner = () => {
  return (
    <div className=' flex flex-col flex-col-reverse lg:flex-row  mx-[5%] md:mx-[10%] lg:mx-[100px] items-center justify-between my-[100px] '>
        <div className=' w-full lg:w-[45%] text-center lg:text-left'>
          <h1 className=' uppercase  text-[32px] lg:text-[40px] lg:w-[80%] leading-[50px] mt-10 lg:mt-0'>Bringing you the <span className=' text-[#D87D4A]'>  best</span> audio gear</h1>
          <p className=' text-[15px] opacity-70 mt-5'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        <div className=' w-full  lg:w-1/2'>
          <img src="./images/Bitmap.png" alt="" className=' w-full rounded-[10px]' />
        </div>
      </div>
  )
}

export default Banner
