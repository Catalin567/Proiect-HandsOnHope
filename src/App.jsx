import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MisiuneViziune from "./pages/MisiuneViziune";
import Principii from "./pages/Principii";
import ProiectiiViitor from "./pages/ProiectiiViitor";
import Contact from "./pages/Contact";
import SolicitaAjutor from "./pages/SolicitaAjutor";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/MisiuneViziune" element={<MisiuneViziune />} />
        <Route path="/Principii" element={<Principii />} />
        <Route path="/ProiectiiViitor" element={<ProiectiiViitor />} />
        <Route path="/solicita-ajutor" element={<SolicitaAjutor />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
