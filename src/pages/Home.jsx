import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/common/Navbar';
import HomeBox from '../components/homeComponent/HomeBox';
import RunningImages from '../components/homeComponent/RunningImages';
import MoretoLove from '../components/homeComponent/MoretoLove';
import Footer from '../components/common/Footer';
import Banner from '../components/homeComponent/Banner';
import CartOverlay from '../components/homeComponent/CartOverlay';

function Home() {
  const dispatch = useDispatch();
  const overlay = useSelector((state)=> state.overlay.overlay)

  

  

  return (
    <div>
      {
        overlay && (
          <div className='absolute top-[20%]'>
            <CartOverlay/>
          </div>
        )
      }
     
      <div className='bg-black'>
        <Navbar />
      </div>
      <div>
        <Banner />
      </div>
      <div className='mt-3'>
        <HomeBox />
      </div>
      <div className='mt-4 w-[85%] mx-auto'>
        <RunningImages />
      </div>
      <div className='mt-4 w-[85%] mx-auto'>
        <MoretoLove  />
      </div>
      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default Home;
