import { useState } from "react";
import Navigation from "../components/Navigation";
import UpperSide from "../components/UpperSide";
import News from "../components/News";
import Differences from "../components/Differences";
import MonthlyPhotos from "../components/MonthlyPhotos";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

function Homepage() {
  return (
    <>
      <Navigation />
      <UpperSide />
      <br />
      <News />
      <br />
      <Testimonial />
      <br />
      <Differences />
      <br />
      <MonthlyPhotos />
      <Footer />
    </>
  );
}

export default Homepage;
