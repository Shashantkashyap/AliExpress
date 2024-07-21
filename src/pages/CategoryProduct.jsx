import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../data/ProductData";
import { setProductId } from "../feature/ProductSlice";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";

function CategoryProduct() {
  const category = useSelector((state) => state.category.category);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productFunction = (id) => {
    dispatch(setProductId(id));
    navigate("/productDescription");
  };

  // filter product of particular category

  const categoryData = Product.filter(
    (product) => product.category === category
  );

  // Pagination logic

  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = categoryData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(categoryData.length / itemsPerPage);

  return (
    <div>
      <div className="bg-black w-full">
        <Navbar />
      </div>

      <div className="container mx-auto p-4">
        <div className="my-5">
          <p className="text-[30px] font-bold">Explore the {category} :</p>
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
              onClick={() => productFunction(product.id)}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <p className="font-bold text-lg">{product.title}</p>

              <div
                className={`flex justify-between mt-4 transition-opacity duration-200 ${
                  hoveredCard === product.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="font-bold text-[14px] text-gray-600">
                  {product.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
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
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default CategoryProduct;
