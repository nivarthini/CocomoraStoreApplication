import React from 'react'
import { Link } from 'react-router-dom'
import './CoconutWater.css'
import water from '../assets/water.jpg'

export default function CoconutWater() {
    return (
        <div>
            <main className="detail-water-detail">
                <article className="detail-card">
                    <div className="detail-image">
                        <img src={water} alt="Fresh coconut water" />
                    </div>
                    <div className="detail">
                        <span className="detail-subtitle">From the coconut palm</span>
                        <h1>Coconut Water</h1>
                        <p> Found inside a young coconut, coconut water is enjoyed for its refreshing, lightly sweet taste.
                            It can be served on its own or used as the base for creative drinks and frozen treats.</p>
                        <h2>Enjoy it in</h2>
                        <ul>
                            <li>Fresh juices and blended drinks</li>
                            <li>Fruit smoothies and mocktails</li>
                            <li>Popsicles and other frozen treats</li>
                        </ul>
                        <Link className="detail-back" to="/discover">← Back to Discover</Link>
                    </div>
                </article>
            </main>
        </div>
    )
}
