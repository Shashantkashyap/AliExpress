import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Product from '../../data/ProductData';
import { useDispatch, useSelector } from 'react-redux';
import { setProductId } from '../../feature/ProductSlice';
import { useNavigate } from 'react-router-dom';

function Similar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productId = useSelector((state) => state.product.productId);
  const productData = Product.find((product) => product.id === productId);
  const categoryProducts = Product.filter((product) => product.category === productData.category);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? 0 : currentIndex - 2;
    setCurrentIndex(newIndex < 0 ? 0 : newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === categoryProducts.length - 1 ? categoryProducts.length - 1 : currentIndex + 1;
    setCurrentIndex(newIndex >= categoryProducts.length ? categoryProducts.length - 1 : newIndex);
  };

  const handleClick = (id) => {
    dispatch(setProductId(id));
    navigate('/productDescription');
  };

  return (
    <div className="relative w-[95%]  mx-auto px-4 py-8">
      <div className="text-3xl font-semibold mb-6 ml-5">Explore more Suggestions:</div>

        <div className='flex gap-5 items-center'>
      <div>
      <MdOutlineKeyboardArrowLeft
          className={ `text-4xl text-gray-700 cursor-pointer hover:text-gray-900 z-10 ${currentIndex === 0 ? 'hidden' : 'block'}`}
          onClick={handlePrevClick}
        />
      </div>
      <div className="relative flex items-center overflow-hidden">
        
      <div className="flex transition-transform ease-in-out duration-300" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>

          {categoryProducts.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 flex flex-col cursor-pointer gap-2 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg p-4 bg-gradient-to-b from-red-50 to-white border border-gray-200 rounded-lg shadow-md "
              onClick={() => handleClick(item.id)}
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-lg font-bold mb-2">${item.price}</p>
              <p className="text-sm text-gray-500">Rating: {item.rating}</p>
            </div>
          ))}
        </div>
        
      </div>
      <div>
      <MdKeyboardArrowRight
          className={ `text-4xl text-gray-700 cursor-pointer hover:text-gray-900 z-10 ${currentIndex >= categoryProducts.length - 2 ? 'hidden' : 'block'}`}
          onClick={handleNextClick}
        />
      </div>
      </div>
    </div>
  );
}

export default Similar;