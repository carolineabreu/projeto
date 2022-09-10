import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    image: "",
    name: "",
    quantity: 0
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ironrest.herokuapp.com/shopping-list-clz",
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
      <label htmlFor="image">Image: </label>
      <input
        id="image"
        name="image"
        type="text"
        value={form.image}
        onChange={handleChange}
      />

      <label htmlFor="name">Product: </label>
      <input
        id="name"
        name="name"
        type="text"
        value={form.name}
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

      <button type="submit">Add!</button>
    </form>
  );
}
