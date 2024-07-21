import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOverlay } from '../../feature/OverlaySlice';
import ProductDescription from '../homeComponent/ProductDescription';
import { MdClose } from "react-icons/md";

const CartOverlay = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.overlay.overlay);

  const handleClose = () => {
    dispatch(setOverlay(false));
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 z-30 rounded-lg ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className='bg-white p-4 rounded shadow-lg relative max-w-5xl w-full h-[90vh] overflow-auto'>
        <button className='absolute top-4 right-4 text-gray-600 hover:text-gray-800 border-[2px] p-1 bg-gray-200 rounded-lg' onClick={handleClose}>
          <MdClose fontSize={30} className='p-1 rounded-full bg-red-300 border-[2px] hover:bg-red-500'/>
        </button>
        <ProductDescription />
      </div>
    </div>
  );
};

export default CartOverlay;
