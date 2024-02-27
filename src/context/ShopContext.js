import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDrfultCart = () => {
    let cart = {}

    for(let index=0; index<10; index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getDrfultCart());
    const contextValue ={cartItems}
    
    console.log(cartItems);

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
