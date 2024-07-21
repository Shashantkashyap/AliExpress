import React from 'react'
import CartPage from '../components/common/CartPage'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'

function Cart() {
  return (
    <div>
        
      <div className="bg-black">
      <Navbar />
      </div>

      <div>
        <CartPage/>
      </div>

      <div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Cart
