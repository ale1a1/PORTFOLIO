import React, { useEffect } from "react";
import PropTypes from "prop-types";

const ProjectModal = ({ project, onClose }) => {

// Define the projects data
const projects = [
  {
    name: "Quiz Game",
    description: "'<i>Quiz Game</i>' allows users to play a 10-question quiz across a wide variety of categories, either as a guest or by logging in with their Google account. <br> The game tracks scores for logged-in users, displaying their progress on a leaderboard and within a personal scores section.",
    technologies: "The app is built with <b>Vue 3</b>, <b>HTML</b>, <b>TypeScript</b>, and <b>CSS</b>, utilizing a <b>public API</b> for retrieving questions and <b>Firebase</b> for database management and Google authentication. <br> It is hosted on <b>Netlify</b>, providing easy access and reliable performance.",
    url: 'https://play-quiz-game-now.netlify.app/'
  },
  {
    "name": "Su Sinnu",
    "description": "'<i>Su Sinnu</i>' is an e-commerce website developed for a real business in Italy that specializes in agricultural products and includes a Veterinary Pharmacy. <br> Designed to meet the client's specific requirements, the website offers an intuitive and seamless navigation experience. <br> Rather than a traditional e-commerce platform with online transactions, the online shop is intentionally structured to align with the client’s operational preferences. It includes a custom functionality that allows users to add items to their shopping cart, download a pre-order file, and finalize their purchase by contacting the store via phone. <br> Given the enhanced digital presence, it is anticipated that the business may soon opt to integrate full e-commerce capabilities, enabling customers to complete transactions directly on the website.",
    "technologies": "To align with the client’s request for a platform that allows them to independently and frequently update product listings, pricing, and content without technical assistance, the website is built using <b>Squarespace</b>, complemented by multiple injected <b>CSS</b> and <b>JS</b> scripts to enhance UI/UX and fulfill specific client needs. <br> Hosting is provided by <b>Squarespace</b>.",
    "url": "https://www.susinnu.it"
  },   
  {
    "name": "Find Users",
    "description": "'<i>Find Users</i>' allows users to create profiles, browse a user list, retrieve details, and save favorites. It is designed as a boilerplate prototype for user directory and profile management functionality.",
    "technologies": 
        "<ul style='list-style: disc; padding-left: 20px; margin: 0;'>"
      + "<li style='margin-top:5px; margin-bottom:5px; font-size: 1.1rem;'>Vue 3 <img style='margin-left:7px;' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' alt='Vue 3' width='20'></li>"
      + "<li style='margin-top:5px; margin-bottom:5px; font-size: 1.1rem;'>Nuxt 3 <img style='margin-left:7px;' src='https://nuxt.com/icon.png' alt='Nuxt 3' width='20'></li>"
      + "<li style='margin-top:5px; margin-bottom:5px; font-size: 1.1rem;'>HTML <img style='margin-left:7px;' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' alt='HTML' width='20'></li>"
      + "<li style='margin-top:5px; margin-bottom:5px; font-size: 1.1rem;'>Tailwind CSS <img style='margin-left:7px;' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' alt='Tailwind CSS' width='20'></li>"
      + "<li style='margin-top:5px; margin-bottom:5px; font-size: 1.1rem;'>TypeScript <img style='margin-left:7px;' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' alt='TypeScript' width='20'></li>"
      + "<li style='margin-top:5px; margin-bottom:5px; font-size: 1.1rem;'>Firebase <img style='margin-left:7px;' src='https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg' alt='Firebase' width='20'></li>"      
      + "<li style='margin-top:5px; margin-bottom:5px; font-size: 1.1rem;'>Netlify <img style='margin-left:7px;' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' alt='Netlify' width='20'></li>"
      + "</ul>",
    "testInfo": null,
    "url": "https://find-users-application.netlify.app/"
  },    
  {
    name: "Omnifood",
    description: "'<i>Omifood</i>' was developed as part of an HTML, JavaScript, and CSS course, demonstrating the basics of building a dynamic, user-friendly website. <br> It is a prototype for a meal subscription service designed to deliver personalized, healthy meals to customers' doors every day.",
    technologies: "Hosted on <b>Netlify</b>, the app is built using <b>JavaScript</b>, <b>HTML</b> and <b>CSS</b>.",
    testInfo: null,
    url: 'https://omnifood-alw.netlify.app/' 
  },
  {
    name: "Lisbon Chairs Shop",
    description: "'<i>Lisbon Chairs Shop</i>' is conceptual e-commerce website showcasing a collection of meticulously designed, handcrafted chairs that combine beauty, comfort, and sustainability. <br>The website demonstrates a user-friendly online shopping experience, and it serves as a portfolio piece, showcasing modern web technologies and design skills.",
    technologies: "The app is built using <b>React</b>, <b>JavaScript</b>, <b>HTML</b> and <b>CSS</b>, and it is hosted on <b>Netlify</b>.",
    testInfo: null,
    url:'https://lisbon-chairs-shop.netlify.app/'
  },
  {
    name: "Business Directory",
    description: "'<i>Business Directory</i>' was developed as part of a Bootstrap course, designed as a simple, responsive website for a fictional financial planning company. <br>The website features an expert team section, service offerings with checkboxes, and a contact page, showcasing skills in web design and responsive development using Bootstrap.",
    technologies: "The app is built using <b>React</b>, <b>JavaScript</b>, <b>HTML</b> and <b>Bootstrap</b>, and it is hosted on <b>Netlify</b>.",
    testInfo: null,
    url:'https://business-directory-alw.netlify.app/'
  },
  {
    name: "Bankist",
    description: "'<i>Bankist</i>' was developed as part of a JavaScript and CSS course, that showcases a minimalist digital banking experience. <br>The website focuses on providing a modern, user-friendly interface, and demonstrates the application of JavaScript and CSS in creating interactive and responsive web applications.",
    technologies: "Hosted on <b>Netlify</b>, the app is built using <b>JavaScript</b>, <b>HTML</b> and <b>CSS</b>.",
    testInfo: null,
    url: 'https://bankist-alw.netlify.app/'
  },
  {
    name: "uHost",
    description: "'<i>uHost</i>' is a simple website created as part of a basic HTML and CSS course. <br>It showcases a hosting company offering three different plans: Free, Plus, and Premium, with varying features such as storage, support, and workspaces.",
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
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable text-light" role="document">
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
            <div className="mt-2">
              <h4>Description</h4>
              <p dangerouslySetInnerHTML={{
                  __html: selectedProject ? selectedProject.description : "No description available"
                }}></p>
            </div>
            <div className="mt-4"> 
              <h4>Technologies</h4>
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
