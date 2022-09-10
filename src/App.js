import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import { AddProduct } from "./pages/AddProduct";
import { EditPage } from "./pages/EditPage";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/:id" element={<ProductPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>

    </div>
  );
}

export default App;
