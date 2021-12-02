import React, { Fragment } from "react";

const PortfolioOffCanvas = () => {
  return (
    <Fragment>
      <div
        class="offcanvas offcanvas-start bg-dark"
        id="portfolio"
        tabindex="-1"
        aria-labelledby="offcanvasPortfolioLabel"
      >
        <div class="offcanvas-header">
          <h1 class="offcanvas-title text-danger">Portfolio</h1>
          <button
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolorem
            laborum at suscipit odio modi, eos vero provident nulla maxime
            itaque tempore ullam aliquam, dolore id. Quae facilis harum facere!
          </p>
          <ul class="list-group">
            <a
              href="a"
              class="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
            >
              <i class="bi bi-globe2"> </i> Bio website theme
            </a>
            <a
              href="a"
              class="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
            >
              <i class="bi bi-globe2"></i> Business Directory Website Themes
            </a>
            <a
              href="a"
              class="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
            >
              <i class="bi bi-globe2"></i> Resume Website Themes
            </a>
            <a
              href="a"
              class="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
            >
              <i class="bi bi-globe2"></i> Photo sharing website
            </a>
            <a
              href="a"
              class="
              list-group-item list-group-item-danger list-group-item-action
              mb-2
            "
            >
              <i class="bi bi-globe2"></i> E-Commerce website
            </a>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default PortfolioOffCanvas;
