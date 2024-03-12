import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Product.css"
import {ResourcePath} from "../../constants/ResourcePath";

const Product = (props) => {
    const {image, name, price} = props;

    const handleProductClick = () => {
        window.location.href = ResourcePath.SHOP + `/${props.id}`;
    }

    return (
        <div className="card-box">
            <Card className="card-box-card" onClick={handleProductClick}>
                <div className="card-box-image-overlay">
                    <Card.Img className="card-box-image" variant="top" src={image}/>
                </div>
                <Card.Body className="card-detail-body">
                    <Card.Title>{name}</Card.Title>
                    <div className="price-button-container">
                        <Card.Text><span className="change-color">$</span>{price}</Card.Text>
                        <Button variant="primary">View Details</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Product;