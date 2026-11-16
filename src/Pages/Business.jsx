import { Link } from 'react-router-dom'
import materials from '../assets/chair materials.jpg'
import craft from '../assets/craft.jpg'
import flesh from '../assets/flesh.jpg'
import water from '../assets/water.jpg'
import './Business.css'
import Navbar from '../Components/Navbar'

export default function Business() {
    return (
        <div className="business-page">

            <Navbar/>

            <section className="business-hero">
                <div className="business-hero-content">
                    <span className="business-label">BUSINESS · IDEAS TO GROW</span>
                    <h1>Make more of every coconut.</h1>
                    <p> A coconut is more than an ingredient. Explore approachable ideas for products, small businesses, and creative uses that start with the whole palm.</p>
                    <Link to="/discover" className="business-hero-btn">  Explore coconut uses → </Link>
                </div>

                <div className="business-hero-image">
                    <img src={craft} alt="Handcrafted coconut products" />
                </div>
            </section>

            <section className="business-ideas">
                <div className="business-section-heading">
                    <span>A WHOLE-PALM MINDSET</span>
                    <h2>One ingredient, many directions</h2>
                    <p> Start with what each part can become, then follow the idea that fits your customers and community.</p>
                </div>

                <div className="business-grid">
                    <article className="business-card">
                        <div className="business-card-image">
                            <img src={flesh} alt="Coconut food products" />
                        </div>

                        <div className="business-card-content">
                            <span>01 · FOOD & DRINK</span>
                            <h3>Turn coconut into everyday favourites</h3>
                            <p> Explore coconut milk, fresh drinks, desserts, coconut flour, and other food products.</p>
                            <Link to="/discover/coconut-flesh">Explore food ideas →</Link>
                        </div>
                    </article>

                    <article className="business-card">
                        <div className="business-card-image">
                            <img src={craft} alt="Coconut shell handmade crafts" />
                        </div>

                        <div className="business-card-content">
                            <span>02 · CRAFT & HOME</span>
                            <h3>Create useful handmade products</h3>
                            <p> Transform coconut shells, leaves, and fibers into decorative and practical products.</p>
                            <Link to="/discover/coconut-shell">Explore craft ideas →</Link>
                        </div>
                    </article>

                    <article className="business-card">
                        <div className="business-card-image">
                            <img src={materials} alt="Natural coconut timber furniture" />
                        </div>

                        <div className="business-card-content">
                            <span>03 · NATURAL MATERIALS</span>
                            <h3>Give natural materials a new purpose</h3>
                            <p> Discover furniture, timber products, panels, and other creative material applications.</p>
                            <Link to="/discover/coconut-materials">Explore material ideas →</Link>
                        </div>
                    </article>

                    <article className="business-card">
                        <div className="business-card-image">
                            <img src={water} alt="Fresh coconut water" />
                        </div>

                        <div className="business-card-content">
                            <span>04 · FRESH PRODUCTS</span>
                            <h3>Build refreshing coconut experiences</h3>
                            <p> Explore coconut water, juice combinations, smoothies, and refreshing drink concepts.</p>
                            <Link to="/discover/coconut-water">Explore drink ideas →</Link>
                        </div>
                    </article>

                </div>
            </section>

            <section className="business-note">
                <span> A NOTE FOR STARTERS </span>
                <h2>Start small. Think beyond the coconut.</h2>
                <p> You do not need to use every part at once. Choose one product, understand your customers, explore local opportunities, and grow your idea step by step.</p>
                <Link to="/discover" className="business-note-btn">Discover all coconut possibilities →</Link>
            </section>

        </div>
    )
}
