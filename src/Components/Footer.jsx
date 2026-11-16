import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
return (
    <div>
        <footer className="home-footer">
            <h2>Cocomora</h2>
            <p>One Coconut. So Much More.</p>

            <div className="home-footer-links">
                <Link to="/">Home</Link>
                <Link to="/discover">Discover</Link>
                <Link to="/featured">Products</Link>
                <Link to="/business">Business</Link>
                <Link to="/basket">Basket</Link>
            </div>

                <p className="home-footer-copy">
                    © 2026 Cocomora. All rights reserved.
                </p>
        </footer>
    </div>
)
}
