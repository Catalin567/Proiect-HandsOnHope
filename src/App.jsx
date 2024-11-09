import { useState } from "react";
import "./App.css";
import News from "./components/News";
import Differences from "./components/Differences";
import MonthlyPhotos from "./components/MonthlyPhotos";
import Footer from "./components/Footer";
import UpperSide from "./components/UpperSide";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <UpperSide />
      <br />
      <News />
      <br />
      <Differences />
      <br />
      <MonthlyPhotos />
      <Footer />
    </>
  );
}

export default App;
