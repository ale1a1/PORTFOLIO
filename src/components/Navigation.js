import React from "react";
import "../Style.css";

const Navigation = () => {
  return (
    <nav class="navbar-expand-md navbar navbar-dark fixed-top navBarItem">
      <div class="container-fluid">
        <a href="#home" class="navbar-brand">
          <span class="badge bg-danger shadow">Alessandro Ladu</span>
        </a>
        <button
          class="navbar-toggler navBarToggler bg-dark-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMain">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ "z-index": "10" }}
          >
            <li class="nav-item removeOnSmallScreens">
              <a
                href="#info"
                class="nav-link active"
                data-bs-toggle="collapse"
                data-bs-target=".multi-collapse"
                aria-expanded="false"
                aria-controls="about contact"
              >
                Info
              </a>
            </li>
            <li class="nav-item removeOnSmallScreens">
              <a
                data-bs-toggle="collapse"
                href="#about"
                role="button"
                class="nav-link"
                aria-expanded="false"
                aria-controls="about"
              >
                About
              </a>
            </li>
            <li class="nav-item removeOnSmallScreens">
              <a
                href="#contact"
                role="button"
                class="nav-link"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="contact"
              >
                Contact
              </a>
            </li>

            <li class="nav-item">
              <button
                class="btn btn-outline-success text-uppercase bg-dark2-transparent cssSmallScreens hide showOnSmallScreen marginSmallScreen sizeSmallScreen"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#aboutAndContact"
                aria-controls="aboutAndContact"
              >
                info
              </button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-outline-danger text-uppercase bg-dark2-transparent cssSmallScreens hide showOnSmallScreen marginSmallScreen2 sizeSmallScreen"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#portfolio"
                aria-controls="portfolio"
              >
                portfolio
              </button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-outline-warning bg-dark2-transparent cssSmallScreens hide showOnSmallScreen marginSmallScreen2 sizeSmallScreen"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#email"
                aria-controls="email"
              >
                <i class="bi bi-envelope-open"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
