import React, { Fragment } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import PortfolioOffCanvas from "./components/PortfolioOffCanvas";
import AboutAndContactOffCanvas from "./components/AboutAndContactOffCanvas";
import AboutAndContact from "./components/AboutAndContact";
import EmailOffCanvas from "./components/EmailOffCanvas";
import Footer from "./components/Footer";

import "./Style.css";
// import img from "../src/Background2.jpg";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      {/* <img
        src={img}
        alt="profile-pic"
        class="position-absolute top-0 img-fluid profile-pic backgroundPic"
      /> */}
      <AboutAndContact />
      <PortfolioOffCanvas />
      <AboutAndContactOffCanvas />
      <EmailOffCanvas />
      <Footer />
    </Fragment>
  );
}

export default App;
