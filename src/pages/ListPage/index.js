import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function ListPage() {
  const { id } = useParams();
  const [list, setList] = useState({});

  console.log(list);

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/shoppinglist/${id}`
        );

        setList({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchList();
  }, []);

  return (
    <>
      <h1>{list.listName}</h1>
      <p>{list.productName}</p>
      <p>{list.productQuantity}</p>
      <p>{list.productImage}</p>
    </>
  );
}
