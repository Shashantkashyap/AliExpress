import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import SendSignInLink from './pages/SendSignInLink';
import FinishSignUp from './pages/FinishSignUp';
import CategoryProduct from './pages/CategoryProduct';
import ProductDescriptionPage from './pages/ProductDescriptionPage';
import Cart from './pages/Cart';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<CategoryProduct/>} path='/categoryProduct'/>
      <Route path="/sendSignInLink" element={<SendSignInLink/>} />
        
        <Route element={<ProductDescriptionPage/>} path='/productDescription'/>
        <Route element={<Cart/>} path='/cartPage'/>
        <Route element={<SearchPage/>} path='/SearchPage'/>
    </Routes>
  )
}

export default App
