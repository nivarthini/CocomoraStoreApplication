import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import { BasketContext } from '../Context/BasketContext';
import { addToWishlist, removeFromWishlist } from '../Redux/productSlice';
import products from './products';
import './ProductDetails.css';

export default function ProductDetails() {

    const { id } = useParams();
    const { addBasket } = useContext(BasketContext);
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.products.wishlist);
    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Product Not Found</h2>
                <Link to="/featured">Back to Products</Link>
            </div>
        );
    }

    const isWishlisted = wishlist.some((item) => item.id === product.id);

    const handleAddToBasket = () => {
        addBasket(product);
        alert('Product added to basket successfully!');
    };

    const handleWishlist = () => {
        if (isWishlisted) {
            dispatch(removeFromWishlist(product.id));
        } else {
            dispatch(addToWishlist(product));
        }
    };

    return (
        <div>
            <div className="details-page">

                <Navbar />

                <section className="details-container">

                    <div className="details-image">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="details-content">
                        <span className="details-category">{product.category}</span>
                        <h1>{product.name}</h1>
                        <h2>${product.price}</h2>
                        <p>{product.description}</p>
                        <h3>{product.type}</h3>
                        <button className="details-add-btn" onClick={handleAddToBasket}> Add to Basket </button>
                        <button className="details-add-btn" onClick={handleWishlist}>
                            {isWishlisted ? '♥ Added to Favorites' : '♡ Add to Favorites'}
                        </button>
                        <Link to="/featured" className="back-products">
                            ← Back to products
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}