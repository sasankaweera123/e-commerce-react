import React, {useContext} from "react";
import ProductOrder from "../../../components/admin/ProductOrder/ProductOrder";
import {AdminContext} from "../../../context/AdminContext";
import "../AdminPages.css";

const AdminProducts = () => {

    const {isAdmin} = useContext(AdminContext);

    return (
        <div className={!isAdmin ? "admin-pages" : ""}>
            <div className="container admin-user">
                <h1>Admin Products</h1>
            </div>
            <ProductOrder/>
        </div>
    );
}

export default AdminProducts;