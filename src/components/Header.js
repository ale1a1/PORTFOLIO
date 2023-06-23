import React, { Fragment } from "react";
import AboutAndContact from "./AboutAndContact";
import "../Style.css";

const Header = () => {
  return (
    <Fragment>
      <header className="fixed-top text-end mt-5 headerContainer">
        <h1 className="display-3 cssSmallScreens mt-5 headerH1">
          I am <span className="badge bg-secondary">Alex</span>
        </h1>
        <h2 className="display-3 cssSmallScreens cssSmallScreensSmallerFont headerH2 mt-5">
          Front End Developer
        </h2>
        <div className="removeOnSmallScreens headerButtons mt-5">
          <button
            className="btn btn-lg btn-outline-danger text-uppercase bg-dark2-transparent cssSmallScreens mt-5 me-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#portfolio"
            aria-controls="portfolio"
          >
            portfolio
          </button>
          <button
            className="btn btn-lg btn-outline-warning bg-dark2-transparent cssSmallScreens mt-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#email"
            aria-controls="email"
          >
            <i className="bi bi-envelope-open"></i>
          </button>
        </div>
        <AboutAndContact />
      </header>
    </Fragment>
  );
};

export default Header;
