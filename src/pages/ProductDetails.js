import React from 'react'
import { connect } from 'react-redux';
import { addToCart, decreaseQuantity, increaseQuantity } from '../REDUX/Actions';
import NavBar from '../component/NavBar';
import Banner from '../component/Banner';
import Features from '../component/features';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';
import Suggestion from '../component/Suggestion';

const ProductDetails = ({ selectedItem,addToCart,increaseQuantity,decreaseQuantity}) => {
  console.log(selectedItem)
  const navigate = useNavigate()


  if (selectedItem===null) {
    window.location.href = "/"
    return null
  }
  
  const handleNavigate = () => {
   
    navigate(-1);
  };
  return (
    <div className=' overflow-hidden'>
       <div className='px-[5%] md:px-[10%] lg:px-[100px] bg-black'>
        <NavBar />
        </div>
       <div>
        <div className=' ml-[5%]  md:mx-[10%] pt-[10%]   md:pt-[10%] lg:pt-[100px] lg:ml-[100px]'>
        <button className=' text-[15px] opacity-50' onClick={handleNavigate}>Go back</button>
        </div>
       <div className= "flex mx-[5%]  md:mx-[10%] flex-col md:flex-row lg:mx-[100px] justify-between items-center  my-[50px]  " >
         <div className=' w-full md:w-1/2  lg:h-[500px] bg-[#F1F1F1] flex flex-col justify-center items-center'>
           <img src={selectedItem.img} alt=" " className='h-[400px] w-[400px] object-contain py-5' />
         </div>
         <div className=' mt-10 lg:mt-0 w-full md:w-[40%]  font-manrope'>
           <h1 className=' text-[14px] text-[#D87D4A] opacity-70 tracking-[10px] mb-2'>{selectedItem.arrival}</h1>
           <p className=' text-[#000000] text-[40px] leading-[25px] my-5 lg:w-[80%]'>{selectedItem.name}</p>
           <p className=' text-[#000000] text-[40px] leading-[25px] my-5 w-[80%]'>{selectedItem.category}</p>
           <p className=' text-[#000000] text-[15px] opacity-60'>{selectedItem.details}</p>
           <p className=' mt-5'>${(selectedItem.price * selectedItem.quantity).toLocaleString()}</p>
           <div className=' flex items-center mt-10'>
            <button className=' flex items-center w-[70px] justify-between text-[13px] bg-[#F1F1F1] p-2 mr-4'>
            <i className="fa fa-minus opacity-50" aria-hidden="true"  onClick={() => decreaseQuantity(selectedItem.id)}></i>
            {selectedItem.quantity}
            <i className="fa fa-plus opacity-50" aria-hidden="true"  onClick={() => increaseQuantity(selectedItem.id)}></i>
            </button>
           <button className=' bg-[#D87D4A] text-white text-[13px] p-2 ' onClick={() => addToCart(selectedItem)}>ADD TO CART</button>
           </div>
         </div>
         
       </div>
       <div className=' mt-10 lg:mx-[100px] flex flex-col md:flex-row justify-between  mx-[5%]  md:mx-[10%]  '>
            <div className=' w-full md:w-1/2 font-manrope'>
           <h1 className=' text-[#000000] text-[32px]'>FEATURES</h1>
           <p className=' text-[15px] opacity-50'>{selectedItem.features}</p>
           </div>
           <div className=' w-full  md:w-[30%] mt-5 lg:mt-0  '> 
             <h1 className='text-[#000000] text-[32px]'>IN THE BOX</h1>
             <p><span className=' text-[#D87D4A]'>{selectedItem.num.num_1}</span> <span className=' opacity-50'>{selectedItem.material.mat_1}</span></p>
             <p><span className=' text-[#D87D4A]'>{selectedItem.num.num_2}</span> <span className=' opacity-50'>{selectedItem.material.mat_2}</span></p>
             <p><span className=' text-[#D87D4A]'>{selectedItem.num.num_3}</span> <span className=' opacity-50'>{selectedItem.material.mat_3}</span></p>
             <p><span className=' text-[#D87D4A]'>{selectedItem.num.num_4}</span> <span className=' opacity-50'>{selectedItem.material.mat_4}</span></p>
             <p><span className=' text-[#D87D4A]'>{selectedItem.num.num_5}</span> <span className=' opacity-50'>{selectedItem.material.mat_5}</span></p>
           </div>
         </div>
       </div>
       <div className=' flex lg:mx-[100px] flex-col md:flex-row  mx-[5%]  md:mx-[10%]  my-10'>
       <div className='md:w-1/2 md:mr-2'>
       <img src={selectedItem.info.info_1} alt="" className=' w-full h-[300px] mb-2  object-cover' />
       <img src={selectedItem.info.info_2} alt="" className=' w-full h-[300px] mt-5 md:mt-2  object-cover'/>
       </div>
       <div className=' md:w-1/2 lg:ml-2 mt-5 md:mt-0'>
       <img src={selectedItem.info.info_3} alt=""  className=' h-full object-cover'/>
       </div>
       </div>
       <div>
       <Suggestion/>
       </div>
       <div>
        <Features/>
       </div>
       <div>
        <Banner/>
       </div>
       <div>
        <Footer/>
       </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
    selectedItem: state.selectedItem,
    cartItem: state.cartItems
  });
  const mapDispatchToProps = {
    addToCart,
    increaseQuantity,
    decreaseQuantity
  };
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails)