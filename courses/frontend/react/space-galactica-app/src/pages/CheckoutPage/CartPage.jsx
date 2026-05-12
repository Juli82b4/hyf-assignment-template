import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <main className="mainContent">
      <section className="description">
        <h2>Your Cart</h2>
      </section>

      <section className="card">
        {cart.length === 0 ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.name}>
                {item.thumbnail && (
                  <img src={item.thumbnail} alt={item.name} width="80" />
                )}

                <p>{item.name}</p>

                <p>Qty: {item.quantity}</p>

                <button onClick={() => decreaseQty(item.name)}>-</button>
                <button onClick={() => increaseQty(item.name)}>+</button>

                <button onClick={() => removeFromCart(item.name)}>
                  Remove
                </button>
              </div>
            ))}

            <Link to="/checkout">
              <button>Go to Checkout</button>
            </Link>
          </>
        )}
      </section>
    </main>
  );
}