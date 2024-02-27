import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i=0; i<21; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        return storedCartItems ? JSON.parse(storedCartItems) : getDefaultCart();
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (id) => {
        setCartItems(prevCartItems => ({...prevCartItems, [id]: prevCartItems[id] + 1}));
    }

    const removeFromCart = (id) => {
        if(cartItems[id] > 0){
            setCartItems(prevCartItems => ({...prevCartItems, [id]: prevCartItems[id] - 1}));
        }
    }

    const getCartItemsCount = () => {
        let count = 0;
        for(const id in cartItems){
            count += cartItems[id];
        }
        return count;
    }

    const contextValue ={cartItems, addToCart, removeFromCart, getCartItemsCount};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
