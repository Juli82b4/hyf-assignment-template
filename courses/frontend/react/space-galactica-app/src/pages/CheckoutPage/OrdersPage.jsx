import { useCart } from "../../context/CartContext";

export default function OrdersPage() {
  const { orders } = useCart();

  return (
    <main className="mainContent">
      <section className="description">
        <h2>Your Orders</h2>
      </section>

      <section className="card">
        {orders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          orders.map((order, index) => (
            <div key={index}>
              <h3>Order #{index + 1}</h3>

              {order.map((item) => (
                <p key={item.name}>
                  {item.name} × {item.quantity}
                </p>
              ))}
            </div>
          ))
        )}
      </section>
    </main>
  );
}