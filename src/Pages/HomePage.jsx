import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import products from './products';
import './HomePage.css';
import heroImage from '../assets/banners.jpg';
import leaves from '../assets/leaves.jpg';
import flower from '../assets/flower.jpg';
import water from '../assets/water.jpg';
import flesh from '../assets/flesh.jpg';
import craft from '../assets/craft.jpg';
import materials from '../assets/chair materials.jpg';

export default function HomePage() {

    const discoverItems = [
        {
            name: 'Coconut Leaves',
            description: 'Explore traditional weaving, baskets and natural decorations.',
            image: leaves,
            link: '/discover/coconut-leaves'
        },
        {
            name: 'Coconut Flower',
            description: 'Discover neera, jaggery, vinegar and coconut sugar.',
            image: flower,
            link: '/discover/coconut-flower'
        },
        {
            name: 'Coconut Water',
            description: 'Enjoy refreshing drinks and naturally hydrating beverages.',
            image: water,
            link: '/discover/coconut-water'
        },
        {
            name: 'Coconut Flesh',
            description: 'Explore coconut milk, flour, desserts and delicious treats.',
            image: flesh,
            link: '/discover/coconut-flesh'
        }
    ];

    return (
        <div className="cocomora-home">

            <Navbar />

            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <span>WELCOME TO COCOMORA</span>
                        <h1>Cocomora</h1>
                        <h2>One Coconut. So Much More.</h2>
                        <p>
                            Explore a luxury world of coconut food, drinks,
                            beauty, craft, and sustainable entrepreneurship.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/featured" className="button1">
                                Explore Coconut Products →
                            </Link>

                            <Link to="/discover" className="button2">
                                Discover the Possibilities
                            </Link>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src={heroImage} alt="Fresh coconut products" />
                    </div>
                </div>
            </section>

            <section className="home-discover-section">
                <div className="home-section-heading">
                    <span>DISCOVER</span>
                    <h2>Every part of the coconut has a purpose</h2>
                    <p> From refreshing drinks to beautiful natural crafts, discover the many possibilities of the coconut tree.</p>
                </div>

                <div className="home-discover-grid">
                    {discoverItems.map((item, index) => (
                        <div className="home-discover-card" key={index}>
                            <img src={item.image} alt={item.name} />

                            <div className="home-discover-content">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <Link to={item.link}>Explore More →</Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="home-section-button">
                    <Link to="/discover">Explore All Coconut Uses →</Link>
                </div>
            </section>

            <section className="home-products-section">
                <div className="home-section-heading">
                    <span>OUR COLLECTION</span>
                    <h2>Curated for the coconut lover</h2>
                    <p>Discover refreshing and delicious products inspired by the goodness of coconut.
                    </p>
                </div>

                <div className="home-products-grid">
                    {products.slice(0,4).map((product) => (
                        <div className="home-product-card" key={product.id}>
                            <img src={product.image} alt={product.name} />

                            <div className="home-product-content">
                                <span>{product.category}</span>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>

                                <div className="home-product-bottom">
                                    <h3>${product.price}</h3>
                                    <Link to={`/product/${product.id}`}>
                                        View Details →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="home-section-button">
                    <Link to="/featured">View All Products →</Link>
                </div>
            </section>

            <section className="home-business-section">
                <div className="home-business-image">
                    <img src={craft} alt="Handcrafted coconut products" />
                </div>

                <div className="home-business-content">
                    <span>BUSINESS POSSIBILITIES</span>
                    <h2>Turn coconut ideas into opportunities</h2>
                    <p>Discover creative ways to transform coconut parts into useful products, handmade crafts, food, and sustainable business ideas.
                    </p>
                    <Link to="/business">Explore Business Ideas →</Link>
                </div>
            </section>

            <section className="home-materials-section">
                <img src={materials} alt="Coconut natural materials" />

                <div>
                    <span>MAKE MORE WITH NATURE</span>
                    <h2>One tree. Countless possibilities.</h2>
                    <p>Discover how every part of the coconut tree can become something useful, beautiful and meaningful.</p>
                    <Link to="/discover">Discover More →</Link>
                </div>
            </section>

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

                <p className="home-footer-copy"> © 2026 Cocomora. All rights reserved.</p>
            </footer>
        </div>
    );
}
