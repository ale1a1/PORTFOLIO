import React, { Fragment } from "react";
import "../Style.css";

const AboutAndContactOffCanvas = () => {
  return (
    <Fragment>
      <div
        className="offcanvas offcanvas-end bg-dark"
        id="aboutAndContact"
        tabIndex="-1"
        aria-labelledby="offcanvasAboutAndContactLabel"
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
          <div className="card card-body text-start shadow bg-dark2-transparent border border-secondary">
            <h5 className="card-title text-danger ">About</h5>
            <div className="card-text">
              <ul className="list-unstyled ms-2">
                <li>Languages: HTML, CSS, Sass, JavaScript, TypeScript</li>
                <li>Frameworks: React, Angular, Svelte-kit, Bootstrap, Tailwind CSS  </li>
                <li>Design tools: Figma, Webflow, MockFlow</li>
                <li>Database: Firebase, SQL (MySQL, SSMS)</li>
                <li>Collaboration Tools: Airtable, Confluence, Trello</li>
                <li>Cloud platforms: Heroku, Netlify</li>
                <li>Version control systems: Git, GitHub, GitLab</li>
                <li>IDE: VS Code</li>
              </ul>
            </div>
          </div>
          <div className="card card-body text-start shadow bg-dark2-transparent border border-secondary">
            <h5 className="card-title text-danger ">Contact</h5>
            <div className="card-text">
              <ul className="list-unstyled ms-4">
                <li>
                  {" "}
                  <i className="bi bi-house me-2 text-danger"></i> City:
                  Liverpool
                </li>
                <li>
                  {" "}
                  <i className="bi bi-signpost me-2 text-danger"></i> Street:
                  Front End Developers Street
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
