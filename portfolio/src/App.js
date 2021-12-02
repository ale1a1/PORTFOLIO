import React, { Fragment } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import PortfolioOffCanvas from "./components/PortfolioOffCanvas";

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
      />
      <PortfolioOffCanvas />
    </Fragment>
  );
}

export default App;
