import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export function CreateList() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    listName: "",
    productName: "",
    productQuantity: "",
    productImage: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ironrest.herokuapp.com/shoppinglist",
        form
      );

      navigate("/");

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="list">List: </label>
      <input
        id="list"
        name="listName"
        type="text"
        value={form.listName}
        onChange={handleChange}
      />

      <label htmlFor="product">Product: </label>
      <input
        id="product"
        name="productName"
        type="text"
        value={form.productName}
        onChange={handleChange}
      />

      <label htmlFor="quantity">Quantity: </label>
      <input
        id="quantity"
        name="quantity"
        type="number"
        value={form.quantity}
        onChange={handleChange}
      />

      <label htmlFor="image">Image: </label>
      <input
        id="image"
        name="image"
        type="text"
        value={form.image}
        onChange={handleChange}
      />

      <button type="submit">Send</button>
    </form>
  );
}
