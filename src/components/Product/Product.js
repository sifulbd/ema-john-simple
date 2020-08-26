import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

function Product(props) {
  const { key, img, name, seller, price, stock } = props.product;
  return (
    <div id={key} className="product">
      <div className="productImg">
        <img src={img} alt={name} />
      </div>
      <div className="productContent">
        <h4>{name}</h4>
        <p>by: {seller}</p>
        <p>Price: ${price}</p>
        <p>
          <small>only {stock} left in a stock - order soon </small>
        </p>
        <button
          className="btn"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
