import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignContent:"center",
        textAlign:"center",
        alignItems:"center",
        rowGap:"20px",
        width:"400px",
        height:"400px",
        margin:"auto",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }}>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h3>Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.title} - ${item.price}</p>
            </div>
          ))}
          <h3>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</h3>
          <button style={{width:"150px",height:"40px",background:"pink",borderRadius:"8px",border:"none",cursor:'pointer'}} onClick={handleCheckout}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
