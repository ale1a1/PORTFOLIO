import React, { Fragment } from "react";
// import AboutAndContact from "./AboutAndContact";
import "../Style.css";

const Header = () => {
  return (
    <Fragment>
      <header className="fixed-top mt-1 mt-md-5 pt-md-5 headerSection">
        {/* //////////////////// Display only on screens >= md //////////////////////////  */}
        <div class="d-none d-md-flex justify-content-between mt-3 mx-3">
          <div>
            <h1 className="display-2 bg-grey-transparent shadow rounded p-2 ms-2">
              I am <span className="badge bg-secondary">Alex</span>
            </h1>
          </div>
          <div class="mt-5 d-flex flex-column me-3">
            <h2 className="display-4 bg-grey-transparent shadow rounded p-1 me-5 mb-3">
            Front End
            </h2>
            <h2 className="display-4 bg-grey-transparent shadow rounded p-1 text-center ms-5">
            Developer 
            </h2>
          </div>
        </div>
        <div className="d-none d-md-flex flex-column mt-1 pt-0">
          <button
            className="btn btn-lg btn-outline-warning bg-dark2-transparent col-1 ms-4 mt-2 mb-2 header-button-email"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#email"
            aria-controls="email"
          >
            <i className="bi bi-envelope-open"></i>
          </button>
          <button
            className="btn btn-lg btn-outline-danger text-uppercase fw-bold bg-dark2-transparent ms-4 mt-5 header-button-portfolio"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#portfolio"
            aria-controls="portfolio"
          >
            portfolio
          </button>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <h2 className="mt-5 mx-4 rounded display-3 text-center bg-secondary d-md-none">
          Front End Developer
        </h2>
        {/* <AboutAndContact /> */}
      </header>
    </Fragment>
  );
};

export default Header;
