import React, {useContext, useState} from "react";
import Product from "../../../components/Product/Product";
import "../../pages.css";
import {ShopContext} from "../../../context/ShopContext";

const ShopPage = () =>{
    const {products, categories} = useContext(ShopContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    let filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

    if (selectedCategory) {
        filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (<div>
            <h1>Shop</h1>
            <div className="search-pannel">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All</option>
                    {categories.map((category, i) => {
                        return (<option key={i} value={category}>
                                {category}
                            </option>);
                    })}
                </select>
            </div>
            <div className="products">
                {filteredProducts.map((product, i) => {
                    return (<Product
                            key={i}
                            id={product.id}
                            name={product.title}
                            image={product.image}
                            price={product.price}
                        ></Product>);
                })}
            </div>
        </div>);
}

export default ShopPage;