import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Product from "../data/ProductData"; 
import Footer from "../components/common/Footer"
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { setProductId } from "../feature/ProductSlice";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  //function to find products in Data  base on the inputed title

  const handleSearch = () => {
    const results = Product.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(results);
  };


// set Product id in store onClick of product
  const productFunction = (id) => {
    console.log(id)
    dispatch(setProductId(id));
    navigate("/productDescription")
  };
  return (
    <div className="w-full mx-auto ">
      <div className="flex items-center w-[90%] gap-8 mx-auto mt-2">
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22GpRGAKPzVRXFXgOBdYdOLpiINSt5O_ToA&s"
            alt="Logo"
            className=" w-40     max-md:h-6 mr-6 max-md:mr-1 cursor-pointer" onClick={()=> navigate("/")}
          />
        </div>
        <div className="flex gap-1 w-[80%]">
          <div className="w-full border-[1px] border-black p-1 flex items-center gap-2 rounded-lg px-3">
            <CiSearch className="text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Search for title"
              className="flex-grow px-2 max-md:px-0 py-1 outline-none max-sm:w-[70%]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="px-6 max-md:px-1 py-2 bg-blue-500 text-white rounded-r"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {filteredResults.length === 0 ? (
        <div className="text-[40px] text-center mt-10 text-[#e3342f] bg-gradient-to-r from-[#f5f5f5] to-[#fff] ">You either mistyped or your product will be available soon...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 px-8" >
          {filteredResults.map(product => (
            <div
            key={product.id}
            className={`bg-gray-200 p-4 rounded-lg shadow-md transform transition-transform duration-300 ${
              hoveredCard === product.id ? "scale-105 shadow-lg" : ""
            }`}
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={()=> productFunction(product.id)}
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <p className="font-bold text-lg">{product.title}</p>
            <div className="text-[16px] font-semibold mt-2">
              Rs. <span className="text-[25px] font-bold">${product.price}</span>
            </div>
            <div
              className={`flex justify-between mt-4 transition-opacity duration-200 ${
                hoveredCard === product.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <button className="bg-black text-white font-bold text-sm rounded-full py-2 px-4" onClick={()=> navigate("/productDescription")}>
                See Preview
              </button>
              <button className="bg-black text-white font-bold text-sm rounded-full py-2 px-4">
                Similar Items
              </button>
            </div>
          </div>
          ))}
        </div>
      )}

      <Footer/>
    </div>
  );
}

export default SearchPage;