import {lazy} from "react";
import {ResourcePath} from "../constants/ResourcePath";
import {Navigate} from "react-router-dom";

const NotFound = lazy(() => import("../pages/NotFoundPage.js"));
const Home = lazy(() => import("../pages/HomePage/HomePage.js"));
const Shop = lazy(() => import("../pages/ShopPage/ShopPage.js"));
const ContactUs = lazy(() => import("../pages/ContactUsPage/ContactUsPage.js"));
const Cart = lazy(() => import("../pages/CartPage/CartPage.js"));
const Product = lazy(() => import("../pages/ProductPage/ProductPage.js"));

let routes = {
    default: [
        {
            path: "/",
            element:<Navigate to={ResourcePath.HOME} />,
        },
        {
            path: "/e-commerce-react",
            element:<Navigate to={ResourcePath.HOME} />,
        },
        {
            path: ResourcePath.HOME,
            element: <Home />,
        },
        {
            path: ResourcePath.SHOP,
            element: <Shop />,
        },
        {
            path:ResourcePath.SHOP + "/:id",
            element:<Product />,
        },
        {
            path: ResourcePath.CONTACT_US,
            element: <ContactUs />,
        },
        {
            path: ResourcePath.CART,
            element: <Cart />,
        },
        {
            path:ResourcePath.NOT_FOUND,
            element:<NotFound />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]

};

export default routes;
