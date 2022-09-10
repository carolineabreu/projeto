import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { ProductList } from "../../components/ProductList";

export function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/shopping-list-clz"
        );

        setProduct([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div className="container">
      {product.map((currentProduct) => {
        return (
          <div className="sub-container">
            <Link to={`/${currentProduct._id}`}>
              <img src={currentProduct.image} alt={currentProduct.name} />
            </Link>

            <h1>{currentProduct.name}</h1>
            <p>Quantity: {currentProduct.quantity}</p>
          </div>
        );
      })}
    </div>
  );
}

