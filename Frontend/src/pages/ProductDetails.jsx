import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  return (
    product && (
      <div className="product-details">
        <h1>{product.title}</h1>
        <img src={product.images[0]} alt={product.title} />
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => {
            addToCart(product);
            alert("Product Added to Cart!");
          }}
        >
          Add to Cart
        </button>
      </div>
    )
  );
};

export default ProductDetails;
