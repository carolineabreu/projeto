import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export function Home() {
    const [items, setItems] = useState([]);


    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await axios.get(
                    "https://ironrest.herokuapp.com/shoppinglist"
                );
                setItems([...response.data]);
            } catch (err) {
                console.log(err);
            }
        }
        fetchItems();
    }, []);

    return (
        <>
            <h1>Shopping List </h1>
            <Link to="/create-list">
                <button> Add Item</button>
            </Link>
            {items.map((currentItems) => {
            return (
            <Link to={`/${currentItems._id}`}>
                <h2>{currentItems.productName}
                </h2>{" "}
            </Link>
           );
        })}
      </>
    );
  }