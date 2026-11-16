import React, { useReducer } from 'react';
import Navbar from '../Components/Navbar';
import './Contact.css';
import Footer from '../Components/Footer';

const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
    submitted: false,
    error: ""
};

function formReducer(state, action) {

    switch (action.type) {

        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: action.value,
                error: '',
                submitted: false
            };

        case 'SUBMIT':
            return {
                ...state,
                submitted: true,
                error: ''
            };

        case 'ERROR':
            return {
                ...state,
                error: action.value,
                submitted: false
            };

        case 'RESET':
            return initialState;

        default:
            return state;
    }
}

export default function Contact() {

    const [formData, dispatch] = useReducer(formReducer, initialState);
    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: e.target.name,
            value: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            dispatch({
                type: 'ERROR',
                value: 'Please fill in all fields.'
            });
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            dispatch({
                type: 'ERROR',
                value: 'Please enter a valid email address.'
            });
            return;
        }

        if (!/^[0-9]{10}$/.test(formData.phone)) {
            dispatch({
                type: 'ERROR',
                value: 'Please enter a valid 10-digit phone number.'
            });
            return;
        }

        dispatch({ type: 'SUBMIT' });
    };

    return (
        <div className="contact-page">

            <Navbar />

            <section className="contact-container">

                <div className="contact-heading">
                    <span>GET IN TOUCH</span>
                    <h1>Contact Cocomora</h1>
                    <p>Have a question about our products or business? We'd love to hear from you.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>

                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange}/>

                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}/>

                    <label>Phone Number</label>
                    <input type="text" name="phone" placeholder="Enter 10-digit phone number" value={formData.phone} onChange={handleChange}/>

                    <label>Your Message</label>
                    <textarea name="message" placeholder="Write your message..." value={formData.message} onChange={handleChange} rows="5"/>

                    {formData.error && (
                        <p className="contact-error">{formData.error}</p>
                    )}

                    {formData.submitted && (
                        <p className="contact-success">
                            Thank you! Your enquiry has been submitted successfully.
                        </p>
                    )}

                    <button type="submit">Send Message</button>

                </form>
            </section>
            <Footer/>

        </div>
    );
}
