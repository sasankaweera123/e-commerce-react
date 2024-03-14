import React, {useContext} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './NavBar.css';
import {ResourcePath} from "../../constants/ResourcePath";
import {ShopContext} from "../../context/ShopContext";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import {AdminContext} from "../../context/AdminContext";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
        <Navbar collapseOnSelect bg="dark" data-bs-theme="dark" fixed="top">
            <Container>
                <Navbar.Brand href={!isAdmin() ? ResourcePath.HOME : ResourcePath.ADMIN_HOME}>e-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-items">
                        <Nav.Link href={!isAdmin() ? ResourcePath.HOME : ResourcePath.ADMIN_HOME}>Home</Nav.Link>
                        <Nav.Link href={!isAdmin() ? ResourcePath.SHOP : ResourcePath.ADMIN_PRODUCTS}>Shop</Nav.Link>
                        <Nav.Link href={!isAdmin() ? ResourcePath.CONTACT_US : ResourcePath.ADMIN_USERS}>Contact
                            Us</Nav.Link>
                    </Nav>

                    <div className="functioning-system">
                        {!isAdmin() ? <div className="chart-system">
                            <Nav.Link href={ResourcePath.CART}>
                                <ShoppingCartOutlinedIcon className="cart-icon"/>
                            </Nav.Link>
                            <p className="cart-count">{getCartItemsCount()}</p>
                        </div> : null}
                        <button className={`btn ${auth ? "btn-danger" : "btn-primary"}`}
                                onClick={handleSignIn}>{auth ? "Sign Out" : "Sign In"}</button>
                        <div className="user-profile">
                            <Nav.Link href={ResourcePath.PROFILE}>
                                <p>{auth ? auth.email : "Guest"}</p>
                            </Nav.Link>
                        </div>
                    </div>
                </Navbar.Collapse>


            </Container>
        </Navbar>);
}

export default NavBar;