/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import {products} from "../assets/frontend_assets/assets"

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();


const ShopContextProvider = (props) => {

    const currency = '$';
    const delivey_fee = 10;
    const [search,setSearch] = useState(" ");
    const [showSearch,setShowSearch] = useState(false);
    const [cartitems,setCartItems] = useState({});

    async function addToCart (itemId,size){
        const cartData = structuredClone(cartitems);
        if(cartData[itemId]){
            if(cartData[itemId[size]]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    useEffect(() => {
        console.log(cartitems)
    },[cartitems])

    const value = {
        products,currency,delivey_fee,showSearch,setShowSearch,search,setSearch,cartitems,addToCart
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;