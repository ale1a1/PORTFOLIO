import React, { useEffect } from "react";
import PropTypes from "prop-types";

const ProjectModal = ({ project, onClose }) => {

// Define the projects data
const projects = [
  {
    name: "Quiz Game",
    description: "The '<i>Quiz Game</i>' is a personal project that allows users to play a 10-question quiz across a wide variety of categories, either as a guest or by logging in with their Google account. <br> The game tracks scores for logged-in users, displaying their progress on a leaderboard and within a personal scores section.",
    technologies: "The app is built with <b>Vue 3</b>, <b>HTML</b>, <b>TypeScript</b>, and <b>CSS</b>, utilizing a <b>public API</b> for retrieving questions and <b>Firebase</b> for database management and Google authentication. <br> It is hosted on <b>Netlify</b>, providing easy access and reliable performance.",
    url: 'https://play-quiz-game-now.netlify.app/'
  },
  {
    "name": "Su Sinnu",
    "description": "'<i>Su Sinnu</i>' is an e-commerce website developed for a real business in Italy that specializes in agricultural products and includes a Veterinary Pharmacy. <br> Designed to meet the client's specific requirements, the website offers an intuitive and seamless navigation experience. <br> Rather than a traditional e-commerce platform with online transactions, the online shop is intentionally structured to align with the client’s operational preferences. It includes a custom functionality that allows users to add items to their shopping cart, download a pre-order file, and finalize their purchase by contacting the store via phone. <br> Given the enhanced digital presence, it is anticipated that the business may soon opt to integrate full e-commerce capabilities, enabling customers to complete transactions directly on the website.",
    "technologies": "To align with the client’s request for a platform that allows them to independently and frequently update product listings, pricing, and content without technical assistance, the website is built using <b>Squarespace</b>, complemented by multiple injected <b>CSS</b> and <b>JS</b> scripts to enhance UI/UX and fulfill specific client needs. <br> Hosting is provided by <b>Squarespace</b>.",
    "url": "https://susinnu.it/"
  },   
  {
    name: "Find Users app",
    description: "The '<i>Find Users app</i>' is a personal project that allows users to create profiles, browse a user list, retrieve details, and save favorites, designed as a boilerplate prototype for user directory and profile management functionality.",
    technologies: "The <b>Frontend</b> is built using <b>React</b>, <b>Html</b>, <b>Bootstrap</b>, <b>CSS</b>, and <b>JavaScript</b>, and it is hosted on <b>Netlify</b>.<br>The <b>Backend</b> is built using <b>Node.js</b> and <b>Express.js</b>, providing a robust and scalable framework for handling HTTP requests and routing.<br> <b>Cors</b> and <b>Body-Parser</b> middleware are used to enable secure cross-origin requests and parse incoming request bodies. <br><b>MySQL Workbench</b> was utilized for designing and managing the relational database, which is hosted on <b>Back4App</b> to ensure reliable and scalable data storage. <br>The architecture follows a <b>RESTful API</b> approach for efficient data handling and user management.",
    testInfo: 'Test credentials are available in the login section for users who prefer not to create a profile.',
    url:'https://find-users-app.netlify.app/'
  },
  {
    name: "Omnifood website",
    description: "The '<i>Omifood website</i>' was developed as part of an HTML, JavaScript, and CSS course, demonstrating the basics of building a dynamic, user-friendly website. <br> It is a prototype for a meal subscription service designed to deliver personalized, healthy meals to customers' doors every day.",
    technologies: "Hosted on <b>Netlify</b>, the app is built using <b>JavaScript</b>, <b>HTML</b> and <b>CSS</b>.",
    testInfo: null,
    url: 'https://omnifood-alw.netlify.app/' 
  },
  {
    name: "Lisbon Chairs Shop website",
    description: "The '<i>Lisbon Chairs Shop website</i>' is a personal project and a conceptual e-commerce website showcasing a collection of meticulously designed, handcrafted chairs that combine beauty, comfort, and sustainability. <br>The website demonstrates a user-friendly online shopping experience, and it serves as a portfolio piece, showcasing modern web technologies and design skills.",
    technologies: "The app is built using <b>React</b>, <b>JavaScript</b>, <b>HTML</b> and <b>CSS</b>, and it is hosted on <b>Netlify</b>.",
    testInfo: null,
    url:'https://lisbon-chairs-shop.netlify.app/'
  },
  {
    name: "Business Directory website",
    description: "The '<i>Business Directory website</i>' was developed as part of a Bootstrap course, designed as a simple, responsive website for a fictional financial planning company. <br>The website features an expert team section, service offerings with checkboxes, and a contact page, showcasing skills in web design and responsive development using Bootstrap.",
    technologies: "The app is built using <b>React</b>, <b>JavaScript</b>, <b>HTML</b> and <b>Bootstrap</b>, and it is hosted on <b>Netlify</b>.",
    testInfo: null,
    url:'https://business-directory-alw.netlify.app/'
  },
  {
    name: "Bankist website",
    description: "The '<i>Bankist Website</i>' is an app developed as part of a JavaScript and CSS course, that showcases a minimalist digital banking experience. <br>The website focuses on providing a modern, user-friendly interface, and demonstrates the application of JavaScript and CSS in creating interactive and responsive web applications.",
    technologies: "Hosted on <b>Netlify</b>, the app is built using <b>JavaScript</b>, <b>HTML</b> and <b>CSS</b>.",
    testInfo: null,
    url: 'https://bankist-alw.netlify.app/'
  },
  {
    name: "uHost website",
    description: "The '<i>uHost website</i>' is a simple app created as part of a basic HTML and CSS course. <br>It showcases a hosting company offering three different plans: Free, Plus, and Premium, with varying features such as storage, support, and workspaces.",
    technologies: "The app is built using <b>JavaScript</b>, <b>HTML</b> and <b>CSS</b>, and it is hosted on <b>Netlify</b>",
    testInfo: null,
    url: 'https://uhost-alw.netlify.app/'
  }
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
            <h3 className="modal-title text-danger" id="projectModalLabel">
            {selectedProject ? selectedProject.name : "Project Not Found"}
            </h3>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <h4>Description</h4>
              <p dangerouslySetInnerHTML={{
                  __html: selectedProject ? selectedProject.description : "No description available"
                }}></p>
            </div>
            <div> 
              <h4>Technologies Used</h4>
              <p dangerouslySetInnerHTML={{
                  __html: selectedProject ? selectedProject.technologies : "No techologies available"
                }}></p>
            </div>
            {selectedProject.testInfo && (
              <div>
                <h4>Demo Access</h4>
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
