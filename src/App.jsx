import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MisiuneViziune from "./pages/MisiuneViziune";
import Principii from "./pages/Principii";
import ProiectiiViitor from "./pages/ProiectiiViitor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/MisiuneViziune" element={<MisiuneViziune />} />
        <Route path="/Principii" element={<Principii />} />
        <Route path="/ProiectiiViitor" element={<ProiectiiViitor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
