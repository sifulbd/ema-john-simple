import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const {name, quantity, key, price} = props.product;
    return (
        <div style={{borderBottom: '1px solid #bdbdbd', marginBottom: '5px', paddingBottom: '5px'}}className='review_product'>
            <h4>{name}</h4>
            <p>Price $ {price}</p>
            <p>Quantity: {quantity}</p>
            <button className="btn" onClick={() => props.handleCLick(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;