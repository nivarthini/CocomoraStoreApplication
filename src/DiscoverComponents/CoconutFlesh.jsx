import React from 'react'
import { Link } from 'react-router-dom';
import './CoconutFlesh.css'
import flesh from '../assets/flesh.jpg'

export default function CoconutFlesh() {
return (
    <div>
        <main className="detail-flesh-detail">
            <article className="detail-card">
                <div className="detail-image">
                    <img src={flesh} alt="Coconut flesh" />
                </div>

                <div className="detail">
                    <span className="detail-src">From the coconut palm</span>
                    <h1>Coconut Flesh</h1>
                    <p>The white flesh inside a mature coconut is rich, creamy, and versatile. It can be enjoyed fresh or transformed into ingredients for both sweet and savory recipes.</p>
                    <h2>Popular forms</h2>
                    <ul>
                        <li>Coconut milk and cream</li>
                        <li>Grated or dried coconut</li>
                        <li>Coconut flour and desserts</li>
                    </ul>
                    <Link className="detail-back" to="/discover">← Back to Discover</Link>
                </div>
            </article>
        </main>
    </div>
)
}
