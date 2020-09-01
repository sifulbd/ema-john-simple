
import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';


function Review() {
    const[cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productsKeys = Object.keys(savedCart);
        const cartProducts = productsKeys.map(key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])
    return (
        <div>
            <h2>Item items: {cart.length}</h2>
            {
                cart.map(pd => <ReviewItem key ={pd.key}product = {pd}></ReviewItem>)
            }
            
        </div>
    )
}

export default Review;
