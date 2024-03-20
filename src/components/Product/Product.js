import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Product.css"
import {ResourcePath} from "../../constants/ResourcePath";
import {Modal} from "react-bootstrap";
import ProductPage from "../../pages/customer/ProductPage/ProductPage";

const Product = (props) => {
    const {image, name, price} = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="product">
            <div className="card-box">
                <Card className="card-box-card" onClick={handleShow}>
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton/>
                <div className="product-modal container">
                    <ProductPage id={props.id}/>
                </div>
            </Modal>
        </div>
    );
}

export default Product;