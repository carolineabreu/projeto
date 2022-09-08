import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export function CreateList() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    product: "",
    quantity: "",
    image: ""
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
      <label htmlFor="product">Product: </label>
      <input
        id="product"
        name="product"
        value={form.product}
        onChange={handleChange}
      />

      <label htmlFor="quantity">Quantity: </label>
      <input
        id="quantity"
        name="quantity"
        value={form.quantity}
        onChange={handleChange}
      />

      <label htmlFor="image">Image: </label>
      <input
        id="image"
        name="image"
        value={form.image}
        onChange={handleChange}
      />

      <button type="submit">Send!</button>
    </form>
  );
}
