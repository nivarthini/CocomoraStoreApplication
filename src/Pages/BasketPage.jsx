import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { BasketContext } from '../Context/BasketContext';
import './BasketPage.css';

export default function BasketPage() {

    const {basket, increaseQuantity,decreaseQuantity, removeFromBasket, total, totalItems} = useContext(BasketContext)

    return (
        <div>
            <div className="basket-page">
                <Navbar />

                <section className="basket-container">
                    <div className="basket-heading">
                        <span>YOUR SELECTION</span>
                        <h1>Shopping Basket</h1>
                        <p>{totalItems} items in your basket</p>
                    </div>

                    {basket.length === 0 ? (
                        <div className="empty-basket">
                            <div className="empty-basket-icon">
                                <span>🛒</span>
                            </div>

                            <h2>Your basket is empty!</h2>
                            <p>Discover something delicious from Cocomora.</p>
                            <Link to="/featured">Explore Products</Link>
                        </div>
                    ) : (
                        <div className="basket-content">
                            <div className="basket-products">
                                {basket.map((item) => (
                                    <div className="basket-item" key={item.id}>
                                        <div className="basket-item-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>

                                        <div className="basket-item-info">
                                            <h2>{item.name}</h2>
                                            <p>${item.price} each</p>
                                            <button className="remove-btn" onClick={() => removeFromBasket(item.id)}>Remove</button>
                                        </div>

                                        <div className="quantity-control">
                                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                                        </div>

                                        <h3 className="item-total">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </h3>
                                    </div>
                                ))}
                            </div>

                            <div className="basket-summary">
                                <h2>Order Summary</h2>
                                <div className="summary-row">
                                    <span>Total Items</span>
                                    <span>{totalItems}</span>
                                </div>

                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>

                                <div className="summary-total">
                                    <span>Total Amount</span>
                                    <h2>${total.toFixed(2)}</h2>
                                </div>

                                <button className="checkout-btn" onClick={() =>alert('Checkout functionality coming soon!')} >Proceed to Checkout</button>
                                <Link to="/featured" className="continue-shopping"> ← Continue Shopping</Link>

                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
