<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Home } from "./pages/Home";

=======
=======
>>>>>>> 44c70981509c837ce25e0753a3e67b4a777ca0cd
import NavBar from "./components/Navbar/NavBar";
import { CreateList } from "./pages/CreateList";
import { Home } from "./pages/Home";
import { ListPage } from "./pages/ListPage";
<<<<<<< HEAD
>>>>>>> 3538f7cc9a6d96554db5aabcb5c026f6085e0e77
=======
>>>>>>> 44c70981509c837ce25e0753a3e67b4a777ca0cd

function App() {
  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <Routes>
      <Route path="/" element={<Home />} />
=======
=======
>>>>>>> 44c70981509c837ce25e0753a3e67b4a777ca0cd
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-list" element={<CreateList />} />
        <Route path="/ListPage" element={<ListPage />} />
<<<<<<< HEAD
>>>>>>> 3538f7cc9a6d96554db5aabcb5c026f6085e0e77
=======
>>>>>>> 44c70981509c837ce25e0753a3e67b4a777ca0cd
      </Routes>
    </div>
  );
}

export default App;
