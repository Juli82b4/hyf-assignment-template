import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);

    const addToCart = (item) => {
        setCart((prev) => {
            const exists = prev.find((p) => p.name === item.name);

            if (exists) {
                return prev.map((p) =>
                    p.name === item.name
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            }

            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (name) => {
        setCart((prev) => prev.filter((item) => item.name !== name));
    };

    const increaseQty = (name) => {
        setCart((prev) =>
            prev.map((item) =>
                item.name === name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (name) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.name === name
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const checkout = () => {
        if (cart.length === 0) return;

        setOrders((prev) => [...prev, cart]);
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                orders,
                addToCart,
                removeFromCart,
                increaseQty,
                decreaseQty,
                checkout,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};