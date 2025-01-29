import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file
import ProductCard from "../Componants/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data);
        setSortedProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const sortHighToLow = () => {
    const sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
    setSortedProducts(sorted);
  };
  const sortlowtohigh = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Shopping Website</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="header">
        <h1>Shopping Products</h1>
        <div className="btn" style={{display:"flex",flexDirection:'row',columnGap:"5px"}}>
        <button onClick={sortHighToLow}>Sort: High to Low</button>
        <button onClick={sortlowtohigh}>Sort: Low to high</button>
        </div>
      </div>
      

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
