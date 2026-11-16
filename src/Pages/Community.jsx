import React from 'react';
import Navbar from '../Components/Navbar';
import useFetchData from '../Hooks/useFetchData';
import './Community.css';
import Footer from '../Components/Footer';

export default function Community() {

    const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/users');

    return (
        <div className="community-page">

            <Navbar />

            <section className="community-container">
                <div className="community-heading">
                    <span>COCOMORA COMMUNITY</span>
                    <h1>Our Community</h1>
                    <p>Explore our community directory.</p>
                </div>

                {loading && <h3 className="community-message">Loading...</h3>}
                {error && <h3 className="community-message">{error}</h3>}

                {!loading && !error && (
                    <div className="community-grid">
                        {data.map((user) => (
                            <div className="community-card" key={user.id}>
                                <div className="community-avatar">
                                    {user.name.charAt(0)}
                                </div>

                                <h3>{user.name}</h3>
                                <p>{user.email}</p>
                                <span>{user.address.city}</span>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <Footer/>
        </div>
    );
}
