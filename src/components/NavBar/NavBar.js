import React, {useContext} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './NavBar.css';
import {ResourcePath} from "../../constants/ResourcePath";
import {ShopContext} from "../../context/ShopContext";

function NavBar() {

    const {getCartItemsCount} = useContext(ShopContext);

    return (
        <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect fixed="top">
            <Container>
                <Navbar.Brand href={ResourcePath.HOME}>e-commerce</Navbar.Brand>
                <Nav className="me-auto nav-items">
                    <Nav.Link href={ResourcePath.HOME}>Home</Nav.Link>
                    <Nav.Link href={ResourcePath.SHOP}>Shop</Nav.Link>
                    <Nav.Link href={ResourcePath.CONTACT_US}>Contact Us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href={ResourcePath.CART}><span
                        className="material-symbols-outlined">shopping_cart</span></Nav.Link>
                        <p className="cart-count">{getCartItemsCount()}</p>
                </Nav>
                <button className="btn btn-primary">Sign In</button>
            </Container>
        </Navbar>);
}

export default NavBar;