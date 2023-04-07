import React from "react";


function Footer() {
  return (
    <div style={{ backgroundColor: "#12af39" }}>
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
              Welcome to LearnElight, your one-stop destination for education, donations, events, and counseling. We offer a wide range of educational courses to help you enhance your knowledge and skills, as well as the opportunity to make a difference by contributing to various causes through our donation platform. Stay up-to-date with the latest events in your area and beyond with our event calendar, and access professional counseling services for any of life's challenges. Thank you for visiting us!
              </small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;