import React, { useState } from "react";
import Product from "../../data/ProductData";
import { useDispatch } from "react-redux";
import { setProductId } from "../../feature/ProductSlice";
import { useNavigate } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import { setOverlay } from "../../feature/OverlaySlice";
import { setCategory } from "../../feature/CategorySlice";

function MoretoLove() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productFunction = (id) => {
    dispatch(setProductId(id));
    navigate("/productDescription");
  };

  const cartOverlayFunction = (id)=>{
    dispatch(setProductId(id));
    dispatch(setOverlay(true))
  }

  const handleSimilarItems = (category)=>{
    dispatch(setCategory(category));
    navigate("/categoryProduct")
  }

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = Product.slice(startIndex, endIndex);
  const totalPages = Math.ceil(Product.length / itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <div className="my-5">
        <p className="text-[30px] font-bold">More to Love :</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className={`bg-gray-200 p-4 rounded-lg shadow-md transform transition-transform duration-300 ${
              hoveredCard === product.id ? "scale-105 shadow-lg" : ""
            }`}
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
            //onClick={() => productFunction(product.id)} // Corrected
          >
            <div className="absolute top-[40%] left-[80%] p-2 rounded-full bg-white cursor-pointer hover:bg-gray-200 hover:scale-[1.1]" onClick={()=>cartOverlayFunction(product.id) }>
              <PiShoppingCartBold fontSize={30} color="" />
            </div>

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
              <button
                className="bg-black text-white font-bold text-sm rounded-full py-2 px-4"
                onClick={() => productFunction(product.id)} 
              >
                See Preview
              </button>
              <button className="bg-black text-white font-bold text-sm rounded-full py-2 px-4" onClick={()=> handleSimilarItems(product.category)}>
                Similar Items
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          className="mx-2 bg-gray-300 text-gray-800 py-2 px-4 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="mx-2 bg-gray-300 text-gray-800 py-2 px-4 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MoretoLove;
