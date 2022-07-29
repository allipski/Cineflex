import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../reset.css";
import "../globalstyles.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Filme from "./Filme";

export default function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessoes/:idFilme" element={<Filme />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}
