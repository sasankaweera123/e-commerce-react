import {createContext, useState, useEffect} from "react";
import axios from "axios";
import {ResourcePath} from "../constants/ResourcePath";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 21; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [products, setProduct] = useState([]);
    const [categories, setCategories] = useState([]); // [category1, category2, category3, ...
    const [favouriteProducts, setFavouriteProducts] = useState([]);

    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        return storedCartItems ? JSON.parse(storedCartItems) : getDefaultCart();
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        axios.get(ResourcePath.GET_ALL_PRODUCTS)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            }).catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        axios.get(ResourcePath.GET_FAVORITE_PRODUCTS)
            .then(res => {
                console.log(res.data);
                setFavouriteProducts(res.data);
            }).catch(err => {
            console.log(err);
        });
    },[]);

    useEffect(() => {
        axios.get(ResourcePath.GET_ALL_CATEGORIES)
            .then(res => {
                console.log(res.data);
                setCategories(res.data);
            }).catch(err => {
            console.log(err);
        });
    }, []);

    const addToCart = (id) => {
        setCartItems(prevCartItems => ({...prevCartItems, [id]: prevCartItems[id] + 1}));
    }

    const removeFromCart = (id) => {
        if (cartItems[id] > 0) {
            setCartItems(prevCartItems => ({...prevCartItems, [id]: prevCartItems[id] - 1}));
        }
    }

    const getCartItemsCount = () => {
        let count = 0;
        for (const id in cartItems) {
            count += cartItems[id];
        }
        return count;
    }

    const getCartTotal = () => {
        let total = 0;
        for (const id in cartItems) {
            if (cartItems[id] > 0) {
                const product = products.find(product => product.id === parseInt(id));
                if (product) {
                    total += product.price * cartItems[id];
                }
            }
        }
        return total.toFixed(2);
    }

    const contextValue = {products, categories, favouriteProducts, cartItems, addToCart, removeFromCart, getCartItemsCount, getCartTotal};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
