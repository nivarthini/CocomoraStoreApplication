import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import { removeFromWishlist, clearWishlist } from '../Redux/productSlice';
import './Wishlist.css';
import Footer from '../Components/Footer';

export default function Wishlist() {

    const dispatch = useDispatch();

    const wishlist = useSelector((state) => state.products.wishlist);

    return (
        <div className="wishlist-page">

            <Navbar />

            <section className="wishlist-container">

                <div className="wishlist-heading">
                    <span>YOUR COLLECTION</span>
                    <h1>My Wishlist</h1>
                    <p>Your favourite coconut products in one place.</p>
                </div>

                {wishlist.length === 0 ? (

                    <div className="wishlist-empty">
                        <h2>Your Wishlist is Empty</h2>
                        <p>Explore our products and save your favourites.</p>
                        <Link to="/featured">Explore Products</Link>
                    </div>

                ) : (

                    <>
                        <div className="wishlist-top">
                            <p>{wishlist.length} products saved</p>
                            <button onClick={() => dispatch(clearWishlist())}> Clear Wishlist </button>
                        </div>

                        <div className="wishlist-grid">
                            {wishlist.map((product) => (
                                <div className="wishlist-card" key={product.id}>
                                    <div className="wishlist-image">
                                        <img src={product.image} alt={product.name} />
                                    </div>

                                    <div className="wishlist-content">
                                        <span>{product.category}</span>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        <h4>${product.price}</h4>

                                        <div className="wishlist-buttons">
                                            <Link to={`/product/${product.id}`}>View Details</Link>
                                            <button onClick={() => dispatch(removeFromWishlist(product.id))}> Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

            </section>
            <Footer/>

        </div>
    );
}
