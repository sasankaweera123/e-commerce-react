import React, {useContext, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './NavBar.css';
import {ResourcePath} from "../../constants/ResourcePath";
import {ShopContext} from "../../context/ShopContext";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";

function NavBar() {

    const {getCartItemsCount} = useContext(ShopContext);
    const auth = useAuthUser();
    const signOut = useSignOut();

    const handleSignIn = () => {
        if (auth) {
            signOut();
        }
        window.location.href = ResourcePath.SiGN_IN_UP;
    }

    console.log("auth", auth);

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
                    <button className={`btn ${auth ? "btn-danger" : "btn-primary"}`}
                            onClick={handleSignIn}>{auth ? "Sign Out" : "Sign In"}</button>
                    <Nav.Link href={ResourcePath.PROFILE}>
                        <p>{auth ? auth.email : "Guest"}</p>
                    </Nav.Link>
                </Nav>


            </Container>
        </Navbar>);
}

export default NavBar;