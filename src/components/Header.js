import React, { Fragment } from "react";
import AboutAndContact from "./AboutAndContact";
import "../Style.css";

const Header = () => {
  return (
    <Fragment>
      <header className="container fixed-top text-end mt-5">
        <h1 className="display-1 cssSmallScreens">
          Hi. I am <span className="badge bg-secondary">Alex</span>
        </h1>
        <h2 className="display-3 cssSmallScreens cssSmallScreensSmallerFont">Web Developer</h2>
        <div className="btn-group margin removeOnSmallScreens">
          <button
            className="btn btn-outline-danger text-uppercase bg-dark2-transparent cssSmallScreens"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#portfolio"
            aria-controls="portfolio"
          >
            my portfolio
          </button>
          <button
            className="btn btn-outline-warning bg-dark2-transparent cssSmallScreens"
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
