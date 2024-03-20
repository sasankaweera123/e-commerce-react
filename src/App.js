import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AuthProvider from "react-auth-kit";
import createStore from 'react-auth-kit/createStore';

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
                        <AppRouter/>
                    </div>
                    <Footer/>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
