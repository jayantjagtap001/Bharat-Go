import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching product:", error));
  }, [id]);

  return (
    product && (
      <div style={{width:"500px",height:"500px",alignItems:"center",textAlign:"center",border:"2px solid",margin:"auto"}}>
        <h1>{product.title}</h1>
        <img style={{width:"200px",height:"200px"}} src={product.images[0]} alt={product.title} />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button style={{width:"150px",height:"40px",background:"pink",borderRadius:"8px",border:"none",cursor:'pointer'}} onClick={() => {
            addToCart(product);
            alert("Card is Added")
        }}>Add to Cart</button>
      </div>
    )
  );
};

export default ProductDetails;
