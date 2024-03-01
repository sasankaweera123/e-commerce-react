import React, {useContext} from "react";
import ProductOrder from "../../../components/admin/ProductOrder/ProductOrder";
import {AdminContext} from "../../../context/AdminContext";
import "../../pages.css";
const AdminProducts = () => {

    const {isAdmin} = useContext(AdminContext);

    return (
        <div className={!isAdmin?"admin-pages":""}>
            <h1>Admin Products</h1>
            <ProductOrder/>
        </div>
    );
}

export default AdminProducts;