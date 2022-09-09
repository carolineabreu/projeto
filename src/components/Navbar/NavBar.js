import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="Navbar">
      <Link to="/Home">
        <button>Home</button>
      </Link>
      <h1> Shopping List </h1>
      <Link to="/CreateList">
        <button>Create List</button>
      </Link>
    </div>
  );
}
