import React from 'react'
import { Link } from 'react-router-dom'
import './CoconutFlower.css'
import flower from '../assets/flower.jpg'

export default function CoconutFlower() {
    return (
    <div>
        <main className="detail-flower-detail">
            <article className="detail-card">
                <div className="detail-image">
                    <img src={flower} alt="Coconut flower" />
                </div>

                <div className="detail">
                    <span className="detail-subtitle">From the coconut palm</span>
                    <h1>Coconut Flower</h1>
                    <p> The coconut flower produces sap that can be collected and crafted into a range of
                        pantry ingredients. It is a traditional source of naturally rich, distinctive flavors.
                    </p>
                    <h2>Made from coconut flower sap</h2>
                    <ul>
                        <li>Neera and fermented vinegar</li>
                        <li>Coconut jaggery and sugar</li>
                        <li>Syrups and other sweeteners</li>
                    </ul>
                    <Link className="detail-back" to="/discover">← Back to Discover</Link>
                </div>
            </article>
        </main>
    </div>
    )
}
