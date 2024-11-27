// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from "../context/ShopContext"
import Title from "./Title"
import ProductItem from './ProductItem';

const LatestCollections = () => {

    const { products } = useContext(ShopContext);
    const [LatestProducts,SetLatestProducts] = useState([]);

    useEffect(() => {
      SetLatestProducts(products.slice(0,10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
  <div className="my-10">
    <div className= "text-center py-8 text-3xl">
      <Title text1={"LATEST"} text2={"COLLECTION"}/>
      <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed neque, aliquid obcaecati provident veritatis tempore expedita quos sapiente ea nesciunt.
      </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {
        LatestProducts.map((item,index) =>(
          <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
        ))
      }
    </div>
  </div>
  )
}

export default LatestCollections