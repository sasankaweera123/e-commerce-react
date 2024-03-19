import React, {useContext, useState} from "react";
import '../../../components/Admin.css';
import OrderCard from "../../../components/admin/OrderCard/OrderCard";
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import axios from "axios";
import {ResourcePath} from "../../../constants/ResourcePath";
import {AdminContext} from "../../../context/AdminContext";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import "../../pages.css";
import "../AdminPages.css";

const AdminHome = () => {

    const [newProductShow, setNewProductShow] = useState(false);

    const {isAdmin} = useContext(AdminContext);

    const [newProduct, setNewProduct] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        image: ''
    });

    console.log(isAdmin);

    const handleNewProductChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(ResourcePath.ADD_PRODUCT, newProduct)
            .then(response => {
                console.log(response);
                alert('Product added');
                setNewProduct({
                    title: '',
                    description: '',
                    category: '',
                    price: '',
                    image: ''
                });
                setNewProductShow(false);
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div className={!isAdmin ? "admin-pages" : ""}>
            <div className="container admin-user">
                <h3>Admin Dashboard</h3>
            </div>
            <div className="admin-user-details">
                <Button variant="primary" onClick={() => setNewProductShow(true)}
                        className="add-product"><span> <AddBoxOutlinedIcon></AddBoxOutlinedIcon> </span>Add
                    Product</Button>

                <div className="order-cards container pt-5">
                    <OrderCard/>
                </div>
            </div>
            <Modal show={newProductShow} onHide={() => setNewProductShow(false)}>
                <Modal.Header closeButton className="admin-user-modal">
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body className="admin-user-modal">
                    <form onSubmit={handleSubmit} className="admin-user-form">
                        <div className="form-field">
                            <label htmlFor="productTitle">Title</label>
                            <input id="productTitle" type="text" name="title" value={newProduct.title}
                                   onChange={handleNewProductChange}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="productDescription">Description</label>
                            <input id="productDescription" type="text" name="description" value={newProduct.description}
                                   onChange={handleNewProductChange}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="productCategory">Category</label>
                            <input id="productCategory" type="text" name="category" value={newProduct.category}
                                   onChange={handleNewProductChange}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="productPrice">Price</label>
                            <input id="productPrice" type="text" name="price" value={newProduct.price}
                                   onChange={handleNewProductChange}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="productImage">Image</label>
                            <input id="productImage" type="file" name="image" value={newProduct.image}
                                   onChange={handleNewProductChange}/>
                        </div>
                        <div className="form-field button-group">
                            <Button variant="primary" type="submit">Add Product</Button>
                            <Button variant="danger" onClick={() => setNewProductShow(false)}>Close</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AdminHome;