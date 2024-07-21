import React from 'react'
import Product from '../../data/ProductData'

function Banner() {
  // Get random indices within the bounds of the Product array
  const randomIndices = Array.from({ length: 6 }, () => Math.floor(Math.random() * Product.length));

  return (
    <div className='bg-[#f86a1d] flex flex-col md:flex-row pt-4 justify-center items-center gap-5'>
      <div>
        <img src="https://ae01.alicdn.com/kf/Se5fda730b64042b5b9ab11bb24a91ba8z.gif" alt="" className='h-80 w-96' />
      </div>

      <div className='w-full md:w-[50%] flex flex-col md:flex-row items-center gap-3'>
        <div className='w-full md:w-[30%] flex flex-col bg-[#edd4e6] p-2 items-center rounded-3xl gap-4 shadow-md'>
          <p className='text-[20px] font-bold'>Seasonal inspo</p>
          <div className='flex gap-3 items-center cursor-pointer hover:scale-[1.05] transition-transform delay-500'>
            <img src={Product[randomIndices[0]].images[0]} alt="" className='object-fill w-24 h-24 rounded-2xl' />
            <div className='text-[20px] font-bold text-red-500'>$.{Product[randomIndices[0]].price}</div>
          </div>
          <div className='flex gap-3 items-center cursor-pointer hover:scale-[1.05] transition-transform delay-500'>
            <img src={Product[randomIndices[1]].images[0]} alt="" className='object-fill w-24 h-24 rounded-2xl' />
            <div className='text-[20px] font-bold text-red-500'>$.{Product[randomIndices[1]].price}</div>
          </div>
        </div>

        <div className='w-full md:w-[30%] flex flex-col bg-[#bde1f5] p-2 items-center rounded-3xl gap-4 shadow-md'>
          <p className='text-[20px] font-bold'>Fashionable Season</p>
          <div className='flex gap-3 items-center cursor-pointer hover:scale-[1.05] transition-transform delay-500'>
            <img src={Product[randomIndices[2]].images[0]} alt="" className='object-fill w-24 h-24 rounded-2xl' />
            <div className='text-[20px] font-bold text-red-500'>$.{Product[randomIndices[2]].price}</div>
          </div>
          <div className='flex gap-3 items-center cursor-pointer hover:scale-[1.05] transition-transform delay-500'>
            <img src={Product[randomIndices[3]].images[0]} alt="" className='object-fill w-24 h-24 rounded-2xl' />
            <div className='text-[20px] font-bold text-red-500'>$.{Product[randomIndices[3]].price}</div>
          </div>
        </div>

        <div className='w-full md:w-[30%] flex flex-col bg-[#f3eec9] p-2 items-center rounded-3xl gap-4 shadow-md'>
          <p className='text-[20px] font-bold'>Irresistible Offers</p>
          <div className='flex gap-3 items-center cursor-pointer hover:scale-[1.05] transition-transform delay-500'>
            <img src={Product[randomIndices[4]].images[0]} alt="" className='object-fill w-24 h-24 rounded-2xl' />
            <div className='text-[20px] font-bold text-red-500'>$.{Product[randomIndices[4]].price}</div>
          </div>
          <div className='flex gap-3 items-center cursor-pointer hover:scale-[1.05] transition-transform delay-500'>
            <img src={Product[randomIndices[5]].images[0]} alt="" className='object-fill w-24 h-24 rounded-2xl' />
            <div className='text-[20px] font-bold text-red-500'>$.{Product[randomIndices[5]].price}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
