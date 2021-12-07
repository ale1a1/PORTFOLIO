import React, { Fragment } from "react";
import "../Style.css";

const AboutAndContactOffCanvas = () => {
  return (
    <Fragment>
      <div
        className="offcanvas offcanvas-end bg-dark aboutAndContact"
        id="aboutAndContact"
        tabIndex="-1"
        aria-labelledby="offcanvasAboutAndContactLabel"
        style={{ height: "67.5vh" }}
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title text-danger">Info</h1>
          <button
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="card card-body text-start shadow offCanvasInfoCard">
            <h5 className="card-title text-danger ">About</h5>
            <div className="card-text">
              <h3 className="text-white-50 ms-3">Alessandro Ladu</h3>
              <ul className="list-unstyled ms-2 bulletPoint">
                <li>Freelance Web Developer</li>
                <li>DVM</li>
                <li>CEO at Pobastream</li>
                <li>Languages: HTML, JS, CSS, Sass</li>
              </ul>
            </div>
          </div>
          <div className="card card-body text-start shadow offCanvasInfoCard">
            <h5 className="card-title text-danger ">Contact</h5>
            <div className="card-text">
              <h3 className="text-white-50 ms-3">Get in touch</h3>
              <ul className="list-unstyled ms-4">
                <li>
                  {" "}
                  <i className="bi bi-house me-2 text-danger"></i> City:
                  Liverpool
                </li>
                <li>
                  {" "}
                  <i className="bi bi-signpost me-2 text-danger"></i> Street:
                  Poba Road
                </li>
                <li>
                  {" "}
                  <i className="bi bi-telephone me-2 text-danger"></i> Phone:
                  +447481184619
                </li>
                <li>
                  {" "}
                  <i className="bi bi-envelope me-2 text-danger"></i> Email:
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
