import React from 'react'
import NavBar from '../component/NavBar'
import Features from '../component/features'
import Footer from '../component/Footer'
import Banner from '../component/Banner'
import { selectItem } from '../REDUX/Actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { All } from '../Data'
// import { homeEarphone, homeHeaphone, homeSpeaker, homeSpeaker2 } from '../Data'
const Home = ({selectItem}) => {
  const head_id = 1
  const speaker_1 = 4
  const speaker_2 = 5
  const earphone_id = 6
  const homeHeaphone = All.find(item => item.id === head_id);
  const homeSpeaker = All.find(item => item.id === speaker_1);
  const homeSpeaker2 = All.find(item => item.id === speaker_2);
  const homeEarphone = All.find(item => item.id === earphone_id);
  return (
    <div className=' overflow-hidden '>
      <div className=' background '>
        <div className='border-b-[1px] border-white px-[5%] md:px-[10%] lg:px-0 lg:mx-[100px]'>
        <NavBar />
        </div>
        <section className=' px-[5%] md:px-[10%] lg:px-[100px] py-[100px]  lg:w-1/2 h-[500px] w-full flex flex-col lg:items-start justify-center items-center '>
          <p className=' opacity-50 text-white tracking-[10px]'>{homeHeaphone.arrival}</p>
          <h1 className=' text-white text-[25px]  lg:text-[56px] leading-[30px] mt-5 uppercase'>{homeHeaphone.name}</h1>
          <h1 className=' text-white text-[36px] md:text-[45px] lg:text-[56px] uppercase'>{homeHeaphone.category}</h1>
          <p className=' text-white md:w-[60%] md:text-[20px] lg:w-[75%] text-[15px] opacity-50 w-full text-center lg:text-left'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link to={"/detail"}><button className='bg-[#D87D4A] text-white text-[13px] p-2 mt-10' onClick={()=> selectItem(homeHeaphone)}>See Product</button> </Link> 
        </section>
      </div>
      <Features />
      <div className='mx-[5%] md:mx-[10%] items-center lg:mx-[100px] flex flex-col lg:flex-row bg-[#D87D4A] justify-between  overflow-hidden rounded-[10px] px-[5%] lg:px-[50px] pt-[50px] lg:pt-[50px] mb-[50px] relative '>
        <img src="./images/wave.png" alt="" className=' absolute z-20 w-4/6 top-[-5px] left-[-10px] h-full object-contain' />
        <img src={homeSpeaker.img} alt="" className=' w-1/2 mb-[-35px] lg:h-[500px] object-contain relative z-30' />
        <div className=' w-full text-center pb-[50px] lg:w-[40%] mt-[70px] relative z-30 '>
          <h1 className=' text-white text-[56px] leading-[30px] '>{homeSpeaker.name}</h1>
          <h1 className=' text-white text-[56px] '>{homeSpeaker.category}</h1>
          <p className=' text-[15px] text-white opacity-50 my-5'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link to={"/detail"}><button className=' text-white bg-[#000000] text-[13px] p-2 mt-10' onClick={()=> selectItem(homeSpeaker)}>See Product</button> </Link> 
        </div>
      </div>
      <div className=' mx-[5%] md:mx-[10%] lg:mx-[100px] relative mb-10'>
      <img src="./images/banner_speaker1.png" alt="" className=' w-full rounded-[10px] lg:hidden' />
        <img src="./images/banner_speaker.png" alt="" className=' w-full rounded-[10px] hidden lg:visible' />
        <div className=' absolute top-[35%] left-[5%]'> <p className=' text-[28px]'>{homeSpeaker2.name} <span className=' uppercase'>{homeSpeaker2.category}</span></p>
        <Link to={"/detail"}><button className='border-[2px] border-[black]  text-[13px] p-2 mt-10' onClick={()=> selectItem(homeSpeaker2)}>See Product</button> </Link> 
        </div>
      </div>
      <div className=' flex justify-between  mx-[5%] md:mx-[10%] lg:mx-[100px] flex-col lg:flex-row'>
        <img src={homeEarphone.info.info_2} alt="" className=' w-full h-[300px] lg:w-[49%]  ' />
        <div className='  w-full lg:w-[49%]  pt-[20%] h-[300px] lg:pt-[70px] pl-[40px] lg:pl-[70px] bg-[#F1F1F1] rounded-[10px]'> <p className=' text-[28px]'>YX1 EARPHONES</p>
        <Link to={"/detail"}><button className='border-[2px] border-[black]  text-[13px] p-2 mt-10' onClick={()=> selectItem(homeEarphone)}>See Product</button> </Link> 
        </div>
      </div>
      <Banner/>
      <Footer />
    </div>
  )
}
const mapStateToProps = (state) => ({
  selectedItem: state.selectedItem,
 
});
const mapDispatchToProps = {
 selectItem
};
export default connect(mapStateToProps,mapDispatchToProps)(Home)
