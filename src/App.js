import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import { Home } from "./pages/Home";
import {Form} from "./components/Form"
import "./App.css"

function App() {
  return (
    <div className = "container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/create-list" element = {<Form/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
