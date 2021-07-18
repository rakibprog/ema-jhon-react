import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="item">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="item-content">
                <h4>{name}</h4>
                <p><small>By: {seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={ () => props.handleAddproduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;