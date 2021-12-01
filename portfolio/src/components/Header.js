import React, { Fragment } from "react";
import AboutAndContact from "./AboutAndContact";
import "../Style.css";

const Header = () => {
  return (
    <Fragment>
      <header class="container fixed-top text-end mt-5">
        <h1 class="display-1">
          Hi. I am <span class="badge bg-secondary">Alex</span>
        </h1>
        <h2 class="display-3">Web Developer</h2>
        <div class="btn-group">
          <button
            class="btn btn-outline-danger text-uppercase"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#portfolio"
            aria-controls="portfolio"
          >
            my portfolio
          </button>
          <button
            class="btn btn-outline-danger"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#email"
            aria-controls="email"
          >
            <i class="bi bi-envelope-open"></i>
          </button>
        </div>
        <AboutAndContact />
      </header>
    </Fragment>
  );
};

export default Header;
