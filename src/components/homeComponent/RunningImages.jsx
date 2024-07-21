import React, { useEffect, useState } from 'react';
import './RunningImages.css'; 
import Product from '../../data/ProductData';
import { useDispatch } from "react-redux";
import {setCategory} from "../../feature/CategorySlice"
import { useNavigate } from 'react-router-dom';

function RunningImages() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const  CategoryFunction=(category)=>{
    
    dispatch(setCategory(category));

    navigate("/categoryProduct")
  }
  
  
  return (
    <div>
    <div className='text-[30px] font-semibold my-5'>Shop by categories :</div>
    <div className='carousel flex flex-col gap-2'>
        
      <div className='carousel-track'>
        {
          Product.map((deal, index) => {
            if (deal !== null && deal.images) {
              return (
                <img key={index} src={deal.images[0]} alt="Deal" className='carousel-image cursor-pointer' onClick={()=> CategoryFunction(deal.category)}/>
              );
            } else {
             
              return null;
            }
          })
        }
      </div>
      <div className='carousel-track2'>
        {
          Product.map((deal, index) => {
            if (deal !== null && deal.images) {
              return (
                
                  <img key={index} src={deal.images[1]} alt="Deal" className='carousel-image cursor-pointer' onClick={()=> CategoryFunction(deal.category)}/>
                  
                
              );
            } else {
              return null;
            }
          })
        }
      </div>
    </div>

    </div>
  );
}

export default RunningImages;
