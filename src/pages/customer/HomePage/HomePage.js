import React, {useContext} from "react";
import {ResourcePath} from "../../../constants/ResourcePath";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {ShopContext} from "../../../context/ShopContext";
import Product from "../../../components/Product/Product";
import Card from "react-bootstrap/Card";

import "./HomePage.css";


const HomePage = () => {

    const auth = useAuthUser();
    const {favouriteProducts} = useContext(ShopContext);

    return (
        <div className="customer">
            <Card className="bg-dark text-white">
                <Card.Img src={ResourcePath.MAIN_BANNER} alt="Card image" className="main-banner"/>
                <Card.Img src={ResourcePath.MAIN_BANNER_PHONE} alt="Card image" className="main-banner-phone"/>
                <Card.ImgOverlay className="image-text">
                    <Card.Title className="user-title">Hi <span
                        className="user-name">{auth ? auth.email : "Guest"}</span></Card.Title>
                    <Card.Title className="welcome-text">Welcome to our shop</Card.Title>
                    <Card.Text>
                        We have a <span className="user-name"> wide range of products </span> for you to choose from.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <div className="favourite-products">
                <h2>Favourite <span className="user-name">Products</span></h2>
                <div className="products">
                    {favouriteProducts.map((product) => {
                        return <Product key={product.id} id={product.id} name={product.title} image={product.image}
                                        price={product.price}></Product>
                    })}
                </div>
            </div>
            <div className="admin">
            </div>
        </div>
    );
}

export default HomePage;