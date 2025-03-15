import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)

const Storecontextprovider =(props) =>{

    const [cartItems,setCartItems]=useState({});

    const AddToCart =(itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalAmount = () => {
        let TotalAmount = 0;
    
        for (let itemId of Object.keys(cartItems)) { 
            if (cartItems[itemId] > 0) {
                let itemInfo = food_list.find((product) => product._id == itemId); // Using '==' to match string/number
                if (itemInfo) { 
                    TotalAmount += itemInfo.price * cartItems[itemId];
                }
            }
        }
        return TotalAmount;
    };
    

    const contextvalue={
        food_list,
        cartItems,
        AddToCart,
        setCartItems,
        removeFromCart,
        getTotalAmount,
    }

    return(
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default Storecontextprovider