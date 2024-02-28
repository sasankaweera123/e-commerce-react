import React, {useContext} from "react";
import Product from "../../components/Product/Product";
import "../pages.css";
import {ShopContext} from "../../context/ShopContext";


function ShopPage() {

    const {products} = useContext(ShopContext);

    return (
        <div>
            <h1>Shop</h1>
            <div className="products">
                {products.map((product,i) => {
                    return <Product key={i} id={product.id} name={product.title} image={product.image} price={product.price}></Product>
                })}
            </div>
        </div>
    );
}

export default ShopPage;