import {lazy} from "react";
import {ResourcePath} from "../constants/ResourcePath";
import {Navigate} from "react-router-dom";
import RequireAuth from "@auth-kit/react-router/RequireAuth";



const NotFound = lazy(() => import("../pages/NotFoundPage.js"));
const Home = lazy(() => import("../pages/customer/HomePage/HomePage.js"));
const Shop = lazy(() => import("../pages/customer/ShopPage/ShopPage.js"));
const ContactUs = lazy(() => import("../pages/customer/ContactUsPage/ContactUsPage.js"));
const Cart = lazy(() => import("../pages/customer/CartPage/CartPage.js"));
const Product = lazy(() => import("../pages/customer/ProductPage/ProductPage.js"));
const SignInUpPage = lazy(() => import("../pages/SignInUpPage/SignInUpPage.js"));
const Profile = lazy(() => import("../pages/customer/ProfilePage/ProfilePage.js"));

const AdminHome = lazy(() => import("../pages/admin/AdminHome/AdminHome.js"));
const AdminUsers = lazy(() => import("../pages/admin/AdminUsers/AdminUsers.js"));
const AdminProducts = lazy(() => import("../pages/admin/AdminProducts/AdminProducts.js"));


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
            path: "/e-commerce-react/admin",
            element:<Navigate to={ResourcePath.ADMIN_HOME} />,
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
            element: <RequireAuth fallbackPath={ResourcePath.SiGN_IN_UP}><Cart /></RequireAuth> ,
        },
        {
            path:ResourcePath.NOT_FOUND,
            element:<NotFound />,
        },
        {
            path:ResourcePath.SiGN_IN_UP,
            element:<SignInUpPage />,
        },
        {
            path: ResourcePath.PROFILE,
            element: <RequireAuth fallbackPath={ResourcePath.SiGN_IN_UP}><Profile /></RequireAuth>,
        },
        {
            path: ResourcePath.ADMIN_HOME,
            element: <RequireAuth fallbackPath={ResourcePath.SiGN_IN_UP}><AdminHome /></RequireAuth>,
        },
        {
            path: ResourcePath.ADMIN_USERS,
            element: <RequireAuth fallbackPath={ResourcePath.SiGN_IN_UP}><AdminUsers /></RequireAuth>,
        },
        {
            path: ResourcePath.ADMIN_PRODUCTS,
            element: <RequireAuth fallbackPath={ResourcePath.SiGN_IN_UP}><AdminProducts /></RequireAuth>,
        },
        {
            path: '*',
            element: <NotFound />,
        }
    ]

};

export default routes;
