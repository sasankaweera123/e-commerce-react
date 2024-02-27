import axios from "axios";
import React, { useEffect, useState} from "react";
import { ResourcePath } from "../../constants/ResourcePath";
import Product from "../../components/Product/Product";
import "../pages.css";


function ShopPage() {

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get(ResourcePath.GET_ALL_PRODUCTS)
        .then(res=>{
            console.log(res.data);
            setProduct(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[]);

    return (
        <div>
            <h1>Shop</h1>
            <div className="products">
                {product.map((product,i) => {
                    return <Product key={i} id={product.id} name={product.title} image={product.image} price={product.price}></Product>
                })}
            </div>
        </div>
    );
}

export default ShopPage;