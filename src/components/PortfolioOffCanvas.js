import React, { Fragment, useState } from "react";
import "../Style.css";
import ProjectModal from "./ProjectModal";

const PortfolioOffCanvas = () => {

  const [selectedProject, setSelectedProject] = useState(null); // State to hold the selected project

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName); // Update the selected project
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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
        <div className="offcanvas-body m-auto mt-md-5 mt-lg-0 portfolio-body">
          <div className="card card-body shadow bg-dark2-transparent border border-secondary">
            <h5>Have a look at my work 😊</h5>
            <p className="mb-2 mt-2">
            Some projects are my own work, while others were created by coding along with tutors in the online courses I followed.
            </p>
            <ul className="list-group mt-4">
              <div
                className="list-group-item list-group-item-danger list-group-item-action mb-3 mb-md-4 rounded"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleProjectClick("Quiz Game")}
              >
                <i className="bi bi-globe2"></i>
                <span className="ms-3">Quiz Game</span>
              </div>
              <div
                className="list-group-item list-group-item-danger list-group-item-action mb-3 mb-md-4 rounded"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleProjectClick("Su Sinnu")}
              >
                <i className="bi bi-globe2"></i>
                <span className="ms-3">Su Sinnu</span>
              </div>
              {/* <div
                className="list-group-item list-group-item-danger list-group-item-action mb-3 mb-md-4 rounded"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleProjectClick("Find Users app")}
              >
                <i className="bi bi-globe2"> </i>
                <span className="ms-3">Find Users</span>
              </div> */}
              <div               
                className="list-group-item list-group-item-danger list-group-item-action mb-3 mb-md-4 rounded"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleProjectClick("Omnifood")}
              >
                <i className="bi bi-globe2"> </i>{" "}
                <span className="ms-3">Omnifood</span>
              </div>
              <div
                className="list-group-item list-group-item-danger list-group-item-action mb-3 mb-md-4 rounded"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleProjectClick("Lisbon Chairs Shop")}
              >
                <i className="bi bi-globe2"></i>
                <span className="ms-3">Lisbon Chairs Shop</span>
              </div>
              <div
                className="list-group-item list-group-item-danger list-group-item-action mb-3 mb-md-4 rounded"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleProjectClick("Business Directory")}
              >
                <i className="bi bi-globe2"></i>
                <span className="ms-3">Business Directory</span>
              </div>
              <div
                className="list-group-item list-group-item-danger list-group-item-action mb-3 mb-md-4 rounded"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleProjectClick("Bankist")}
              >
                <i className="bi bi-globe2"></i>
                <span className="ms-3">Bankist</span>
              </div>
              <div
                className="list-group-item list-group-item-danger list-group-item-action mb-3 mb-md-4 rounded"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleProjectClick("uHost")}
              >
                <i className="bi bi-globe2"></i>
                <span className="ms-3">uHost</span>
              </div>          
            </ul>
          </div>
        </div>
      </div>
      {/* Conditionally render ProjectModal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </Fragment>
  );
};

export default PortfolioOffCanvas;
