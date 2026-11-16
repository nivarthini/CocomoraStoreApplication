import React from 'react'
import { Link } from 'react-router-dom'
import './CoconutLeaves.css'
import leaves from '../assets/leaves.jpg'

export default function CoconutLeaves() {
return (
    <div>
        <main className="detail-leaves-detail">
            <article className="detail-card">
                <div className="detail-image">
                    <img src={leaves} alt="Coconut palm leaves" />
                </div>

                <div className="detail">
                    <span className="detail-subtitle">From the coconut palm</span>
                    <h1>Coconut Leaves</h1>
                    <p> Flexible coconut leaves have long been valued for practical, handcrafted products.
                        Their natural texture brings warmth to everyday objects and home decor.
                    </p>
                    <h2>Common uses</h2>
                    <ul>
                        <li>Woven baskets, plates, and mats</li>
                        <li>Decorative crafts and thatching</li>
                        <li>Traditional weaving projects</li>
                    </ul>
                    <Link className="detail-back" to="/discover">← Back to Discover</Link>
                </div>
            </article>
        </main>

    </div>
)
}
