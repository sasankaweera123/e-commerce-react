import React from "react";
import CartItem from "../../../components/CartItem/CartItem";
import "./CartPage.css";

function CartPage() {
    return (
        <div>
            <h1>Cart</h1>
            <CartItem></CartItem>
        </div>
    );
}

export default CartPage;