import React, { useState, useEffect } from "react";
import fakeData from "../../fakeData/index";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

function Shop() {
  // const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productsKeys = Object.keys(savedCart);
    
    fetch('http://localhost:5000/productsByKeys', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(productsKeys)
    })
    .then(res => res.json())
    .then(data => setCart(data))
  }, []);

  // useEffect(() => {
  //   const savedCart = getDatabaseCart();
  //   const productsKeys = Object.keys(savedCart);
  //   if(products.length > 0){
  //     const cartProducts = productsKeys.map((key) => {
  //       const product = products.find((pd) => pd.key === key);
  //       product.quantity = savedCart[key];
  //       return product;
  //     });
  //     setCart(cartProducts);
  //   }
  // }, [products]);


  function handleAddProduct(product) {
    const tobeAdded = product.key;
    const sameProduct = cart.find(pd => pd.key === tobeAdded);
    let count = 1;
    let newCart;
    if(sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(pd => pd.key !== tobeAdded);
      newCart = [...others, sameProduct]
    }else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count)
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
          <Link to='/review'>
            <button className='btn'>CheckOut</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Shop;
