import React, { Fragment } from "react";
import "../Style.css";

const EmailOffCanvas = () => {
  return (
    <Fragment>
      <div
      class="offcanvas offcanvas-bottom bg-dark"
      tabindex="-1"
      id="email"
      aria-labelledby="offcanvasEmaillabel"
      style={{"height": "62.5vh"}}
    >
      <div class="offcanvas-header">
        <h1 class="offcanvas-title text-danger" id="offcanvasEmaillabel">
          Email
        </h1>
        <button
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body d-flex w-75 flex-column m-auto">
        <form class="w-100"> 
        {/* Crea il backend qui per ricevere le mail */}
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
            <div class="col-12 mt-3">
              <textarea
                class="w-100"
                rows="8"
                placeholder="Write a message"
              ></textarea>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-outline-danger mt-3 w-100">
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
