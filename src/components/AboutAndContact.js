import React from "react";
import "../Style.css";

const AboutAndContact = () => {
  return (
    <div className="row mt-3 removeOnSmallScreens">
      <div className="col-md-6 mt-3">
        <div className="collapse multi-collapse" id="about">
          <div className="card card-body text-start shadow bg-dark-transparent">
            <h5 className="card-title text-danger ">About</h5>
            <div className="card-text">
              <h3 className="text-white-50 ms-3">Alessandro Ladu</h3>
              <ul className="list-unstyled ms-2 bulletPoint">
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
        </div>
      </div>
      <div
        className="col-md-6 mt-3 removeOnSmallScreens {
    display: none;
  }"
      >
        <div className="collapse multi-collapse" id="contact">
          <div className="card card-body text-start shadow bg-dark-transparent">
            <h5 className="card-title text-danger ">Contact</h5>
            <div className="card-text">
              <h3 className="text-white-50 ms-3">Get in touch</h3>
              <ul className="list-unstyled ms-5">
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
    </div>
  );
};

export default AboutAndContact;
