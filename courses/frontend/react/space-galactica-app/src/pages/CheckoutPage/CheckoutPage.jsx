import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
    const { user } = useAuth();
    const { cart, checkout } = useCart();

    return (
        <main className="mainContent">
            <section className="description">
                <h2>Checkout</h2>
            </section>

            <section className="card">
                {!user ? (
                    <p>You must be logged in to checkout</p>
                ) : cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        <p>Ready to complete order</p>

                        <button onClick={checkout}>
                            Place Order
                        </button>
                    </>
                )}
            </section>
        </main>
    );
}