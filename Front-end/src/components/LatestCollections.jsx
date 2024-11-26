// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { ShopContext } from "../context/ShopContext"

const LatestCollections = () => {

    const { products } = useContext(ShopContext);

    console.log(products);

    
  return (
    <div>



    </div>
  )
}

export default LatestCollections