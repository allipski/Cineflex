import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../reset.css";
import "../globalstyles.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Filme from "./Filme";
import Assentos from "./Assentos"
import Sucesso from "./Sucesso";

export default function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessoes/:idFilme" element={<Filme />} />
            <Route path="/assentos/:idSessao" element={<Assentos />} />
            <Route path="/sucesso" element={<Sucesso />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}
