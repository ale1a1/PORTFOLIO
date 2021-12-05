import React, { Fragment } from "react";
import "../Style.css";

const AboutAndContactOffCanvas = () => {
  return (
    <Fragment>
      <div
        class="offcanvas offcanvas-end bg-dark aboutAndContact"
        id="aboutAndContact"
        tabindex="-1"
        aria-labelledby="offcanvasAboutAndContactLabel"
      >
        <div class="offcanvas-header">
          <h1 class="offcanvas-title text-danger">Info</h1>
          <button
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
            <div class="card card-body text-start shadow offCanvasInfoCard">
              <h5 class="card-title text-danger ">About</h5>
              <div class="card-text">
                <h3 class="text-white-50 ms-3">Alessandro Ladu</h3>
                <ul class="list-unstyled ms-5">
                  <li>CEO at Pobastream</li>
                  <li>Freelance Web Developer</li>
                  <li>Locum Vet Surgeon</li>
                  <li>COD player</li>
                </ul>
              </div>
            </div>
            <div class="card card-body text-start shadow offCanvasInfoCard">
              <h5 class="card-title text-danger ">Contact</h5>
              <div class="card-text">
                <h3 class="text-white-50 ms-3">Get in touch</h3>
                <ul class="list-unstyled ms-5">
                  <li>
                    {" "}
                    <i class="bi bi-house me-2 text-danger"></i> City: Mulargia
                  </li>
                  <li>
                    {" "}
                    <i class="bi bi-signpost me-2 text-danger"></i> Street:
                    Coddadi Street
                  </li>
                  <li>
                    {" "}
                    <i class="bi bi-telephone me-2 text-danger"></i> Phone:
                    2837348384384
                  </li>
                  <li>
                    {" "}
                    <i class="bi bi-envelope me-2 text-danger"></i> Email:
                    ale1a184@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default AboutAndContactOffCanvas;
