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
      <h1>{List.productName}</h1>
      <p>{List.productQuantity}</p>
      <p>{List.productPicture}</p>
    </>
  );
}
