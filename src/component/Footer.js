import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  const   scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling animation
    });
  };
  return (
    <div className=' px-[5%] md:px-[10%] lg:px-[100px]  bg-[#101010] w-full py-[50px]'>
    <div className='   flex justify-between items-center md:items-start flex-col lg:flex-row text-center  '>
   <Link to={"/"}> <img src="./images/logo.png" alt="" className=' my-2'/> </Link>
    <nav className=' md:flex md:w-[70%]  text-white lg:w-[400px] text-[13px]  justify-between items-center '>
          <Link to={"/"} ><p className=' my-2' onClick={ scrollToTop}>HOME</p></Link>
          <Link to={"/headphone"} ><p className=' my-2' onClick={ scrollToTop}>HEADPHONES</p></Link>
          <Link to={"/speaker"} ><p className=' my-2' onClick={ scrollToTop}>SPEAKERS</p></Link>
          <Link to={"/earphone"} ><p className=' my-2' onClick={ scrollToTop}>EARPHONE</p></Link>
        </nav>
    </div>
    <p className=' text-white text-[15px] opacity-50 lg:w-[49%] my-10 text-center md:text-left lg:text-left'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
    <div className=' flex flex-col md:flex-row justify-between items-center'>
     <p className=' text-white text-[15px] opacity-50 '>Copyright 2021. All Rights Reserved</p>
     <div className=' flex w-[100px] justify-between mt-5 lg:mt-[-100px]'>
     <img src="./images/social_media/fb.png" alt="" />
     <img src="./images/social_media/twitter.png" alt="" />
     <img src="./images/social_media/insta.png" alt="" />
     </div>
    </div>
    </div>
  )
}

export default Footer
