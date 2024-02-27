import React from "react";

const Product = (props) => {
    const {image, name, price} = props;
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    );
}

export default Product;