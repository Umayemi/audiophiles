import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { clearCart, decreaseQuantity, increaseQuantity } from '../REDUX/Actions'
import Features from './features'

const NavBar = ({ cart, increaseQuantity, decreaseQuantity,clearCart}) => {

  const [menuToggle,setMenuToggle] = useState(false)


  const HandleMenuToggle =()=>{
    setMenuToggle(!menuToggle)
  }
  const slidingStyle = {
    transform: menuToggle ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease', // You can adjust the transition time as needed
  };
  let totalPrice = 0;
            cart.forEach((item) => {
                totalPrice += item.price* item.quantity;
            });
  const [toggleCart, setToggleCart] = useState(false)
  const HandleCart = () => {
    setToggleCart(!toggleCart)
  }
  const Handleprevent = (event) => {
    event.stopPropagation();
  }
  return (
    < div className=' '>
      <div className=' flex justify-between items-center py-5 '>
      <i className="fa fa-bars text-[white] lg:hidden" aria-hidden="true" onClick={HandleMenuToggle}></i>
     <div className=' w-[100%] h-screen bg-[#00000028] z-50 top-0 right-0 bottom-0 absolute flex flex-col items-center justify-start '  style={{
        
        ...slidingStyle,
      }}
    
     >
      <div className=' bg-white w-full  ' onClick={HandleMenuToggle}>
      <Features/>
      </div>
      </div>
       <Link to={"/"}> <img src="./images/logo.png" alt="" /> </Link>
        <nav className=' lg:flex  text-white w-[400px] text-[13px] hidden lg:visible lg:justify-between '>
          <NavLink to={"/"} ><p className=''>HOME</p></NavLink>
          <NavLink to={"/headphone"} ><p>HEADPHONES</p></NavLink>
          <NavLink to={"/speaker"} ><p>SPEAKERS</p></NavLink>
          <NavLink to={"/earphone"} ><p>EARPHONE</p></NavLink>
        </nav>
        <div className=' relative cursor-pointer' onClick={HandleCart}>
        <i className="fa fa-shopping-cart text-white " aria-hidden="true" ></i>
        <p className=' absolute text-[#D87D4A] top-[-10%] right-[-10%] text-[10px] bg-white rounded-[50%] px-1'>{cart.length}</p>
        </div>
      </div>
      <div className=' '>
        {toggleCart && (<div className=' w-[100%] h-screen bg-[#00000028] z-50 top-0  left-0 right-0 bottom-0 absolute flex flex-col items-center lg:items-end justify-center lg:justify-start lg:px-[100px] lg:top-20 px-[5%]' onClick={HandleCart}>
          <div className=' w-full lg:w-[350px]  bg-white rounded-[10px] px-3 py-5' onClick={Handleprevent}>
            <div className=' flex justify-between text-[18px] text-[#000000] '>
              <div><p>CART({cart.length})</p></div>
              <button className=' opacity-50 ' onClick={()=>clearCart()}>Remove all</button>
            </div>
           
            <div>
              
              {cart?.map((item) => (
                <div key={item.id} className=' flex justify-between items-center mt-5'>
                  <div className=' flex items-center'>
                    <img src={item.img} alt="" className=' h-16 w-16 bg-[#F1F1F1] p-2 rounded-[5px] mr-3 object-contain' />
                    <div>
                      <p>{item.name}</p>
                      <p>${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                  <button className=' flex items-center  justify-between text-[13px] bg-[#F1F1F1] p-2 w-16 h-8'>
                    <i className="fa fa-minus opacity-50" aria-hidden="true" onClick={() => decreaseQuantity(item.id)}></i>
                    {item.quantity}
                    <i className="fa fa-plus opacity-50" aria-hidden="true" onClick={() => increaseQuantity(item.id)}></i>
                  </button>
                </div>
              ))}
            </div>
            <div className=' flex justify-between text-[15px] text-[#000000] mt-5'>
             <h1 className=' opacity-50'>TOTAL</h1>
             <h1>${totalPrice}</h1>
            </div>
          <Link to={"/checkout"}> <button  className=' bg-[#D87D4A] text-white text-[13px] p-2  w-full mt-5'>Checkout</button> </Link> 
          </div>
        </div>)}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  cart: state.cartItems,
 

});
const mapDispatchToProps = {
  decreaseQuantity,
  increaseQuantity,
  clearCart
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
