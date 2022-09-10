import axios from "axios";
import { useEffect, useState } from "react";
import { ProductList } from "../../components/ProductList";

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
    <>
      {product.map((currentProduct) => {
        return (
          <ProductList product={{
            image: currentProduct.image,
            name: currentProduct.name,
            quantity: currentProduct.quantity
          }}
            key={currentProduct.name}
          />
        );
      })}
    </>
  );
}
