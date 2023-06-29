import React, { Fragment } from "react";
// import AboutAndContact from "./AboutAndContact";
import "../Style.css";

const Header = () => {
  return (
    <Fragment>
      <header className="">
        <h1 className="d-none">
          I am <span className="badge bg-secondary">Alex</span>
        </h1>
        <h2 className="mt-5 display-3 text-center bg-secondary">
          Front End Developer
        </h2>
        <div className="d-none">
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
        {/* <AboutAndContact /> */}
      </header>
    </Fragment>
  );
};

export default Header;
