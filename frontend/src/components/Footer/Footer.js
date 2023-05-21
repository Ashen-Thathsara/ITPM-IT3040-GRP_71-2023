import React from "react";


function Footer() {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <footer className="page-footer font-small  teal py-4 text-white">
        <div className="container-fluid text-center text-md-left">
          <div className="row d-flex py-4 justify-content-around">
            <div className="col-md-3 mt-md-0 mt-3">
              Home
              <br />
              About
              <br />
              Terms & Condition
              <br />
              Privacy Policy
              <br />
            </div>

            <div className="col-md-3 mt-md-0 mt-3">
              Contact Us
              <br />
              FAQ
              <br />
            </div>

            <div className="col-md-5 mb-md-0 mb-3 text-start">
              <h5 className="text-uppercase font-weight-bold">About</h5>
              <small>
              This web application that we are creating is a main platform for the people who are doing this to organize themselves. Therefore, here we consider 4 main parts of this problem, we have focused our attention on the following sections. This will enable the visitors to the web application to easily and quickly find relevant information and provide assistance to environmental protection agencies.
              </small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;