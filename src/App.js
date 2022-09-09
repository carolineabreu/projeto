import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import { CreateList } from "./pages/CreateList";
import { Home } from "./pages/Home";
import { ListPage } from "./pages/ListPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-list" element={<CreateList />} />
        <Route path="/:id" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;
