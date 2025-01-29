import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css"; // Import the CSS file

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.images} alt={item.title} />
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
          <h3 className="cart-total">
            Total: ${cart.reduce((acc, item) => acc + item.price, 0)}
          </h3>
          <button className="checkout-btn" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
