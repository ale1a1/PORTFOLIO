import React, { Fragment } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import PortfolioOffCanvas from "./components/PortfolioOffCanvas";
import AboutAndContactOffCanvas from "./components/AboutAndContactOffCanvas";
import AboutAndContact from "./components/AboutAndContact";
import EmailOffCanvas from "./components/EmailOffCanvas";
import Footer from "./components/Footer";

import "./Style.css";

function App() {

  function setContainerHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  window.addEventListener('resize', setContainerHeight);
  setContainerHeight(); 

  return (
    <Fragment>
      <Navigation />
      <Header />   
      <AboutAndContact />
      <PortfolioOffCanvas />
      <AboutAndContactOffCanvas />
      <EmailOffCanvas />
      <Footer />
    </Fragment>
  );
}

export default App;
