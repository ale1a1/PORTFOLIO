import React, { useEffect } from "react";
import PropTypes from "prop-types";

const ProjectModal = ({ project, onClose }) => {

// Define the projects data
const projects = [
  {
    name: "Omnifood website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    technologies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    testInfo: null,
    url: 'https://omnifood-alw.netlify.app/' 
  },
  {
    name: "Business Directory website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    technologies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    testInfo: null,
    url:'https://business-directory-alw.netlify.app/'
  },
  {
    name: "uHost website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    technologies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    testInfo: null,
    url: 'https://uhost-alw.netlify.app/'
  },
  {
    name: "Find Users app",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    technologies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    testInfo: 'You can either create a profile and then login, or use the test credential provided - see the login section',
    url:'https://find-users-app.netlify.app/'
  },
  {
    name: "Lisbon Chairs Shop website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    technologies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    testInfo: null,
    url:'https://lisbon-chairs-shop.netlify.app/'
  },
  {
    name: "Bankist website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    technologies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    testInfo: null,
    url: 'https://bankist-alw.netlify.app/'
  },
  {
    name: "Quiz Game",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    technologies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    testInfo: "You can either play the game as a guest, or login using Google",
    url: 'https://play-quiz-game-now.netlify.app/'
  },
];

// Find the project object that matches the name passed as the `project` prop
const selectedProject = projects.find(p => p.name === project);

// Close the modal when clicking outside the modal content
useEffect(() => {
  const handleClickOutside = (event) => {
    const modalContent = document.querySelector(".modal-content");
    if (modalContent && !modalContent.contains(event.target)) {
      onClose();  // Close modal if clicked outside
    }
  };

  // Add event listener on mount
  document.addEventListener("mousedown", handleClickOutside);

  // Clean up the event listener on unmount
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [onClose]);

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="projectModalLabel"
      aria-hidden="true"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
    >
      <div className="modal-dialog modal-dialog-centered text-light" role="document">
        <div className="modal-content project-modal">
          <div className="modal-header project-modal-header 
          ">
            <h4 className="modal-title text-danger" id="projectModalLabel">
            {selectedProject ? selectedProject.name : "Project Not Found"}
            </h4>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <h5>Description</h5>
              <p>{selectedProject.description}</p>
            </div>
            <div> 
              <h5>Technologies Used</h5>
              <p>{selectedProject.technologies}</p>
            </div>
            {selectedProject.testInfo && (
              <div>
                <h5>Test info</h5>
                <p>{selectedProject.testInfo}</p>
              </div>
            )}
            <a
              href= {selectedProject ? selectedProject.url : "#"}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-success open-project-btn float-end"
            >
              OPEN PROJECT
            </a>
          </div>   
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
