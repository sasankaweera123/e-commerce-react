import React, {useContext} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Product.css"
import {ShopContext} from "../../context/ShopContext";

const Product = (props) => {
    const {image, name, price} = props;

    const {addToCart} = useContext(ShopContext);

    const handleAddToCart = () =>{
        addToCart(props.id)
    }

    return (
        <div className="card-box">
            <Card className="card-box-card">
                <Card.Img className="card-box-image" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Button onClick={handleAddToCart} variant="primary" >Add to Cart</Button>
                </Card.Body>
            </Card> 
        </div>
    );
}

export default Product;