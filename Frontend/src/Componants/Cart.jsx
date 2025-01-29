import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <div
      style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignContent:"center",
        textAlign:"center",
        alignItems:"center",
        rowGap:"10px"
      }}
    >
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div style={{width:"200px",height:"200px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} key={item.id}>
              <img style={{width:"100px",height:'100px'}} src={item.images} alt="" />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          ))}
          <h3>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</h3>
          <button style={{width:"150px",height:"40px",background:"pink",borderRadius:"8px",border:"none",cursor:'pointer'}} onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
