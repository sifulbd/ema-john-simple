import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Product/Product';

function ProductDetails() {
    const {productKey} = useParams();
    const [product, setItems] = useState({})
    useEffect(() => {
       fetch(`http://localhost:5000/product/${productKey}`)
       .then(res => res.json())
       .then(data => setItems(data))
    }, [productKey])
    return (
        <div>
            <Product
              showCartButton = {false}
              product={product}
            ></Product>
        </div>
    )
}

export default ProductDetails
