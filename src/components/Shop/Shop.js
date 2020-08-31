import React, { useState } from "react";
import fakeData from "../../fakeData/index";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

function Shop() {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  function handleAddProduct(product) {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return ( 
    <div>
      <div className="shop-container">
        <div className="product-container">
          {products.map((pd) => (
            <Product
              showAddtoCArt={true}
              handleAddProduct={handleAddProduct}
              product={pd}
              key={pd.key}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default Shop;
