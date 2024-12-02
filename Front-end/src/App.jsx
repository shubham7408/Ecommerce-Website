// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Collection from "./pages/Collection"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import PlaceOrders from "./pages/PlaceOrder"
import Product from "./pages/Product"
import Error from "./pages/Error"
import Navbar from "./components/Navbar"
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/collections" element={<Collection/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/contact" element={<Contact/>}/> 
        <Route path = "/product/:productID" element={<Product/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/placeorders" element={<PlaceOrders/>}/>
        <Route path = "/orders" element={<Orders/>}/>
        <Route path = "/*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App