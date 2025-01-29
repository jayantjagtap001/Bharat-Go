import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      className="product-card"
      style={{ width: "500px", height: "400px", border: "2px solid" }}
    >
      <img
        style={{
          width: "300px",
          height: "300px",
          alignItems: "center",
          justifyContent: "center",
        }}
        src={product.images[0]}
        alt={product.title}
      />
      <h3>Product Title:{product.title}</h3>
      <p ><span style={{color:"red"}}><b>Price:</b></span>${product.price}</p>
      <Link to={`/product/${product.id}`}><button style={{ border:"none",width:"150px",height:"40px",background:"#48474c",color:"white",borderRadius:"10px",cursor:"pointer"}} >Add To Shopping</button></Link>
    </div>
  );
};

export default ProductCard;
