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
        <div className="offcanvas-body m-auto">
          <div className="card card-body shadow bg-dark2-transparent border border-secondary">
            <h5>Have a look at my work 😊</h5>
            <p className="mb-2 mt-2">
            Some projects are my own work and some are created coding along the tutors on the online courses I followed, using React, Html, Javascript, Css and Bootstrap 5 😊 
            </p>
            <ul className="list-group mt-4">
              <a
                href="https://omnifood-alw.netlify.app/"
                className="list-group-item list-group-item-danger list-group-item-action mb-3 rounded"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-globe2"> </i>{" "}
                <span className="ms-3">Omnifood website</span>
              </a>

              <a
                href="https://business-directory-alw.netlify.app/"
                className="list-group-item list-group-item-danger list-group-item-action mb-3 rounded"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-globe2"></i>
                <span className="ms-3">Business Directory website</span>
              </a>

              <a
                href="https://uhost-alw.netlify.app/"
                className="list-group-item list-group-item-danger list-group-item-action mb-3 rounded"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-globe2"></i>
                <span className="ms-3">uHost website</span>
              </a>

              <a
                href="https://find-users-app.netlify.app/"
                className="list-group-item list-group-item-danger list-group-item-action mb-3 rounded"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-globe2"> </i>
                <span className="ms-3">Find Users app</span>
              </a>
              <a
                href="https://lisbon-chairs-shop.netlify.app/"
                className="list-group-item list-group-item-danger list-group-item-action mb-3 rounded"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-globe2"></i>
                <span className="ms-3">Lisbon Chairs Shop website</span>
              </a>
              <a
                href="https://bankist-alw.netlify.app/"
                className="list-group-item list-group-item-danger list-group-item-action mb-3 rounded"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-globe2"></i>
                <span className="ms-3">Bankist website</span>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PortfolioOffCanvas;
