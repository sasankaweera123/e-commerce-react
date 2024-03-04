import React, {useContext, useState} from "react";
import {AdminContext} from "../../../context/AdminContext";
import {Modal, ModalBody, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./OrderCard.css";
import {ResourcePath} from "../../../constants/ResourcePath";
import axios from "axios";

const OrderCard = () => {

    const {orders} = useContext(AdminContext);
    const [show, setShow] = useState(false);

    const [editProduct, setEditProduct] = useState({
        id: '',
        title: '',
        description: '',
        category: '',
        price: '',
        image: ''
    });

    const handelEdit = (id) => {
        setShow(true);
        const product = orders.find(e => e.id === id);
        setEditProduct({
            id: product.id,
            title: product.title,
            description: product.description,
            category: product.category,
            price: product.price,
            // image: product.image
        });
    }

    const handelRemove = (id) => {
        axios.delete(ResourcePath.DELETE_PRODUCT + id)
            .then(res => {
                console.log(res);
                alert('Product removed');
                document.getElementById(`cart-item-${id}`).remove();
            }).catch(err => {
            console.log(err);
        });
    }

    const handleChange = (e) => {
        setEditProduct({
            ...editProduct,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = {
            id: editProduct.id,
            title: editProduct.title,
            description: editProduct.description,
            category: editProduct.category,
            price: editProduct.price,
            image: editProduct.image
        }
        axios.put(ResourcePath.UPDATE_PRODUCT, updatedProduct)
            .then(res => {
                console.log(res);
                alert('Product updated');
                setShow(false);
            }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <Table responsive className="product-table container">
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((e) => {
                        return (
                            <tr key={e.id} className="cart-item" id={`cart-item-${e.id}`}>
                                <td><img src={e.image ? e.image : ResourcePath.PLACEHOLDER_IMAGE} alt={e.title}/></td>
                                <td>{e.title}</td>
                                <td>{e.description}</td>
                                <td>{e.category}</td>
                                <td>{e.price}</td>
                                <td>
                                    <div className="action-buttons">
                                        <Button onClick={() => handelEdit(e.id)} variant="info">Edit</Button>
                                        <Button variant="warning" onClick={() => handelRemove(e.id)}>Remove</Button>
                                    </div>

                                </td>
                            </tr>
                        );
                    }
                )}
                </tbody>
            </Table>
            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-field">
                                <label htmlFor="title">Title</label>
                                <input id="title" type="text" name="title" value={editProduct.title}
                                       onChange={handleChange}/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="description">Description</label>
                                <input id="description" type="text" name="description" value={editProduct.description}
                                       onChange={handleChange}/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="category">Category</label>
                                <input id="category" type="text" name="category" value={editProduct.category}
                                       onChange={handleChange}/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="price">Price</label>
                                <input id="price" type="text" name="price" value={editProduct.price}
                                       onChange={handleChange}/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="image">Image</label>
                                <input id="image" type="file" name="image" value={editProduct.image}
                                       onChange={handleChange}/>
                            </div>
                            <Button type="submit">Save</Button>
                            <Button onClick={() => setShow(false)}>Cancel</Button>
                        </form>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default OrderCard;