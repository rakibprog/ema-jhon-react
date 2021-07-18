import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total+prd.price,0);
    let shipping = 0; 
    if(totalPrice > 35) {
        shipping = 0;
    }else if (totalPrice > 15) {
        shipping = 4.99;
    }else if (totalPrice > 0){
        shipping = 12.9;
    }

    const tax = totalPrice / 10; 

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="cart-content">
           <h2>Order Summary</h2>
           <h4>Items ordered:{formatNumber(cart.length)}</h4>
           <p>Product Price : {formatNumber(totalPrice)} </p>
           <p>Shipping Cost: {formatNumber(shipping)}</p>
           <p>Tax + Vat: {formatNumber(tax)}</p>
           <p>total Price:${ formatNumber(totalPrice + shipping + tax)}</p>
           <button className="cart-button">Review your order</button>
        </div>
    );
};

export default Cart;