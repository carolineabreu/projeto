import { Routes, Route } from "react-router-dom";
import { CreateList } from "./pages/CreateList";
import { Home } from "./pages/Home";
import { ListPage } from "./pages/ListPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/create-list" element={<CreateList />} />
      </Routes>
    </div>
  );
}

export default App;
