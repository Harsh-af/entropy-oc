// App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar"; 
import Home from "./Pages/Home";

function App() {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", overflow: "hidden" }}>
      <Home />
    </div>
  );
}

export default App;
