import React from 'react'
import { Link } from 'react-router-dom'
import './CoconutHusk.css'
import husk from '../assets/husk.jpg'

export default function CoconutHusk() {
    return (
    <div>
        <main className="detail-husk-detail">
            <article className="detail-card">
                <div className="detail-image">
                    <img src={husk} alt="Coconut husk fibers" />
                </div>
                <div className="detail">
                    <span className="detail-subtitle">From the coconut palm</span>
                    <h1>Coconut Husk</h1>
                    <p> The fibrous husk surrounding a coconut is a source of coir, a sturdy natural
                        fiber. It is valued for products used in homes, gardens, and everyday life.
                    </p>
                    <h2>Made with coir</h2>
                    <ul>
                        <li>Ropes, mats, and brushes</li>
                        <li>Doormats and natural-fiber goods</li>
                        <li>Coir pith for gardening mixes</li>
                    </ul>
                    <Link className="detail-back" to="/discover">← Back to Discover</Link>
                </div>
            </article>
        </main>

    </div>
    )
}
