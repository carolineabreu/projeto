import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  console.log(product);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/shopping-list-clz/${id}`
        );

        setProduct({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchProduct();
  }, []);

  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/shopping-list-clz/${id}`
      );

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="product-page">
      <div className="sub-product">
        <img src={product.image} alt={product.name} />
        <div className="product">
          <h2>{product.name}</h2>
          <p><strong>Quantity: </strong> {product.quantity}</p>
        </div>

        <div className="product-btn">
          <Link to={`/edit/${id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
