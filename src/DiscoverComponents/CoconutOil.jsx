import React from 'react'
import { Link } from 'react-router-dom'
import './CoconutOil.css'
import oil from '../assets/oil.jpg'

export default function CoconutOil() {
return (
    <div>
        <main className="detail-oil-detail">
            <article className="detail-card">
                <div className="detail-image">
                    <img src={oil} alt="Coconut oil" />
                </div>
                <div className="detail">
                    <span className="detail-subtitle">From the coconut palm</span>
                    <h1>Coconut Oil</h1>
                    <p> Coconut oil is made from the meat of the coconut and is used in kitchens
                        and personal-care products. Its familiar aroma and smooth texture make it a popular ingredient.
                    </p>
                    <h2>Everyday uses</h2>
                    <ul>
                        <li>Cooking and baking</li>
                        <li>Hair and skin care products</li>
                        <li>Handcrafted soaps and balms</li>
                    </ul>
                    <Link className="detail-back" to="/discover">← Back to Discover</Link>
                </div>
            </article>
        </main>
    </div>
)
}
