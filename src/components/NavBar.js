import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="Navbar">
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1> Shopping List </h1>
      <Link to="/create-list">
        <button>Create List</button>
      </Link>
    </div>
  );
}
