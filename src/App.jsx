import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MisiuneViziune from "./pages/MisiuneViziune";
import Principii from "./pages/Principii";
import ProiectiiViitor from "./pages/ProiectiiViitor";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/MisiuneViziune" element={<MisiuneViziune />} />
        <Route path="/Principii" element={<Principii />} />
        <Route path="/ProiectiiViitor" element={<ProiectiiViitor />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
