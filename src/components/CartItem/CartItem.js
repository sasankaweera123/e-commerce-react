import React, {useContext} from "react";
import {ShopContext} from "../../context/ShopContext";
import "./CartItem.css";
import Button from "react-bootstrap/Button";
import {Table} from "react-bootstrap";

const CartItem = () => {

    const {products, cartItems, removeFromCart,getCartTotal} = useContext(ShopContext);
    const tax = 18;
    const shipping = 5;
    const getTotal = () => {
        let total = Number(getCartTotal());
        total = total + (total * tax / 100) + shipping;
        return total.toFixed(2);
    }

    return (
        <div className="container">
            <Table responsive>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {products.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return (
                                <tr key={e.id} className="cart-item">
                                    <td><img src={e.image} alt={e.title}/></td>
                                    <td>{e.title}</td>
                                    <td>{e.price}</td>
                                    <td>{cartItems[e.id]}</td>
                                    <td>{e.price * cartItems[e.id]}</td>
                                    <td><Button onClick={() => removeFromCart(e.id)}>Remove</Button></td>
                                </tr>
                            );
                        } else {
                            return null;
                        }
                    }
                )}
                </tbody>
            </Table>

            <Table className="cart-total">
                <thead>
                <tr>
                    <th>SubTotal</th>
                    <th>Tax</th>
                    <th>Shipping</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{getCartTotal()}</td>
                    <td>{tax}%</td>
                    <td>{shipping}</td>
                    <td>{getTotal()}</td>
                </tr>
                </tbody>
            </Table>
            <Button>Checkout</Button>
        </div>
    );
}

export default CartItem;