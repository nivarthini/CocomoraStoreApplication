import React, {useContext} from 'react'
import { Link} from 'react-router-dom';
import './Navbar.css';
import { BasketContext } from '../Context/BasketContext';

export default function Navbar() {
    const { totalItems } = useContext(BasketContext);
    return (
    <div>
        <header className="cocomora-header">
            <div className="container">
                <Link to="/" className="brand-logo">
                <div className="logo-circle">C</div>

                <div className="brand-text">
                    <h2>Cocomora</h2>
                    <span>ONE COCONUT. SO MUCH MORE.</span>
                </div>
                </Link>

                <nav className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/discover">Discover</Link>
                    <Link to="/featured">Products</Link>
                    <Link to="/business">Business</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/community">Our Network</Link>
                    <Link to="/wishlist" className="wishlist-icon" title="Wishlist">♡</Link>
                </nav>
                <Link to="/basket" className="basket-link"> <span>Basket</span> <span className="basket-count"> ({totalItems})</span></Link>
            </div>
        </header>

    </div>
    )
}
