import React, { Fragment } from "react";
import "../Style.css";
// import SubmitEmail from "../actions/SubmitEmail";

const EmailOffCanvas = () => {
  return (
    <Fragment>
      <div
        className="offcanvas offcanvas-bottom bg-dark"
        tabIndex="-1"
        id="email"
        aria-labelledby="offcanvasEmaillabel"
        style={{ height: "62.5vh" }}
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title text-danger" id="offcanvasEmaillabel">
            Email
          </h1>
          <button
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex w-75 flex-column m-auto">
          {/* <form className="w-100" onSubmit={SubmitEmail}> */}
          <form className="w-100">
            {/* Crea il backend qui per ricevere le mail */}
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  // required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  // required
                />
              </div>
              {/* <div className="col-lg row-sm emailField">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  aria-label="email"
                  // required
                />
              </div> */}
              <div className="col-12 mt-3">
                <textarea
                  className="w-100"
                  rows="8"
                  placeholder="Write a message"
                  // required
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-outline-danger mt-3 w-100">
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
