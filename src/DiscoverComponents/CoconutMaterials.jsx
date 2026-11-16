import React from 'react'
import { Link } from 'react-router-dom'
import './CoconutMaterials.css'
import materials from '../assets/chair materials.jpg'

export default function CoconutMaterials() {
    return (
        <div>
            <main className="detail-materials-detail">
                <article className="detail-card">
                    <div className="detail-image">
                        <img src={materials} alt="Furniture made with coconut palm timber" />
                    </div>
                    <div className="detail">
                        <span className="detail-subtitle">From the coconut palm</span>
                        <h1>Coconut Materials</h1>
                        <p> Coconut palm timber can be used to make furniture and building products.
                            Its distinctive grain gives each piece a natural character while making use of the whole palm.
                        </p>
                        <h2>Used for</h2>
                        <ul>
                            <li>Furniture and interior details</li>
                            <li>Timber and decorative panels</li>
                            <li>Selected construction applications</li>
                        </ul>
                        <Link className="detail-back" to="/discover">← Back to Discover</Link>
                    </div>
                </article>
            </main>
        </div>
    )
}
