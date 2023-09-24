import React, { useState } from 'react'
import NavBar from '../component/NavBar'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Footer from '../component/Footer'

const Checkout = ({ cart }) => {
    // ============= Initial State Start here =============
    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [zip, setZip] = useState("");
    const [money, setMoney] = useState("");
    const [pin,setPin] = useState("");
    const [checked, setCheck] = useState(false)
    // ============= Initial State End here ===============
    // ============= Error Msg Start here =================
    const [errClientName, setErrClientName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPhone, setErrPhone] = useState("");
    const [errAddress, setErrAddress] = useState("");
    const [errCity, setErrCity] = useState("");
    const [errCountry, setErrCountry] = useState("");
    const [errZip, setErrZip] = useState("");
    const [errMoney, setErrMoney] = useState("");
    const [errPin, setErrPin] = useState("");
    const [errPayment, setErrPayment] = useState("")
    // ============= Error Msg End here ===================
    const [pay, setPay] = useState(false);
    // ============= Event Handler Start here =============

    const handleName = (e) => {
        setClientName(e.target.value);
        setErrClientName("");
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");
    };
    const handlePhone = (e) => {
        setPhone(e.target.value);
        setErrPhone("");
    };
    const handleAddress = (e) => {
        setAddress(e.target.value);
        setErrAddress("");
    };
    const handleCity = (e) => {
        setCity(e.target.value);
        setErrCity("");
    };
    const handleCountry = (e) => {
        setCountry(e.target.value);
        setErrCountry("");
    };
    const handleZip = (e) => {
        setZip(e.target.value);
        setErrZip("");
    };
    const handleMoney = (e) => {
        setMoney(e.target.value);
        setErrMoney("");
    };
    const handlePin = (e) => {
        setPin(e.target.value);
        setErrPin("");
    };
    
    // ================= Email Validation start here =============
    const EmailValidation = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    };
    // ================= Email Validation End here ===============
    //    ========== RADIO BUTTON   ==========
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setCheck(true)
    };


    const handlePay = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional smooth scrolling animation
          });

        if (!clientName) {
            setErrClientName("Enter your name");
        };
        if (!email) {
            setErrEmail("Enter your email");
        } else {
            if (!EmailValidation(email)) {
                setErrEmail("Wrong format");
            }
        }
        if (!phone) {
            setErrPhone("Enter your phone number");
        }
        if (!address) {
            setErrAddress("Enter your address");
        }
        if (!city) {
            setErrCity("Enter your city name");
        }
        if (!country) {
            setErrCountry("Enter the country you are residing");
        }
        if (!zip) {
            setErrZip("Enter the zip code of your area");
        }
        if (checked === false) {
            setErrPayment("Select payment method")
        }
        if (!money) {
            setErrMoney("provide your e-money number");
        }
        if (!pin) {
            setErrPin("please provide your e-money pin")
        }
        if (clientName && email && EmailValidation(email) && address && city && country && zip && checked) {
            setPay(true)
            setClientName("");
            setEmail("");
            setPhone("");
            setAddress("");
            setCity("");
            setCountry("");
            setZip("");
        }
    }



    const navigate = useNavigate()
    const handleNavigate = () => {

        navigate(-1);
    };
    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += item.price * item.quantity;
    });
    const shipping = Math.round(totalPrice * 0.02);
    const vat = Math.round(totalPrice * 0.05)
    const grandTotal = Math.round(totalPrice + shipping + vat)
    return (
        <div className=' bg-[#f4f4f4] h-[100%]'>
            <div className='px-[5%] md:px-[10%] lg:px-[100px] bg-black'>
                <NavBar />
            </div>
            <div className=' ml-[5%]  md:mx-[10%] py-[5%]   md:py-[5%] lg:pt-[100px] lg:ml-[100px]'>
                <button className=' text-[15px] opacity-50' onClick={handleNavigate}>Go back</button>
            </div>
            <div className=' flex flex-col lg:flex-row justify-between mx-[5%] md:mx-[10%] lg:mx-[100px] '>
                <div className=' bg-white w-full lg:w-[75%] p-3 lg:p-10 md:p-5 mb-[50px] '>
                    <h1 className=' text-[32px]'>CHECKOUT</h1>
                    <p className=' uppercase text-[#D87D4A] text-[13px] my-5'>Billing Details</p>
                    <div className=' flex flex-col md:flex-row justify-between'>
                        <div className=' md:w-[49%]'>
                            <div className=' flex justify-between mb-1'>
                                <label htmlFor="name" className={`text-[12px] text-[#000000] ${errClientName ? 'text-[#CD2C2C] ' : 'text-[#000000]'} `}><b>NAME</b></label>
                                {errClientName && (<p className=' text-[#CD2C2C] text-[12px]'>{errClientName}</p>)}
                            </div>

                            <input type="text" className=' w-full border-[2px] rounded-[5px] outline-none p-2 text-[12px]' placeholder='Alexei Ward' onChange={handleName} value={clientName} />
                        </div>
                        <div className=' mt-5 md:mt-0 md:w-[49%]'>
                            <div className=' flex justify-between mb-1'>
                                <label htmlFor="name" className={`text-[12px] text-[#000000] ${errEmail ? 'text-[#CD2C2C] ' : 'text-[#000000]'} `}><b>Email Address</b></label>
                                {errEmail && (<p className=' text-[#CD2C2C] text-[12px]'>{errEmail}</p>)}
                            </div>
                            <input type="email" className=' w-full border-[2px] rounded-[5px] outline-none p-2 text-[12px]' placeholder='alexei@mail.com' onChange={handleEmail} value={email} />
                        </div>
                    </div>
                    <div className=' md:w-[49%]'>
                        <div className=' flex justify-between mb-1 mt-5'>
                            <label htmlFor="name" className={`text-[12px] text-[#000000] ${errPhone ? 'text-[#CD2C2C] ' : 'text-[#000000]'} `}><b>Phone Number</b></label>
                            {errPhone && (<p className=' text-[#CD2C2C] text-[12px]'>{errPhone}</p>)}
                        </div>
                        <input type="text" className=' w-full border-[2px] rounded-[5px] outline-none p-2 text-[12px]' placeholder='+1 202-555-0136' onChange={handlePhone} value={phone} />
                    </div>
                    <p className=' uppercase text-[#D87D4A] text-[13px] mt-10 mb-4 '>shipping info</p>
                    <div className=' w-full'>
                        <div className=' flex justify-between mb-1'>
                            <label htmlFor="name" className={`text-[12px] text-[#000000] ${errAddress ? 'text-[#CD2C2C] ' : 'text-[#000000]'} `}><b>Address</b></label>
                            {errAddress && (<p className=' text-[#CD2C2C] text-[12px]'>{errAddress}</p>)}
                        </div>
                        <input type="text" className=' w-full border-[2px] rounded-[5px] outline-none p-2 text-[12px]' placeholder='1137 Williams Avenue' onChange={handleAddress} value={address} />
                    </div>
                    <div className=' flex flex-col md:flex-row justify-between mt-5'>
                        <div className=' md:w-[49%]'>
                            <div className=' flex justify-between mb-1'>
                                <label htmlFor="name" className={`text-[12px] text-[#000000] ${errZip ? 'text-[#CD2C2C] ' : 'text-[#000000]'} `}><b>Zip code</b></label>
                                {errZip && (<p className=' text-[#CD2C2C] text-[12px]'>{errZip}</p>)}
                            </div>
                            <input type="text" className=' w-full border-[2px] rounded-[5px] outline-none p-2 text-[12px]' placeholder='10001' onChange={handleZip} value={zip} />
                        </div>
                        <div className=' md:w-[49%] mt-5 md:mt-0  '>
                            <div className=' flex  md:flex-row justify-between  mb-1 '>
                                <label htmlFor="name" className={`text-[12px] text-[#000000] ${errCity ? 'text-[#CD2C2C] ' : 'text-[#000000]'} `}><b>City</b></label>
                                {errCity && (<p className=' text-[#CD2C2C] text-[12px]'>{errCity}</p>)}
                            </div>
                            <input type="text" className=' w-full border-[2px] rounded-[5px] outline-none p-2 text-[12px]' placeholder='New York' onChange={handleCity} value={city} />
                        </div>
                    </div>
                    <div className=' md:w-[49%] mt-5 '>
                            <div className=' flex  md:flex-row justify-between  mb-1 '>
                            <label htmlFor="name" className={`text-[12px] text-[#000000] ${errCountry ? 'text-[#CD2C2C] ' : 'text-[#000000]'} `}><b>Country</b></label>
                            {errCountry && (<p className=' text-[#CD2C2C] text-[12px]'>{errCountry}</p>)}
                        </div>
                        <input type="text" className=' w-full border-[2px] rounded-[5px] outline-none p-2 text-[12px]' placeholder='United States' onChange={handleCountry} value={country} />
                    </div>
                    <p className=' uppercase text-[#D87D4A] text-[13px] mt-10 mb-5'>payment details</p>
                    <div className=' flex flex-col md:flex-row justify-between'>

                        <h1 className='w-[49%]'><b>Payment Method </b></h1>
                        <div className=' md:w-[49%] text-[14px]'>
                            {errPayment && (<p className=' text-[#CD2C2C] text-[12px] text-right mb-2'>{errPayment}</p>)}
                            <div className='  rounded-[5px]  border-[2px] border-[#D87D4A]  w-[100%]'>
                                <label className='  cursor-pointer radio-container mt-3 ml-3' >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="e-Money"
                                        checked={selectedOption === 'e-Money'}
                                        onChange={handleOptionChange}
                                        className='  cursor-pointer'
                                    />{' '}
                                    e-Money
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className=' rounded-[5px] border-[2px] border-[#D87D4A] w-[100%] mt-5'>
                                <label className='  cursor-pointer radio-container mt-3 ml-3'>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="Cash on Delivery"
                                        checked={selectedOption === 'Cash on Delivery'}
                                        onChange={handleOptionChange}
                                        className='  cursor-pointer'
                                    />{' '}
                                    Cash on Delivery
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {selectedOption === 'e-Money' && (
                        <div className=' flex flex-col md:flex-row justify-between mt-5'>
                            <div className=' md:w-[49%]'>
                                <div className=' flex justify-between mb-1'>
                                    <label htmlFor="name" className={`text-[12px] text-[#000000] ${errMoney ? 'text-[#CD2C2C] ' : 'text-[#000000]'} `}><b>e-Money Number</b></label>
                                    {errMoney && (<p className=' text-[#CD2C2C] text-[12px]'>{errMoney}</p>)}
                                </div>

                                <input type="text" className=' w-full border-[2px] rounded-[5px] outline-none p-2 text-[12px]' placeholder='238521993' onChange={handleMoney} value={money} />
                            </div>
                            <div className=' md:w-[49%] mt-5 md:mt-0'>
                                <div className=' flex justify-between mb-1'>
                                    <label htmlFor="name" className={`text-[12px] text-[#000000] ${errPin ? 'text-[#CD2C2C] ' : 'text-[#000000]'} `}><b>e-Money PIN</b></label>
                                    {errPin && (<p className=' text-[#CD2C2C] text-[12px]'>{errPin}</p>)}
                                </div>

                                <input type="text" className=' w-full border-[2px] rounded-[5px] outline-none p-2 text-[12px]' placeholder='6891' onChange={handlePin} value={pin} />
                            </div>
                        </div>
                    )}

                    {selectedOption === 'Cash on Delivery' && (<div className=' flex justify-between mt-5'>
                        <img src="./images/delivery.png" alt="" className=' h-20 w-20' />
                        <p className=' text-[15px] opacity-60 mx-[5%] lg:mx-7'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>)}

                </div>
                <div className=' bg-white lg:w-[22%] p-5 mb-10 rounded-[5px] h-[100%]'>
                    <h1 className=' text-[18px]'>SUMMARY</h1>
                    <div>
                        {cart?.map((item) => (
                            <div key={item.id} className=' flex justify-between items-center mt-5'>
                                <div className=' flex items-center'>
                                    <img src={item.img} alt="" className=' h-12 w-12 bg-[#F1F1F1] p-2 rounded-[5px] mr-3 object-contain' />
                                    <div >
                                        <h1 className=' text-[12px] font-bold'>{item.name} </h1>
                                        <p className=' text-[12px]'>${(item.price * item.quantity).toLocaleString()}</p>
                                    </div>
                                </div>
                                <p className=' text-[15px] opacity-50'>x{item.quantity}</p>
                            </div>
                        ))}
                    </div>
                    <div className=' flex justify-between mt-5 text-[15px]'>
                        <p className=' opacity-50'>TOTAL</p>
                        <p>${totalPrice.toLocaleString()} </p>
                    </div>
                    <div className=' flex justify-between mt-2 text-[15px]'>
                        <p className=' opacity-50'>SHIPPING</p>
                        <p>${shipping.toLocaleString()} </p>
                    </div>
                    <div className=' flex justify-between mt-2 text-[15px]'>
                        <p className=' opacity-50'>VAT (INCLUDED)</p>
                        <p>${vat.toLocaleString()} </p>
                    </div>
                    <div className=' flex justify-between mt-2 text-[15px]'>
                        <p className=' opacity-50'>GRAND TOTAL</p>
                        <p className=' text-[#D87D4A]'>${grandTotal.toLocaleString()} </p>
                    </div>
                    <button className=' bg-[#D87D4A] text-white text-[13px] p-2  w-full mt-5' onClick={handlePay}>CONTINUE & PAY</button>
                </div>
            </div>
            {pay && (<div className='absolute top-[65px] w-[100%] h-screen  bg-[#00000028] z-50 overflow-hidden flex justify-center items-center px-[5%] '>
                <div className=' bg-white p-8 rounded-[10px] w-[400px] '>
                    <img src="./images/tick.png" alt="" className=' bg-[#D87D4A] p-3 rounded-[50%] h-12 w-12 object-contain mb-5' />
                    <h1 className=' text-[32px] leading-[25px] '><b>THANK YOU  </b></h1>
                    <h1 className=' text-[32px] '> <b>FOR YOUR ORDER </b></h1>
                    <p className=' text-[15px] opacity-50'>You will receive an email confirmation shortly.</p>
                    <div className=' flex flex-col md:flex-row  w-full mt-5 '>
                        <div className=' w-full md:w-[50%] bg-[#F1F1F1] px-4 rounded-l-[5px] '>
                            {cart?.map((item) => (
                                <div key={item.id} className=' flex justify-between items-center my-3'>
                                    <div className=' flex items-center'>
                                        <img src={item.img} alt="" className=' h-10 w-10  rounded-[5px] mr-3 object-contain' />
                                        <div >
                                            <h1 className=' text-[15px] font-bold'>{item.name} </h1>
                                            <p className=' text-[14px]'>${(item.price * item.quantity).toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <p className=' text-[15px] opacity-50'>x{item.quantity}</p>
                                </div>
                            ))}
                        </div>
                        <div className=' bg-[#000000] p-4 flex flex-col items-start justify-end rounded-r-[5px]  w-full md:w-[50%]'>
                            <div className=' text-[white]'>
                                <p className=' uppercase text-[15px] opacity-50'>Grand Total</p>
                                <p className=' text-[18px]'>${grandTotal.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    <Link to={"/"} >  <button className=' bg-[#D87D4A] text-white text-[13px] p-2  w-full mt-5' >BACK TO HOME</button> </Link>
                </div>
            </div>)}
            <Footer />
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart: state.cartItems,

});
const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
