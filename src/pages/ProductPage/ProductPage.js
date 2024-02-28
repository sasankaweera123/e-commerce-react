import React, {useContext, useEffect, useState} from "react";
import {ShopContext} from "../../context/ShopContext";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {ResourcePath} from "../../constants/ResourcePath";
import {useParams} from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
    const {addToCart} = useContext(ShopContext);
    const productId = useParams().id;
    const [product , setProduct] = useState({});

    const handleAddToCart = () =>{
        addToCart(productId)
    }

    useEffect(() => {
        axios.get(ResourcePath.GET_PRODUCT_BY_ID + productId)
            .then(res=>{
                console.log(res.data);
                setProduct(res.data);
            }).catch(err=>{
            console.log(err);
        });
    }, [productId]);

    return (
        <div className="view-products">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title}/>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Button onClick={handleAddToCart} variant="primary" >Add to Cart</Button>
        </div>
    );
}

export default ProductPage;