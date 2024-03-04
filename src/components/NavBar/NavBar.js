import React, {useContext} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './NavBar.css';
import {ResourcePath} from "../../constants/ResourcePath";
import {ShopContext} from "../../context/ShopContext";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import {AdminContext} from "../../context/AdminContext";

function NavBar() {

    const {getCartItemsCount} = useContext(ShopContext);
    const auth = useAuthUser();
    const signOut = useSignOut();

    const {loggedInUser} = useContext(AdminContext);

    const handleSignIn = () => {
        if (auth) {
            signOut();
        }
        window.location.href = ResourcePath.SiGN_IN_UP;
    }

    const isAdmin = () => {
        return loggedInUser.role === 'admin';
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect fixed="top">
            <Container>
                <Navbar.Brand href={!isAdmin() ? ResourcePath.HOME:ResourcePath.ADMIN_HOME}>e-commerce</Navbar.Brand>
                <Nav className="me-auto nav-items">
                    <Nav.Link href={!isAdmin() ? ResourcePath.HOME:ResourcePath.ADMIN_HOME}>Home</Nav.Link>
                    <Nav.Link href={!isAdmin()?ResourcePath.SHOP:ResourcePath.ADMIN_PRODUCTS}>Shop</Nav.Link>
                    <Nav.Link href={!isAdmin()?ResourcePath.CONTACT_US:ResourcePath.ADMIN_USERS}>Contact Us</Nav.Link>
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