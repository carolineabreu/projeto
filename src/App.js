import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import { AddProduct } from "./pages/AddProduct";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>

    </div>
  );
}

export default App;
