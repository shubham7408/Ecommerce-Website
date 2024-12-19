import { useContext, useEffect, useState } from "react"
import {ShopContext} from "../context/ShopContext";
const Cart = () => {

  const {products,currency,cartitems}= useContext(ShopContext);

  const [cartData,setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for(const items in cartitems){
      for(const item in cartitems[items]){
        if(cartitems[items][item] > 0){
          tempData.push({
            _id: items,
            size:item,
            quantity:cartitems[items][item]
          })
        }
      }
    }
    console.log(tempData);

  },[cartitems]);

  return (
    <div>Cart</div>
  )
}

export default Cart