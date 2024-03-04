import {createContext, useCallback, useEffect, useMemo, useState} from "react";
import axios from "axios";
import {ResourcePath} from "../constants/ResourcePath";

export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {

    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [productOrders, setProductOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // Retrieve user data from local storage on component mount
        const userData = JSON.parse(localStorage.getItem("loggedInUser"));
        if (userData) {
            setLoggedInUser(userData);
            if (userData.role === 'admin') {
                setIsAdmin(true);
            }
        }
    }, []);

    useEffect(() => {
        axios.get(ResourcePath.GET_ALL_USERS)
            .then(res => {
                console.log(res.data);
                setUsers(res.data);
            }).catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        axios.get(ResourcePath.GET_ALL_ORDERS)
            .then(res => {
                console.log(res.data);
                setOrders(res.data);
            }).catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        axios.get(ResourcePath.GET_ALL_CARTS)
            .then(res => {
                console.log(res.data);
                setProductOrders(res.data);
            }).catch(err => {
            console.log(err);
        });
    }, []);

    const loggedUserDetails = useCallback((user) => {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
    }, []);

    const contextValue = useMemo(() => {
        return {users, orders, productOrders,loggedInUser,loggedUserDetails,isAdmin};
    }, [users, orders, productOrders,loggedInUser,loggedUserDetails,isAdmin]);


    return (
        <AdminContext.Provider value={contextValue}>
            {props.children}
        </AdminContext.Provider>
    );
}

export default AdminContextProvider;