import React, { Fragment } from "react";
// import AboutAndContact from "./AboutAndContact";
import "../Style.css";

const Header = () => {
  return (
    <Fragment>
      <header className="fixed-top mt-1 mt-md-5 pt-md-5 d-md-flex">
        {/* //////////////////// Display only on screens >= md //////////////////////////  */}
        <div class="d-none d-md-flex justify-content-between mt-3 ms-4">
          <h1 className="display-3 bg-dark p-2">
            I am <span className="badge bg-secondary">Alex</span>
          </h1>
          <div class="">
            <h2 className="display-4 bg-dark p-2">
            Front End
            </h2>
            <h2 className="display-4 bg-dark p-2">
            Developer 
            </h2>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <h2 className="mt-5 mx-4 rounded display-3 text-center bg-secondary d-md-none">
          Front End Developer
        </h2>
        <div className="d-none">
          <button
            className="btn btn-lg btn-outline-danger text-uppercase bg-dark2-transparent mt-5 me-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#portfolio"
            aria-controls="portfolio"
          >
            portfolio
          </button>
          <button
            className="btn btn-lg btn-outline-warning bg-dark2-transparent mt-5"
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
