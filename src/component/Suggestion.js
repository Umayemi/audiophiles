import React, { useEffect, useState } from 'react'
import { All } from '../Data';
import { connect } from 'react-redux';
import { selectItem } from '../REDUX/Actions';
import { Link } from 'react-router-dom';

const Suggestion = ({selectItem}) => {

  const [randomItems, setRandomItems] = useState([]);
  useEffect(() => {
    // Function to randomly select 3 items
    const selectRandomItems = () => {
      const selectedItems = [];
      const allCopy = [...All];
      while (selectedItems.length < 3 && allCopy.length > 0) {
        const randomIndex = Math.floor(Math.random() * allCopy.length);
        const selectedItem = allCopy.splice(randomIndex, 1)[0];
        selectedItems.push(selectedItem);
      }
      return selectedItems;
    };

    const randomlySelectedItems = selectRandomItems();
    setRandomItems(randomlySelectedItems);
  }, [])
  return (
    <div className=' text-center mt-20'>
        <h1 className=' uppercase text-[32px] my-8'>you may also like</h1>
      <div className=' flex justify-between mx-[5%] md:mx-[10%]  lg:mx-[100px] flex-col md:flex-row'>
      {randomItems.map((item)=>(
        <div key={item.id} className=' w-full md:w-[200px] lg:w-[300px] h-[300px]  flex flex-col items-center justify-center mb-5 md:mb-0  '>
          <div className='  w-full md:w-[200px] lg:w-[300px] h-[300px]   bg-[#F1F1F1] flex flex-col items-center justify-center '>
         <img src={item.img} alt=""  className=' w-[100px] '/>
         </div>
         <p className=' text-[24px] mt-5 '><b>{item.name}</b></p>
         <Link to={"/detail"}><button className='bg-[#D87D4A] text-white text-[13px] p-2 mt-5 mb-10' onClick={()=> selectItem(item)}>See Product</button> </Link> 
        </div>
      ))}
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
export default connect(mapStateToProps,mapDispatchToProps)(Suggestion)
