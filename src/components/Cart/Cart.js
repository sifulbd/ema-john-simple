import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  let shipping = 0;
  if (totalPrice > 35) {
    shipping = 12.99;
  } else if (totalPrice > 15) {
    shipping = 4.99;
  }
  function formatNumber(number) {
    const precision = number.toFixed(2);
    return Number(precision);
  }

  return (
    <div>
      <h4>Order Summery</h4>
      <p>Item orders {cart.length}</p>
      <p>Item Price {formatNumber(totalPrice)} </p>
      <p>Shipping Cosr: {shipping} </p>
      <p>Total Price: {formatNumber(totalPrice + shipping)}</p>
      <br/>
      <Link to='/review'>
        <button className='btn'>View Cart</button>
      </Link>
    </div>
  );
};

export default Cart;
