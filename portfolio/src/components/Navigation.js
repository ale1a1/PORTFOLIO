import React from "react";

const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="container-fluid">
        <a href="#home" class="navbar-brand">
          <span class="badge bg-danger shadow">Alessandro Ladu</span>
        </a>
        <button
          class="navbar-toggler"
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
            <li class="nav-item">
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
            <li class="nav-item">
              <a
                href="#about"
                role="button"
                class="nav-link"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="about"
              >
                About
              </a>
            </li>
            <li class="nav-item">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
