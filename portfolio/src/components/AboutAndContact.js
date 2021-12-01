import React from "react";
import "../Style.css";

const AboutAndContact = () => {
  return (
    <div class="row mt-3">
      <div class="col-md-6 mt-3">
        <div class="collapse multi-collapse" id="about">
          <div class="card card-body text-start shadow bg-dark-transparent">
            <h5 class="card-title text-danger ">About</h5>
            <div class="card-text">
              <h3 class="text-white-50 ms-3">Alessandro Ladu</h3>
              <ul class="list-unstyled ms-5">
                <li>CEO at Pobastream</li>
                <li>Freelance Web Developer</li>
                <li>Locum Vet Surgeon</li>
                <li>COD player</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-3">
        <div class="collapse multi-collapse" id="contact">
          <div class="card card-body text-start shadow bg-dark-transparent">
            <h5 class="card-title text-danger ">Contact</h5>
            <div class="card-text">
              <h3 class="text-white-50 ms-3">Get in touch</h3>
              <ul class="list-unstyled ms-5">
                <li>
                  {" "}
                  <i class="bi bi-house me-2 text-danger"></i> City: Mulargia
                </li>
                <li>
                  {" "}
                  <i class="bi bi-signpost me-2 text-danger"></i> Street:
                  Coddadi Street
                </li>
                <li>
                  {" "}
                  <i class="bi bi-telephone me-2 text-danger"></i> Phone:
                  2837348384384
                </li>
                <li>
                  {" "}
                  <i class="bi bi-envelope me-2 text-danger"></i> Email:
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
