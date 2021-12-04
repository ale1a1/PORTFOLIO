import React from "react";

const Footer = () => {
  return (
    <footer
      class="
      w-100
      fixed-bottom
      bg-dark-transparent
      text-lg-start text-md-center
    "
    >
      <div class="row align-items-center px-3">
        <h2 class="col fs-5 ms-xs-auto ms-sm-auto ms-lg-2">“ Creativity is nothing but the way to solve new problems ... ”</h2>    
        <div class="col ms-2 text-muted mt-sm-4 fs-4 footerIcons">
          <ul class="list-unstyled d-flex flex-row justify-content-around px-5 me-1">
            <li>
              <a href="a">
                <i class="bi bi-instagram text-white-50 footerIcon"></i>
              </a>
            </li>
            <li>
              <a href="a">
                <i class="bi bi-linkedin text-white-50 footerIcon"></i>
              </a>
            </li>
            <li>
              <a href="a">
                <i class="bi bi-github text-white-50 footerIcon"></i>
              </a>
            </li>
            <li>
              <a href="a">
                <i class="bi bi-youtube text-white-50 footerIcon"></i>
              </a>
            </li>
            <li>
              <a href="a">
                <i class="bi bi-twitter text-white-50 footerIcon"></i>
              </a>
            </li>
            <li>
              <a href="a">
                <i class="bi bi-twitch text-white-50 footerIcon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
