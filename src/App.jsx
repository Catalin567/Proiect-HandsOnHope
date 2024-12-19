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
import CeFacem from "./pages/CeFacem";
import Dashboard from "./pages/Dashboard";
import Campanii from "./pages/Campanii";
import Voluntariat from "./pages/Voluntariat";
import Doneaza from "./pages/Doneaza";
import Redirectioneaza from "./pages/Redirectioneaza";
import CazurileSustinute from "./pages/dashboard/CazurileSustinute";
import DatePreferinte from "./pages/dashboard/DatePreferinte";
import IntrebariSugestii from "./pages/dashboard/IntrebariSugestii";
import HartaRo from "./pages/HartaRo";
import RedirectioneazaPF from "./components/RedirectioneazaPF";
import RedirectioneazaPJ from "./components/RedirectioneazaPJ";

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
        <Route path="/CeFacem" element={<CeFacem />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Campanii" element={<Campanii />} />
        <Route path="/Voluntariat" element={<Voluntariat />} />
        <Route path="/Doneaza" element={<Doneaza />} />
        <Route path="/Redirectioneaza" element={<Redirectioneaza />} />
        <Route path="/HartaRo" element={<HartaRo />} />
        <Route path="/RedirectioneazaPF" element={<RedirectioneazaPF />} />
        <Route path="/RedirectioneazaPJ" element={<RedirectioneazaPJ />} />
        <Route
          path="/Dashboard/CazurileSustinute"
          element={<CazurileSustinute />}
        />
        <Route path="/Dashboard/DatePreferinte" element={<DatePreferinte />} />
        <Route
          path="/Dashboard/IntrebariSugestii"
          element={<IntrebariSugestii />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
