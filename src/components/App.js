import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../reset.css";
import "../globalstyles.css";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Listafilmes />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}
