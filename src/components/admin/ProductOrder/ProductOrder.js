import React, {useContext, useState} from "react";
import {ShopContext} from "../../../context/ShopContext";
import {AdminContext} from "../../../context/AdminContext";
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {ResourcePath} from "../../../constants/ResourcePath";

const AdminProducts = () => {
    const {products} = useContext(ShopContext);
    const {users, productOrders} = useContext(AdminContext);

    const orderStatus = ["Order Placed", "Order Confirmed", "Order Shipped", "Order Delivered", "Order Cancelled"];

    const [orderEditProduct, setOrderEditProduct] = useState({
        productId: '',
        userId: '',
        status: ''
    });

    const formatOrderDate = (date) => {
        return new Date(date).toLocaleDateString();
    }


    const handleChange = (e) => {
        setOrderEditProduct({
            ...orderEditProduct,
            status: e.target.value
        });
    }

    const handleEdit = (id) => {
        axios.put(ResourcePath.UPDATE_PRODUCT, orderEditProduct)
            .then(response => {
                console.log(response);
                alert('Order status updated');
            })
            .catch(error => {
                console.log(error);
            });
    }

    const calculateTotalPrice = (order) => {
        let totalPrice = 0;
        order.products.forEach((product) => {
            const productInfo = products.find((p) => p.id === product.productId);
            if (productInfo) {
                totalPrice += product.quantity * productInfo.price;
            }
        });
        return totalPrice;
    };



    return (
        <div className="container">
            <div className="product-orders">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                        <th>Total Price</th>
                        <th>Order Date</th>
                        <th>Order Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productOrders.map((e) => {
                        return (
                            <tr key={e.id}>
                                <td>{users.find(user => user.id === e.userId).name}</td>
                                <td>
                                    <ul>
                                        {e.products.map((product) => {
                                            const productInfo = products.find(
                                                (p) => p.id === product.productId
                                            );
                                            return (
                                                <li key={product.productId}>
                                                    {productInfo ? productInfo.title : "Unknown Product"}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {e.products.map((product) => (
                                            <li key={product.productId}>{product.quantity}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>${calculateTotalPrice(e)}</td>
                                <td>{formatOrderDate(e.date)}</td>
                                <td>
                                    <select onChange={handleChange}>
                                        {orderStatus.map((status) => {
                                            return (
                                                <option key={status} value={status}>{status}</option>
                                            );
                                        })}
                                    </select>
                                    <Button onClick={() => handleEdit(e.id)}>Update</Button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default AdminProducts;