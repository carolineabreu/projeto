import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    quantity: 0,
  });

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/shopping-list-clz/${id}`
        );

        delete response.data._id;
        setForm({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchProduct();
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://ironrest.herokuapp.com/shopping-list-clz/${id}`,
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
      <label htmlFor="quantity">Quantity: </label>
      <input
        id="quantity"
        name="quantity"
        type="number"
        value={form.quantity}
        onChange={handleChange}
      />

      <button type="submit">Send</button>
    </form>
  );
}
