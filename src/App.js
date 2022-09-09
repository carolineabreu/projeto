import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
