import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Home } from "./pages/Home";

=======
import NavBar from "./components/Navbar/NavBar";
import { CreateList } from "./pages/CreateList";
import { Home } from "./pages/Home";
import { ListPage } from "./pages/ListPage";
>>>>>>> 3538f7cc9a6d96554db5aabcb5c026f6085e0e77

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Routes>
      <Route path="/" element={<Home />} />
=======
      <NavBar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path="/crate-list" element={<CreateList />} />
        <Route path="/list-page" element={<ListPage />} />
>>>>>>> 3538f7cc9a6d96554db5aabcb5c026f6085e0e77
      </Routes>
    </div>
  );
}

export default App;
