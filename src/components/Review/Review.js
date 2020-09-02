import React, { useState, useEffect } from "react";
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import happyImage from '../../images/giphy.gif';

function Review() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPLaces] = useState(false);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productsKeys = Object.keys(savedCart);
    const cartProducts = productsKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  const handleOrder = () => {
      processOrder();
      setOrderPLaces(true);
      setCart([]);    
  };

  const handleRemoveItem = (productsKey) => {
      console.log('Item Clicked', productsKey);
      const newCart = cart.filter(pd => pd.key !== productsKey); 
      setCart(newCart);
      removeFromDatabaseCart(productsKey);
  }

  let thankYou;
  if(orderPlaced) {
    thankYou = <img src={happyImage} alt=""/>
  }

  return (
    <div className="reviewContent" style={{display: 'flex'}}>
        <div className="product-container">
            {cart.map((pd) => (
                <ReviewItem key={pd.key} handleCLick={handleRemoveItem} product={pd}></ReviewItem>
            ))}

            {thankYou}

        </div>
        <div className="cart-container">
            <Cart cart={cart}>
                <Link to='/review'>
                    <button onClick={handleOrder} className='btn'>Place Order</button>
                </Link>
            </Cart>
        </div>
    </div>
  );
}

export default Review;
