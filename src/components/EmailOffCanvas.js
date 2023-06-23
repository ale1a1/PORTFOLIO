import React, { Fragment } from "react";
import "../Style.css";

const EmailOffCanvas = () => {
  return (
    <Fragment>
      <div
        className="offcanvas offcanvas-bottom bg-dark"
        tabIndex="-1"
        id="email"
        aria-labelledby="offcanvasEmaillabel"
        style={{ height: "60.5vh" }}
      >
        <div className="offcanvas-header px-4">
          <h1 className="offcanvas-title text-danger email-h1" id="offcanvasEmaillabel">
            Email me !
          </h1>
          <button
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex w-75 flex-column m-auto">
          <form
            className="w-100"
            action="https://formsubmit.co/ale1a1@libero.it"
            // action="https://formsubmit.co/ale1a184@gmail.com"
            // action="5964a354b4e9ce4590aee2448b7b8c24"
            method="POST"
          >
            <div className="row mt-5">
              <div className="col">
                <input
                  type="text"
                  name="First name"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="Second name"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  required
                />
              </div>
              <div className="col-lg row-sm emailField">
                <input
                  type="email"
                  name="Email address"
                  className="form-control"
                  placeholder="Email address"
                  aria-label="email"
                  required
                />
              </div>
              <div className="col-12 mt-3">
                <textarea
                  type="text"
                  name="message"
                  className="w-100 p-2"
                  rows="8"
                  placeholder="Write a message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-1">
              <button
                type="submit"
                className="btn btn-outline-danger mt-3"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EmailOffCanvas;
