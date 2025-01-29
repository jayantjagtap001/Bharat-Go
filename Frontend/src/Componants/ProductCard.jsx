import { Link } from "react-router-dom";
import "./ProductCard.css"; // Import the CSS file

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>
        <span className="price-label"><b>Price:</b></span> ${product.price}
      </p>
      <Link to={`/product/${product.id}`}>
        <button className="add-to-cart-btn">Add to Cart</button>
      </Link>
    </div>
  );
};

export default ProductCard;
