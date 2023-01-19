import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// Pages
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
      <BrowserRouter>

        <header>
          <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>
  );
}

export default App;
