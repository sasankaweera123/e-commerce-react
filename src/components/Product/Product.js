import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Product.css"
import {ResourcePath} from "../../constants/ResourcePath";

const Product = (props) => {
    const {image, name, price} = props;

    const handleProductClick = () => {
        window.location.href = ResourcePath.SHOP+ `/${props.id}`;
    }

    return (
        <div className="card-box">
            <Card className="card-box-card" onClick={handleProductClick}>
                <Card.Img className="card-box-image" variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Product;