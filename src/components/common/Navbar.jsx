import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { IoReorderThreeOutline } from "react-icons/io5";
import ProductData from "../../data/ProductData";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setCategory} from "../../feature/CategorySlice"
function Navbar() {
  const [categoryData, setCategoryData] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate  = useNavigate()
  const dispatch = useDispatch()

  const length = useSelector((state)=> state.cart.cartLength)

  const category = useSelector((state) => state.category.category);

  const categoryFunction = (category)=>{
    dispatch(setCategory(category));
    navigate("/categoryProduct")
    console.log(category)

  }

  useEffect(() => {
    const uniqueCategories = [...new Set(ProductData.map(item => item.category))];
    setCategoryData(uniqueCategories);
  }, []);

  

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleSignout= ()=>{

    localStorage.removeItem("email")
    navigate("/sendSignInLink")
  }

  return ( 
    
    <div className="bg-black w-full md:w-[85%] mx-auto flex flex-col">
      {/* Navbar top */} 
      <div className="flex flex-wrap gap-5 items-center p-2">
        <div className="flex items-center w-full md:w-[20%] cursor-pointer" onClick={()=> navigate("/")}>
          <img
            src="https://www.pngkey.com/png/full/382-3823836_sign-up-to-earn-3-cash-back-at.png"
            alt="ali-express logo"
            className="w-28 h-8"
          />
          <div className="text-white ml-3 text-[30px]">|</div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/700/788/original/euro-2024-germany-logo-official-symbol-name-white-european-football-final-design-illustration-with-black-background-free-vector.jpg"
            alt="euro cup"
            className="w-26 h-24 mb-2"
          />
        </div>

        <div className="flex items-center w-full md:w-[25%] rounded-full border border-gray-300">
          <input
            type="text"
            className="w-full py-2 px-4 rounded-full focus:outline-none"
            placeholder="Search..."
            onClick={()=> navigate("/searchPage")}
          />
          <div className="p-1 bg-black rounded-full cursor-pointer">
            <FaSearch color="white" />
          </div>
        </div>

        <div className="flex items-center w-full md:w-[10%]">
          <svg
            viewBox="0 0 1024 1024"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="false"
            focusable="false"
            className="text-white w-8 h-8"
          >
            <path d="M128 202.666667A74.666667 74.666667 0 0 1 202.666667 128h149.333333A74.666667 74.666667 0 0 1 426.666667 202.666667v149.333333a74.666667 74.666667 0 0 1-74.666667 74.666667h-149.333333A74.666667 74.666667 0 0 1 128 352v-149.333333zM202.666667 192a10.666667 10.666667 0 0 0-10.666667 10.666667v149.333333a10.666667 10.666667 0 0 0 10.666667 10.666667h149.333333a10.666667 10.666667 0 0 0 10.666667-10.666667v-149.333333a10.666667 10.666667 0 0 0-10.666667-10.666667h-149.333333zM597.333333 202.666667A74.666667 74.666667 0 0 1 672 128h149.333333A74.666667 74.666667 0 0 1 896 202.666667v149.333333a74.666667 74.666667 0 0 1-74.666667 74.666667h-149.333333a74.666667 74.666667 0 0 1-74.666667-74.666667v-149.333333z m74.666667-10.666667a10.666667 10.666667 0 0 0-10.666667 10.666667v149.333333a10.666667 10.666667 0 0 0 10.666667 10.666667h149.333333a10.666667 10.666667 0 0 0 10.666667-10.666667v-149.333333a10.666667 10.666667 0 0 0-10.666667-10.666667h-149.333333zM597.333333 672a74.666667 74.666667 0 0 1 74.666667-74.666667h149.333333a74.666667 74.666667 0 0 1 74.666667 74.666667v149.333333a74.666667 74.666667 0 0 1-74.666667 74.666667h-149.333333a74.666667 74.666667 0 0 1-74.666667-74.666667v-149.333333z m74.666667-10.666667a10.666667 10.666667 0 0 0-10.666667 10.666667v149.333333a10.666667 10.666667 0 0 0 10.666667 10.666667h149.333333a10.666667 10.666667 0 0 0 10.666667-10.666667v-149.333333a10.666667 10.666667 0 0 0-10.666667-10.666667h-149.333333zM128 672A74.666667 74.666667 0 0 1 202.666667 597.333333h149.333333a74.666667 74.666667 0 0 1 74.666667 74.666667v149.333333a74.666667 74.666667 0 0 1-74.666667 74.666667h-149.333333A74.666667 74.666667 0 0 1 128 821.333333v-149.333333z m74.666667-10.666667a10.666667 10.666667 0 0 0-10.666667 10.666667v149.333333a10.666667 10.666667 0 0 0 10.666667 10.666667h149.333333a10.666667 10.666667 0 0 0 10.666667-10.666667v-149.333333a10.666667 10.666667 0 0 0-10.666667-10.666667h-149.333333z"></path>
            <path d="M512 128a32 32 0 0 1 32 32V512a32 32 0 0 1-32 32H160a32 32 0 0 1 0-64h320v-320A32 32 0 0 1 512 128zM512 597.333333a32 32 0 0 1 32 32v234.666667a32 32 0 0 1-64 0v-234.666667A32 32 0 0 1 512 597.333333zM595.2 512a34.133333 34.133333 0 0 1 34.133333-34.133333h268.8a68.266667 68.266667 0 0 1-68.266666 68.266666h-200.533334a34.133333 34.133333 0 0 1-34.133333-34.133333z"></path>
          </svg>
          <div className="text-white text-[12px]">
            <p>Download the</p>
            <p>Ali Express App</p>
          </div>
        </div>

        <div className="flex items-center w-full md:w-[7%] gap-2">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png"
            alt="indian flag"
            className="w-7 h-5"
          />
          <div className="text-white text-[12px] flex items-center">
            <p>En / INR</p>
            <MdKeyboardArrowDown color="white" fontSize={20} />
          </div>
        </div>

        <div className="flex items-center w-full md:w-auto gap-2">
          <svg
            viewBox="0 0 1024 1024"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="false"
            focusable="false"
            className="text-white w-8 h-10"
          >
            <path d="M512 126.357333a189.866667 189.866667 0 1 0 189.866667 189.866667 189.866667 189.866667 0 0 0-189.866667-189.866667z m-125.866667 189.866667a125.866667 125.866667 0 1 1 251.733334 0 125.866667 125.866667 0 0 1-251.733334 0zM512 650.666667c138.026667 0 236.074667 72.448 273.152 192H238.848c37.077333-119.552 135.146667-192 273.152-192z m0-64c-171.541333 0-298.325333 96.981333-339.349333 254.805333-9.002667 34.666667 18.346667 65.194667 51.093333 65.194667h576.512c32.768 0 60.096-30.506667 51.093333-65.194667C810.325333 683.648 683.52 586.666667 512 586.666667z"></path>
          </svg>
          <div className="flex flex-col items-center text-white text-[15px] font-semibold cursor-pointer">

            {
              localStorage.getItem("email") === null ? (
                <p onClick={()=> navigate("/sendSignInLink")}>SignIn / Register</p>
              ) : (
                <p  className="bg-white text-black p-1 rounded-full px-2" onClick={handleSignout}>Sign-out</p>
              ) 
            }
            
            
          </div>
        </div>

        <div className="flex items-center w-full md:w-auto gap-2 cursor-pointer" onClick={()=> navigate("/cartPage")}>
          <BsCart3 className="text-white" fontSize={30} />
          <div className="flex flex-col items-center text-white text-[15px] font-bold">
            {
              localStorage.getItem("email") === null ? <p className="py-[0.1px] px-3 bg-white text-black rounded-full">0</p> : (
                <p className="py-[0.1px] px-3 bg-white text-black rounded-full">
              {length}
            </p>
              )
            }
            <p>Cart</p>
          </div>
        </div>
      </div>

      {/* Navbar bottom */}
      <div className="mb-3 flex flex-wrap justify-between items-center px-8">
        <div className={`relative flex items-center gap-5 py-[5px] px-5 bg-[#757272] rounded-full text-white w-full md:w-auto cursor-pointer`} onClick={toggleDropdown}>
          <IoReorderThreeOutline fontSize={30} />
        {
            category === null ?   <p>  All Categories</p> : <p> {category}</p>
            }
           
          <MdKeyboardArrowDown color="white" fontSize={20} />
          <div className={`dropdown-container ${isDropdownVisible ? 'show' : ''}`}>
            {categoryData.map((category, index) => (
              <p onClick={()=>categoryFunction(category)} key={index} className="p-2 hover:bg-gray-200">{category}</p>
            ))}
          </div>
        </div>

        <div className="flex gap-3 text-white text-[17px] font-bold mx-auto w-full md:w-auto mt-2 md:mt-0">
          <p className="text-red-500 p-1">Super Deals</p>
          <p className="hover:bg-gray-500 p-1 px-4 transition-colors delay-100   rounded-full">Plus</p>
          <p  className="hover:bg-gray-500 p-1 px-4 transition-colors delay-100   rounded-full">New</p>
          <p className="hover:bg-gray-500 p-1 px-4 transition-colors delay-100   rounded-full">AliExpress Business</p>
          <p className="hover:bg-gray-500 p-1 px-4 transition-colors delay-100   rounded-full">Home & Garden</p>
          <p className="flex items-center">
            <span className="hover:bg-gray-500 p-1 px-4   rounded-full">More</span>
            <MdKeyboardArrowDown color="white" fontSize={20} className="ml-1" />
          </p>
        </div>
      </div>     
    </div>    
  );       
}

export default Navbar;
