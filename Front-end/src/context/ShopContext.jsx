/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import {products} from "../assets/frontend_assets/assets"

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();


const ShopContextProvider = (props) => {

    const currency = '$';
    const delivey_fee = 10;
    const [search,setSearch] = useState(" ");
    const [showSearch,setShowSearch] = useState(false);

    const value = {
        products,currency,delivey_fee,showSearch,setShowSearch,search,setSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;