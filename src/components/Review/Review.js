import React, { useState, useEffect } from "react";
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import { Link, useHistory } from "react-router-dom";
import happyImage from '../../images/giphy.gif';

function Review() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPLaces] = useState(false);
  const history = useHistory();

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

  const handleProceedCheckout = () => {
    history.push('/shipment')
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
                  <button onClick={handleProceedCheckout} className='btn'>Proceed Checkout</button>
            </Cart>
        </div>
    </div>
  );
}

export default Review;
