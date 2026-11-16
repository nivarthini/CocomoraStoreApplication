import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import './About.css';
import Footer from '../Components/Footer';
import aboutImage from '../assets/about.jpg';

export default function About() {
    return (
        <div className="about-page">
            <Navbar />

            <section className="about-hero">
                <span>ABOUT COCOMORA</span>
                <h1>One Coconut.<br />Endless Possibilities.</h1>
                <p> Discover how one simple coconut can bring together nature, creativity, sustainability and everyday living.</p>
            </section>

            <section className="about-content">
                <div className="about-image">
                    <img src={aboutImage} alt="Fresh coconuts"/>
                </div>

                <div className="about-text">
                    <span>OUR STORY</span>
                    <h2>Inspired by Nature, Made for Everyday Life</h2>
                    <p> Cocomora is a coconut-inspired brand that celebrates the many possibilities of the coconut tree.</p>
                    <p> From refreshing coconut drinks to natural materials and creative products, we bring different coconut possibilities together in one place.</p>
                    <Link to="/discover">Discover More</Link>
                </div>
            </section>

            <section className="about-values">
                <div>
                    <h3>Nature</h3>
                    <p>Celebrating the natural value of the coconut tree.</p>
                </div>
                <div>
                    <h3>Creativity</h3>
                    <p>Exploring new ideas and uses for coconut products.</p>
                </div>
                <div>
                    <h3>Sustainability</h3>
                    <p>Encouraging thoughtful use of natural resources.</p>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
