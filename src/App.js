import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import AppRouter from "./router/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AuthProvider from "react-auth-kit";
import createStore from 'react-auth-kit/createStore';
import HomePage from "./pages/customer/HomePage/HomePage";
import {ResourcePath} from "./constants/ResourcePath";
import AdminHome from "./pages/admin/AdminHome/AdminHome";
import ShopPage from "./pages/customer/ShopPage/ShopPage";
import ContactUsPage from "./pages/customer/ContactUsPage/ContactUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import SignInUpPage from "./pages/SignInUpPage/SignInUpPage";
import CartPage from "./pages/customer/CartPage/CartPage";
import ProfilePage from "./pages/customer/ProfilePage/ProfilePage";
import AdminUsers from "./pages/admin/AdminUsers/AdminUsers";
import AdminProducts from "./pages/admin/AdminProducts/AdminProducts";

function App() {
    const store = createStore({
        authName: '_auth',
        authType: 'cookie',
        cookieDomain: window.location.hostname,
        cookieSecure: window.location.protocol === 'https:'
    })


    return (
        <div className="App">
            <AuthProvider store={store}>
                <BrowserRouter>
                    <NavBar/>
                    <div className="pages">
                        {/*<AppRouter/>*/}
                        <Routes>
                            <Route path="/e-commerce-react/" element={<HomePage/>}/>
                            <Route path={ResourcePath.HOME} element={<HomePage/>}/>
                            <Route path={ResourcePath.SHOP} element={<ShopPage/>}/>
                            <Route path={ResourcePath.CONTACT_US} element={<ContactUsPage/>}/>
                            <Route path={ResourcePath.SiGN_IN_UP} element={<SignInUpPage/>}/>
                            <Route path={ResourcePath.NOT_FOUND} element={<NotFoundPage/>}/>
                            <Route path="*" element={<NotFoundPage/>}/>

                            <Route path={ResourcePath.CART} element={<RequireAuth fallbackPath={ResourcePath.SiGN_IN_UP}><CartPage/></RequireAuth>}/>
                            <Route path={ResourcePath.PROFILE} element={<RequireAuth fallbackPath={ResourcePath.SiGN_IN_UP}><ProfilePage/></RequireAuth>}/>
                            <Route path={ResourcePath.ADMIN_HOME} element={<RequireAuth fallbackPath={ResourcePath.SiGN_IN_UP}><AdminHome/></RequireAuth>}/>
                            <Route path={ResourcePath.ADMIN_USERS} element={<RequireAuth fallbackPath={ResourcePath.SiGN_IN_UP}><AdminUsers/></RequireAuth>}/>
                            <Route path={ResourcePath.ADMIN_PRODUCTS} element={<RequireAuth fallbackPath={ResourcePath.SiGN_IN_UP}><AdminProducts/></RequireAuth>}/>
                        </Routes>
                    </div>
                    <Footer/>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
