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
          <p>
            Have a look at my personal work. <br></br>
            You will find some static and dynamic web applications, alongside
            some small Javascript games, built using React, Html, Javascript,
            Css, and or Bootstrap 5. <br></br>
            I hope you will enjoy it!
          </p>
          <ul className="list-group">
            <a
              href="https://locum-shifts.herokuapp.com/"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
            >
              <i className="bi bi-globe2"> </i> Locum shifts tracker
            </a>
            <a
              href="a"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
            >
              <i className="bi bi-globe2"> </i> Bio website theme
            </a>
            <a
              href="a"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
            >
              <i className="bi bi-globe2"></i> Business Directory Website Themes
            </a>
            <a
              href="a"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
            >
              <i className="bi bi-globe2"></i> Resume Website Themes
            </a>
            <a
              href="a"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
            >
              <i className="bi bi-globe2"></i> Photo sharing website
            </a>
            <a
              href="a"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
            >
              <i className="bi bi-globe2"></i> E-Commerce website
            </a>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default PortfolioOffCanvas;
