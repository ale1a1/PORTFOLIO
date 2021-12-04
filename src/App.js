import React, { Fragment } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import PortfolioOffCanvas from "./components/PortfolioOffCanvas";
import EmailOffCanvas from "./components/EmailOffCanvas";
import Footer from "./components/Footer";

import img from "../src/Background2.jpg";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <img
        src={img}
        alt="profile-pic"
        class="position-absolute top-0 img-fluid profile-pic"
        style={{"height":"100vh"}}
      />
      <PortfolioOffCanvas />
      <EmailOffCanvas />
      <Footer />
    </Fragment>
  );
}

export default App;
