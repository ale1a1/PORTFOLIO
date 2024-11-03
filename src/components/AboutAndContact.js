import React from "react";
import "../Style.css";

const AboutAndContact = () => {
  return (
    <div className="row d-none d-md-flex about-and-contact mx-auto justify-content-center justify-content-lg-start">
      <div className="col-md-7 col-lg-5 skills">
        <div className="collapse multi-collapse" id="about">
          <div className="card card-body text-start shadow bg-dark2-transparent bg-black">
            <h3 className="text-danger ms-3"><strong>Technical Skills</strong></h3>
            <div className="card-text">
              <ul className="list-unstyled bulletPoint">
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">Languages:</span>
                  <span>HTML, CSS, Sass, JavaScript, TypeScript</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold frameworks">Frameworks:</span>
                  <span>React, Angular, Nuxt, Svelte-kit, jQuery, Bootstrap, Tailwind CSS</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">Unit Testing:</span>
                  <span>Jest, Vitest</span>
                </li>                
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">Design tools:</span>
                  <span>Figma, Webflow, MockFlow</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">CMS:</span>
                  <span>Squarespace</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-1 fw-bold">Database (basic):</span>
                  <span>Firebase, SQL (MySQL, SSMS)</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">Collaboration Tools:</span>
                  <span>Airtable, Confluence, Trello</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">Cloud platforms:</span>
                  <span>Heroku, Netlify</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">Version control systems:</span>
                  <span>Git, GitHub, GitLab</span>
                </li>
                {/* <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">IDE:</span>
                  <span>VS Code</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5 col-lg-3 contact">
        <div className="collapse multi-collapse" id="contact">
          <div className="card card-body text-start shadow bg-dark2-transparent bg-black">
            <h3 className="text-danger ms-3"><strong>Contact</strong></h3>
            <div className="card-text">
              <ul className="list-unstyled">                            
                <li>
                  <i className="bi bi-house text-danger me-1"></i> City: Liverpool
                </li>
                <li>
                  <i className="bi bi-signpost text-danger me-1"></i> Street: Front End Developers St.
                </li>
                <li>
                  <i className="bi bi-telephone text-danger me-1"></i> Phone: +447481184619
                </li>
                <li>
                  <i className="bi bi-envelope text-danger me-1"></i> Email: ale1a184@gmail.com
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
