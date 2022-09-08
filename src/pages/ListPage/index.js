import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function ShoppingListPage() {
  const { id } = useParams();
  const [Shoppinglist, setShoppingList] = useState({});

  console.log(list);

  useEffect(() => {
    async function fetchShoppingList() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/shoppinglist/${id}`
        );

        setList({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchShoppingList();
  }, []);

  return (
    <>
      <h1>{ShoppingList.productName}</h1>
      <p>{ShoppingList.productQuantity}</p>
      <p>{ShoppingList.productPicture}</p>
    </>
  );
}
