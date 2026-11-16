import { Link } from 'react-router-dom';
import chair from '../assets/chair materials.jpg';
import craft from '../assets/craft.jpg';
import flesh from '../assets/flesh.jpg';
import flower from '../assets/flower.jpg';
import husk from '../assets/husk.jpg';
import leaves from '../assets/leaves.jpg';
import oil from '../assets/oil.jpg';
import water from '../assets/water.jpg';
import Navbar from '../Components/Navbar';
import './Discover.css';
import Footer from '../Components/Footer';

export default function Discover() {
return (
    <div className="discover">
        <Navbar/>

            <div className="discover-container">

                <div className="discover-heading">
                    <span>DISCOVER</span>
                    <h1>Every part of the coconut tree tells a story</h1>
                </div>

                <div className="discover-grid">

                    <div className="discover-card">
                        <div className="discover-image">
                            <img src={leaves} alt="Coconut Leaves"/>
                        </div>

                        <div className="discover-info">
                            <h2>Coconut Leaves</h2>
                            <p>Traditionally woven into baskets,plates, and rustic decor.</p>
                            <ul>
                                <li>Decor</li>
                                <li>Crafts</li>
                                <li>Traditional weaving</li>
                            </ul>
                            <Link className="explore-link" to="/discover/coconut-leaves">Explore More</Link>
                        </div>
                    </div>

                    <div className="discover-card">
                        <div className="discover-image">
                            <img src={flower} alt="Coconut Flower"/>
                        </div>

                        <div className="discover-info">
                            <h2>Coconut Flower</h2>
                            <p> The source for neera, jaggery, vinegar, and sweet coconut sugar.</p>
                            <ul>
                                <li>Neera</li>
                                <li>Jaggery</li>
                                <li>Vinegar</li>
                            </ul>
                            <Link className="explore-link" to="/discover/coconut-flower">Explore More</Link>
                        </div>
                    </div>


                    <div className="discover-card">
                        <div className="discover-image">
                            <img src={water} alt="Coconut Water" />

                        </div>

                        <div className="discover-info">
                            <h2>Coconut Water</h2>
                            <p>  Fresh, naturally hydrating and beloved in juices, popsicles, and wellness drinks.</p>
                            <ul>
                                <li>Drinks</li>
                                <li>Juices</li>
                                <li>Ice pops</li>
                            </ul>
                            <Link className="explore-link" to="/discover/coconut-water">Explore More</Link>
                        </div>
                    </div>


                    <div className="discover-card">
                        <div className="discover-image">
                            <img src={flesh} alt="Coconut Flesh"/>
                        </div>

                        <div className="discover-info">
                            <h2>Coconut Flesh</h2>
                            <p>Creamy, rich, and versatile in milk, flours, desserts, and confectionery.</p>
                            <ul>
                                <li>Milk</li>
                                <li>Flour</li>
                                <li>Ice cream</li>
                            </ul>
                            <Link className="explore-link" to="/discover/coconut-flesh">Explore More</Link>
                        </div>
                    </div>

                    <div className="discover-card">
                        <div className="discover-image">
                            <img src={oil} alt="Coconut oil"/>
                        </div>

                        <div className="discover-info">
                            <h2>Coconut Oil</h2>
                            <p>Used for cooking, nourishment, skincare, and handcrafted soaps.</p>
                            <ul>
                                <li>Cooking</li>
                                <li>Hair care</li>
                                <li>Skin care</li>
                            </ul>
                            <Link className="explore-link" to="/discover/coconut-oil">Explore More</Link>
                        </div>
                    </div>

                    <div className="discover-card">
                        <div className="discover-image">
                            <img src={craft} alt="Coconut craft"/>
                        </div>

                        <div className="discover-info">
                            <h2>Coconut Shell</h2>
                            <p>Beautifully durable material for bowls, utensils, decor, and crafted objects.</p>
                            <ul>
                                <li>Bowls</li>
                                <li>Jewellery</li>
                                <li>Home Decor</li>
                            </ul>
                            <Link className="explore-link" to="/discover/coconut-shell">Explore More</Link>
                        </div>
                    </div>

                    <div className="discover-card">
                        <div className="discover-image">
                            <img src={husk} alt="Coconut Husk"/>
                        </div>

                        <div className="discover-info">
                            <h2>Coconut Husk</h2>
                            <p> A natural fiber source for ropes, mats, brushes, and soil enrichment.</p>
                            <ul>
                                <li>Coir</li>
                                <li>Mats</li>
                                <li>Peat</li>
                            </ul>
                            <Link className="explore-link" to="/discover/coconut-husk">Explore More</Link>
                        </div>
                    </div>

                    <div className="discover-card">
                        <div className="discover-image">
                            <img src={chair}  alt="Coconut Flesh"/>
                        </div>

                        <div className="discover-info">
                            <h2>Coconut Materials</h2>
                            <p>Strong and elegant wood used in furniture and sustainable construction.</p>
                            <ul>
                                <li>Furniture</li>
                                <li>Timber</li>
                                <li>Building Materials</li>
                            </ul>
                            <Link className="explore-link" to="/discover/coconut-materials">Explore More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>

    );
}

