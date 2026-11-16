import React from 'react'
import { Link } from 'react-router-dom'
import './CoconutShell.css'
import shell from '../assets/craft.jpg'

export default function CoconutShell() {
return (
    <div>
        <main className="detail-shell-detail">
            <article className="detail-card">
                <div className="detail-image">
                    <img src={shell} alt="Handcrafted coconut shell products" />
                </div>
                <div className="detail">
                    <span className="detail-subtitle">From the coconut palm</span>
                    <h1>Coconut Shell</h1>
                    <p> After the coconut is used, its hard shell can be shaped into
                        durable, distinctive objects. Each finished piece makes use of a
                        natural material that might otherwise be discarded.</p>
                    <h2>Crafted into</h2>
                    <ul>
                        <li>Bowls, cups, and serving pieces</li>
                        <li>Jewelry and decorative objects</li>
                        <li>Small household accessories</li>
                    </ul>
                    <Link className="detail-back" to="/discover">← Back to Discover</Link>
                </div>
            </article>
        </main>
    </div>
)
}
