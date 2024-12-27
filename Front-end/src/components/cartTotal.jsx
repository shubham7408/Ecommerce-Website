// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const cartTotal = () => {

    const {getCartAmount, currency, delivey_fee} = useContext(ShopContext);

  return (
    <div>
      
    </div>
  )
}

export default cartTotal