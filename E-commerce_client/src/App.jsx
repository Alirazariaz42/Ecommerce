import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { About } from "./pages/about";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold  underline  container">Hello world!</h1>
      <button className="btn btn-success">Click Me</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
