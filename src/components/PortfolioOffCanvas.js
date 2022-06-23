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
            Have a look at my work ! <br></br>
            Some projects are my own work and some are created coding along the
            tutors on the online courses I followed, using React, Html,
            Javascript, Css, and or Bootstrap 5. <br></br>
          </p>
          <ul className="list-group">
            <a
              href="https://locum-shifts.herokuapp.com/"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-globe2"> </i> Locum Shifts Tracker
            </a>
            <a
              href="https://merry-gingersnap-1ee2b5.netlify.app/"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-globe2"></i> Bankist App
            </a>
            <a
              href="https://business-website-alw.herokuapp.com/"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-globe2"></i> Business Directory Website Themes
            </a>

            <a
              href="https://bankist-website-jonas-schmedtm.herokuapp.com/"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-globe2"></i> Bankist Website
            </a>
            <a
              href="https://funny-clafoutis-9d206c.netlify.app/"
              className="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-globe2"> </i> Find Users App
            </a>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default PortfolioOffCanvas;
