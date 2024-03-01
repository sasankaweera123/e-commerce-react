import React, {useContext, useState} from "react";
import "./AdminHome.css";
import '../../../components/Admin.css';
import OrderCard from "../../../components/admin/OrderCard/OrderCard";
import Button from "react-bootstrap/Button";
import {ShopContext} from "../../../context/ShopContext";
import {Modal} from "react-bootstrap";
import axios from "axios";
import {ResourcePath} from "../../../constants/ResourcePath";
import {AdminContext} from "../../../context/AdminContext";
import "../../pages.css";

const AdminHome = () => {

    const {products} = useContext(ShopContext);
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
        <div className={!isAdmin?"admin-pages":""}>
            <h1>Admin Home</h1>
            <Button variant="primary" onClick={() => setNewProductShow(true)}>Add Product</Button>
            <div className="product-list container">
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className="product-admin">
                                <img src={product.image} alt={product.title}/>
                                <p>{product.title}</p>
                            </div>
                        );
                    })
                }
            </div>
            <Modal show={newProductShow} onHide={() => setNewProductShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label htmlFor="productTitle">Title</label>
                            <input id="productTitle" type="text" name="title" value={newProduct.title} onChange={handleNewProductChange}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="productDescription">Description</label>
                            <input id="productDescription" type="text" name="description" value={newProduct.description} onChange={handleNewProductChange}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="productCategory">Category</label>
                            <input id="productCategory" type="text" name="category" value={newProduct.category} onChange={handleNewProductChange}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="productPrice">Price</label>
                            <input id="productPrice" type="text" name="price" value={newProduct.price} onChange={handleNewProductChange}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="productImage">Image</label>
                            <input id="productImage" type="file" name="image" value={newProduct.image} onChange={handleNewProductChange}/>
                        </div>
                        <Button variant="primary" type="submit">Add Product</Button>
                        <Button variant="secondary" onClick={() => setNewProductShow(false)}>Close</Button>
                    </form>
                </Modal.Body>
            </Modal>
            <h1>Orders</h1>
            <OrderCard/>
        </div>
    );
}

export default AdminHome;