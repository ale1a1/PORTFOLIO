import React from "react";
import "../Style.css";

const AboutAndContact = () => {
  return (
    <div className="row d-none d-md-flex about-and-contact">
      <div className="col-md-7">
        <div className="collapse multi-collapse" id="about">
          <div className="card card-body text-start shadow bg-dark2-transparent">
            <h3 className="text-danger ms-3"><strong>Technical Skills</strong></h3>
            <div className="card-text">
              <ul className="list-unstyled">
                <li><strong>Languages:</strong> HTML, CSS, Sass, JavaScript, TypeScript</li>
                <li><strong>Frameworks:</strong> React, Angular, Svelte-kit, Bootstrap, Tailwind CSS  </li>
                <li><strong>Design tools:</strong> Figma, Webflow, MockFlow</li>
                <li><strong>Database:</strong> Firebase, SQL (MySQL, SSMS)</li>
                <li><strong>Collaboration Tools:</strong> Airtable, Confluence, Trello</li>
                <li><strong>Cloud platforms:</strong> Heroku, Netlify</li>
                <li><strong>Version control systems:</strong> Git, GitHub, GitLab</li>
                <li><strong>IDE:</strong> VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="collapse multi-collapse" id="contact">
          <div className="card card-body text-start shadow bg-dark-transparent">
            <h3 className="text-danger ms-3"><strong>Contact</strong></h3>
            <div className="card-text">
              <ul className="list-unstyled ms-3">
                <li>
                  <i className="bi bi-house me-2 text-danger"></i> City:
                  Liverpool
                </li>
                <li>
                  <i className="bi bi-signpost me-2 text-danger"></i> Street:
                  Front End Developers Street
                </li>
                <li>
                  <i className="bi bi-telephone me-2 text-danger"></i> Phone:
                  +447481184619
                </li>
                <li>
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
