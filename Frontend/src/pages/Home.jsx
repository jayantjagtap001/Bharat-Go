import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Componants/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div >
        <br />
      <h1 style={{alignItems:"center",textAlign:"center",color:"#de2904",fontStyle:"italic"}}>Shopping Products</h1>
      <br />
      {/* <button onClick={()=>{
        products.map((a,b)=>{
            let newcard=ProductCard(a.proce-b.price);
            
        })
      }}>High To Low</button> */}
      <div className="product-grid" style={{display:"grid",gap:"5px",gridTemplateColumns: "repeat(3, 1fr)",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
