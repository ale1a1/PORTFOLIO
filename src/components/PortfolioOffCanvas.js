import React, { Fragment } from "react";
import "../Style.css";

const PortfolioOffCanvas = () => {
  return (
    <Fragment>
      <div
        className="offcanvas offcanvas-start bg-dark portfolio"
        id="portfolio"
        tabIndex="-1"
        aria-labelledby="offcanvasPortfolioLabel"
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title text-danger">Portfolio</h1>
          <button
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p className="mb-4 mt-3">
            Have a look at my work 😊<br></br>
            Some projects are my own work and some are created coding along the
            tutors on the online courses I followed, using React, Html,
            Javascript, Css and Bootstrap 5 😊 <br></br>
          </p>
          <ul className="list-group">
            <a
              href="https://omnifood-alw.netlify.app/"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-3 mt-4 round-corners
            "
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-globe2"> </i> Omnifood
            </a>

            <a
              href="https://business-website-alw.herokuapp.com/"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-3 round-corners
            "
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-globe2"></i> Business Directory Website Themes
            </a>

            <a
              href="https://uhost-alw.netlify.app/"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-3 round-corners
            "
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-globe2"></i> uHost Website
            </a>

            <a
              href="https://find-users-app.netlify.app/"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-3 round-corners
            "
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-globe2"> </i> Find Users App
            </a>
            <a
              href="https://lisbon-chairs-shop.netlify.app/"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-3 round-corners
            "
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-globe2"></i> Lisbon Chairs Shop
            </a>
            <a
              href="https://bankist-website-jonas-schmedtm.herokuapp.com/"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-3 round-corners
            "
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-globe2"></i> Bankist Website
            </a>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default PortfolioOffCanvas;
