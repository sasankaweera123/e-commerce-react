import React, {useContext, useEffect, useState} from "react";
import {ShopContext} from "../../../context/ShopContext";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {ResourcePath} from "../../../constants/ResourcePath";
import "./ProductPage.css";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const ProductPage = (props) => {
    const {addToCart} = useContext(ShopContext);
    const productId = props.id;
    const [product, setProduct] = useState({});

    const handleAddToCart = () => {
        addToCart(productId);
        alert('Product added to cart');
    }

    useEffect(() => {
        axios.get(ResourcePath.GET_PRODUCT_BY_ID + productId)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            }).catch(err => {
            console.log(err);
        });
    }, [productId]);

    return (
        <div className="view-products container">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title}/>
            <p>{product.description}</p>
            <div className="product-footer">
                <h5><span>$ </span>{product.price}</h5>
                <Button onClick={handleAddToCart} variant="primary"><span className="add-to-cart-icon"><AddShoppingCartOutlinedIcon></AddShoppingCartOutlinedIcon></span> Add to Cart</Button>
            </div>
        </div>
    );
}

export default ProductPage;