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
          className="navbar-toggler navBarToggler bg-dark-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbarList me-4 mt-2" id="navbarMain">
          <ul
            className="navbar-nav me-auto mb-2"
            style={{ zIndex: "10" }}
          >
            <li className="nav-item removeOnSmallScreens">
              <a
                href="#info"
                className="nav-link navBarItem me-1 btn btn-sm btn-outline-dark btn-success"
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
                className="nav-link navBarItem me-1 btn btn-sm btn-outline-dark btn-light"
                aria-expanded="false"
                aria-controls="about"
              >
                About
              </a>
            </li>
            <li className="nav-item removeOnSmallScreens">
              <a
                href="#contact"
                className="nav-link navBarItem btn btn-sm btn-outline-dark btn-danger"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="contact"
              >
                Contact
              </a>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-outline-danger text-uppercase bg-dark2-transparent cssSmallScreens hide showOnSmallScreen marginSmallScreen3 sizeSmallScreen"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#portfolio"
                aria-controls="portfolio"
              >
                portfolio
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-success text-uppercase bg-dark2-transparent cssSmallScreens hide showOnSmallScreen marginSmallScreen2 sizeSmallScreen"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#aboutAndContact"
                aria-controls="aboutAndContact"
              >
                info
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-warning bg-dark2-transparent cssSmallScreens hide showOnSmallScreen marginSmallScreen2 sizeSmallScreen"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#email"
                aria-controls="email"
              >
                <i className="bi bi-envelope-open"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
