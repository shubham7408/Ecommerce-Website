/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import {products} from "../assets/frontend_assets/assets"
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();


const ShopContextProvider = (props) => {

    const currency = '$';
    const delivey_fee = 10;
    const [search,setSearch] = useState(" ");
    const [showSearch,setShowSearch] = useState(false);
    const [cartitems,setCartItems] = useState({});

    async function addToCart (itemId,size){

        if(!size){
            toast.error("Select Product Size");
            return;
        }

        const cartData = structuredClone(cartitems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
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
        toast.success("Product added to cart!");
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartitems){
            for(const item in cartitems[items]){
                try {
                    if (cartitems[items][item] > 0) {
                        totalCount += cartitems[items][item];
                    }
                } catch (error) {
                    console.error('Error counting cart items:', error);
                }
            }
        }
        return totalCount;
    }

    async function updateQuantity(itemId, size, quantity) {
        try {
            const cartData = structuredClone(cartitems);
            if (cartData[itemId] && cartData[itemId][size] !== undefined) {
                cartData[itemId][size] = quantity;
                setCartItems(cartData);
                toast.success("Cart updated successfully!");
            } else {
                toast.error("Item not found in cart.");
            }
        } catch (error) {
            console.log('Error updating cart quantity:', error);
        }
    }

    async function getCartAmount (){
        const totalAmount = 0;
        for(const items in cartitems){
            const iteminfo = products.find((product) => product.id === items);
            for(const item in cartitems[items]){
                try {
                    if(cartitems[items][item] > 0){
                        // eslint-disable-next-line no-const-assign
                        totalAmount += iteminfo.price * cartitems[items][item];
                    }
                } catch (error) {
                    console.log('Unable to calculate:',error);
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products,currency,delivey_fee,
        showSearch,setShowSearch,search,setSearch,
        cartitems,addToCart,
        getCartCount,updateQuantity,
        getCartAmount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;