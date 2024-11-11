import { useState } from "react";
import Navigation from "../components/Navigation";
import UpperSide from "../components/UpperSide";
import News from "../components/News";
import Differences from "../components/Differences";
import MonthlyPhotos from "../components/MonthlyPhotos";
import Footer from "../components/Footer";

function Homepage() {
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

export default Homepage;
