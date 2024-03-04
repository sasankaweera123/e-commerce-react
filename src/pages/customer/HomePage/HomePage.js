import React, {useContext} from "react";
import {ResourcePath} from "../../../constants/ResourcePath";
import "../../pages.css";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {ShopContext} from "../../../context/ShopContext";
import Product from "../../../components/Product/Product";

const HomePage = () => {

    const auth = useAuthUser();
    const {favouriteProducts} = useContext(ShopContext);


    return (
        <div>
            <div className="customer">
                <p>Hi {auth ? auth.email : "Guest"}</p>
                <img className="main-banner" src={ResourcePath.MAIN_BANNER} alt="home"/>

                <div className="favourite-products">
                    <h2>Favourite Products</h2>
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
        </div>
    );
}

export default HomePage;