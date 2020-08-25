import React, {useState} from 'react'
import fakeData from '../../fakeData/index';
import './Shop.css';
import Product from '../Product/Product';


function Shop() {
    const first10 = fakeData.slice(0,10);
    const[products, setProducts] = useState(first10);
    function handleAddProduct(product) {
        console.log('button clicked', product);
    }

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map( pd =>
                            <Product handleAddProduct ={handleAddProduct} product={pd} key={pd.key}></Product>                            
                        )
                    }
                </div>
                <div className="cart-container">
                    <h3>This is Cart</h3>
                </div>
            </div>

        </div>
    )
}

export default Shop
