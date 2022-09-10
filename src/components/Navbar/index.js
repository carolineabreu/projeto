import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <div className="navbar">
      <h1>Shopping List</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/add-product">
        <button>Add Product!</button>
      </Link>
    </div>
  );
}
