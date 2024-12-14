import { useState } from "react";
import Navigation from "../components/Navigation";
import UpperSide from "../components/UpperSide";
import News from "../components/News";
import Differences from "../components/Differences";
import MonthlyPhotos from "../components/MonthlyPhotos";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import ChatBot from "../components/ChatBot";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Homepage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#up") {
      const element = document.getElementById("up");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Navigation />
      <UpperSide />
      <News />
      <br />
      <Testimonial />
      <br />
      <Differences />
      <br />
      <MonthlyPhotos />
      <ChatBot />
      <Footer />
    </>
  );
}

export default Homepage;
