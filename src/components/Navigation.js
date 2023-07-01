import React from "react";
import "../Style.css";

const Navigation = () => {
  return (
    <nav className="navbar-expand-md navbar navbar-dark fixed-top">
      <div className="container-fluid">
        <a href="#home" className="navbar-brand">
          <span className="badge bg-danger shadow">Alessandro Ladu</span>
        </a>
        <button
          className="navbar-toggler navbarToggler bg-dark-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-3" id="navbarMain">
          <ul
            className="navbar-nav align-items-end"
          >
            <li className="nav-item">
              <a
                href="#info"
                className="nav-link btn btn-sm btn-outline-dark btn-success d-none"
                data-bs-toggle="collapse"
                data-bs-target=".multi-collapse"
                aria-expanded="false"
                aria-controls="about contact"
              >
                Info
              </a>
            </li>
            <li className="nav-item removeOnSmallScreens">
              <a
                data-bs-toggle="collapse"
                href="#about"
                className="nav-link btn btn-sm btn-outline-dark btn-light d-none"
                aria-expanded="false"
                aria-controls="about"
              >
                About
              </a>
            </li>
            <li className="nav-item removeOnSmallScreens">
              <a
                href="#contact"
                className="nav-link btn btn-sm btn-outline-dark btn-danger d-none"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="contact"
              >
                Contact
              </a>
            </li>
{/* ///////////////////////    mobile screens  /////////////////////////////////////////////////////////////////  */}
            <div class="mt-5 row">
              <ul class="navbar-nav justify-content-end pe-1">
                <li className="nav-item text-end mt-2">
                  <button
                    className="btn btn-outline-warning bg-dark2-transparent"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#email"
                    aria-controls="email"
                  >
                    <i className="bi bi-envelope-open"></i>
                  </button>
                </li>
                <li className="nav-item text-end mt-2">
                  <button
                    className="btn btn-outline-success text-uppercase bg-dark2-transparent"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#aboutAndContact"
                    aria-controls="aboutAndContact"
                  >
                    info
                  </button>
                </li>
                <li className="nav-item text-end mt-2">
                  <button
                    className="btn btn-outline-danger text-uppercase bg-dark2-transparent"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#portfolio"
                    aria-controls="portfolio"
                  >
                    portfolio
                  </button>
                </li>
              </ul>                            
            </div>            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
