import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./pages/about";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Register" element={<Register />} />{" "}
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
