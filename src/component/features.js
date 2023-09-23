import React from 'react'
import { Link } from 'react-router-dom'

const Features = () => {
    return (
        <div className=' flex flex-col md:flex-row lg:flex-row   justify-between mx-[5%] md:mx-[10%] lg:mx-[100px] mb-32 '>
            <div className=' w-full md:w-[200px] lg:w-[300px] bg-[#F1F1F1] flex flex-col justify-center items-center h-[170px] relative mt-32'>
                <img src="./images/Headphones/head_2.png" alt="" className=' w-[100px] absolute top-[-30%] ' />
                <img src="./images/Oval.png" alt="" className=' w-[150px] absolute top-[20%] ' />
                <h1 className=' text-[#000000] text-[18px] mt-16'>HEADPHONES</h1>
            <Link to={"/headphone"}>   <button className=' flex items-center text-[13px] opacity-70'>
                    <p>SHOP</p>
                    <i className="fa fa-angle-right text-[#D87D4A]" aria-hidden="true"></i>
                </button> </Link>
            </div>
            <div className=' w-full md:w-[200px] lg:w-[300px] bg-[#F1F1F1] flex flex-col justify-center items-center h-[170px] relative mt-32'>
                <img src="./images/Speakers/speak_1.png" alt="" className=' w-[100px] absolute top-[-30%] ' />
                <img src="./images/Oval.png" alt="" className=' w-[150px] absolute top-[20%] ' />
                <h1 className=' text-[#000000] text-[18px] mt-16'>SPEAKERS</h1>
                <Link to={"/speaker"}>     <button className=' flex items-center text-[13px] opacity-70'>
                    <p>SHOP</p>
                    <i className="fa fa-angle-right text-[#D87D4A]" aria-hidden="true"></i>
                </button> </Link>
            </div>
            <div className=' w-full md:w-[200px] lg:w-[300px] bg-[#F1F1F1] flex flex-col justify-center items-center h-[170px] relative mt-32'>
                <img src="./images/Earphones/ear_1.png" alt="" className=' w-[100px] absolute top-[-30%] ' />
                <img src="./images/Oval.png" alt="" className=' w-[150px] absolute top-[20%] ' />
                <h1 className=' text-[#000000] text-[18px] mt-16'>EARPHONES</h1>
                <Link to={"/earphone"}>  <button className=' flex items-center text-[13px] opacity-70'>
                    <p>SHOP</p>
                    <i className="fa fa-angle-right text-[#D87D4A]" aria-hidden="true"></i>
                </button> </Link>
            </div>
        </div>
    )
}

export default Features
