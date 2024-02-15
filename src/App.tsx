import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { Navbar } from "./Navbar";
import "./App.css";

function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Router />
  </BrowserRouter>
  );
}

export default App;
