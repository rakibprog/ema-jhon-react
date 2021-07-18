import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="" />
            <nav><ul>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/review">Order Review</a></li>
                <li><a href="/manage">Manage Inventory</a></li>
            </ul></nav>
        </header>
    );
};

export default Header;