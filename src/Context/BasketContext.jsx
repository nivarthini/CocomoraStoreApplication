import React, { createContext, useState } from 'react'

export const BasketContext = createContext();
export default function BasketProvider({children}) {

    const [basket, setBasket] = useState([]);
    const addBasket = (product) =>{
        const existingProduct = basket.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            setBasket(basket.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            );
        }

        else{
            setBasket([
                ...basket,
                { ...product, quantity: 1 }
            ]);
        }
    }

    const increaseQuantity = (id) => {
        setBasket(basket.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
        );
    }

    const decreaseQuantity = (id) => {
        setBasket(basket.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        .filter((item) => item.quantity > 0)
        )
    }

    const removeFromBasket = (id) => {
        setBasket(basket.filter((item) => item.id !== id));
    }

    const total = basket.reduce((sum, item) => sum + item.price * item.quantity,0)
    const totalItems = basket.reduce((sum, item) => sum + item.quantity,0)

    return (

        <BasketContext.Provider value={{basket, addBasket, increaseQuantity, decreaseQuantity, removeFromBasket, total, totalItems}}>
            {children}
        </BasketContext.Provider>

    )
}
