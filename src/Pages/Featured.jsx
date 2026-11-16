import { useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import './Featured.css';
import products from './products';
export default function Featured() {

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || 'All';
    const searchRef = useRef(null);
    const filteredProducts = products.filter((product) => {

        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === 'All' || product.category === category;

        return matchesSearch && matchesCategory;
    });

    const handleSearch = (e) => {
        setSearchParams({
            search: e.target.value,
            category: category
        });
    };

    const handleCategory = (e) => {
        setSearchParams({
            search: search,
            category: e.target.value
        });
    };

    const focusSearch = () => {
        searchRef.current.focus();
    };

    return (
        <div className="featured-page">

            <Navbar />

            <section className="featured-section">

                <div className="featured-container">

                    <div className="featured-heading">
                        <span>FEATURED</span>
                        <h1>Curated for the coconut lover</h1>
                    </div>

                    <div className="product-search">
                        <input ref={searchRef} type="text" placeholder="Search products..." value={search} onChange={handleSearch}/>
                        <button type="button" onClick={focusSearch}> Search Products</button>
                        <select value={category} onChange={handleCategory}>
                            <option value="All">All Categories</option>
                            <option value="DRINKS">Drinks</option>
                            <option value="DESSERTS">Desserts</option>
                            <option value="FOOD">Food</option>
                            <option value="HOME">Home</option>
                        </select>
                        <span>{filteredProducts.length} products found</span>
                    </div>

                    <div className="featured-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div className="featured-card" key={product.id}>
                                    <div className="featured-card-image">
                                        <img src={product.image} alt={product.name}/>
                                    </div>

                                    <div className="featured-card-content">
                                        <span className="product-category">{product.category}</span>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>

                                        <div className="product-info">
                                            <h3>${product.price}</h3>
                                            <span>{product.type.replace('Made with ', '')}</span>
                                        </div>

                                        <Link to={`/product/${product.id}`}className="basket-btn">View Details</Link>
                                    </div>
                                </div>
                            ))
                        ) : (

                            <div className="no-products">
                                <h2>No Products Found</h2>
                                <p>Try another search or category.</p>
                            </div>

                        )}

                    </div>

                </div>

            </section>
            <Footer/>

        </div>
    );
}
