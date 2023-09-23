import React from 'react'
import NavBar from '../component/NavBar'
import Features from '../component/features'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import { Earphone } from '../Data'
import { selectItem } from '../REDUX/Actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Earphones = ({selectItem}) => {

  return (
    <div>
      <div className=' bg-black w-full'>
      <div className='border-b-[1px] border-white px-[5%] md:px-[10%] lg:px-0 lg:mx-[100px]'>
        <NavBar />
        </div>
        <h1 className=' text-center text-white uppercase py-[50px] text-[40px]'>Earphones</h1>
      </div>
      <div>
        {Earphone.map((item, index) => (
          <div
            className={` flex mx-[5%] md:mx-[10%] flex-col lg:mx-[100px] lg:flex-row justify-between items-center my-[100px] ${index % 2 !== 0 ? 'flex-row-reverse' : '' // Apply flex-row-reverse class to even-indexed items
              }`}
            key={item.id}
          >

            <div className=' w-full lg:w-1/2 lg:h-[500px] bg-[#F1F1F1] flex flex-col justify-center items-center'>
              <img src={item.img} alt=" " className='h-[400px] w-[400px] object-contain py-5' />
            </div>
            <div className='lg:w-[40%] font-manrope text-center lg:text-left mt-10 lg:mt-0'>
              <h1 className='text-[14px] text-[#D87D4A] opacity-70 tracking-[10px] mb-2'>{item.arrival}</h1>
              <p className='text-[#000000] text-[40px] leading-[25px] my-5'>{item.name}</p>
              <p className='text-[#000000] text-[40px] leading-[25px] my-5'>{item.category}</p>
              <p className='text-[#000000] text-[15px] opacity-60'>{item.details}</p>
              <Link to={"/detail"}><button className='bg-[#D87D4A] text-white text-[13px] p-2 mt-10' onClick={()=> selectItem(item)}>See Product</button> </Link> 
            </div>
          </div>

        ))}
      </div>
      <div>
       <Features/> 
       <Banner/>
       <Footer/>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  selectedItem: state.selectedItem,
 
});
const mapDispatchToProps = {
 selectItem
};
export default connect(mapStateToProps,mapDispatchToProps)( Earphones) 

