import React from "react";
import "./Navbar/Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light NavColor">
            <div className="container-fluid">
              <Link className="navbar-brand brandColor" to="/">
                Covid Care
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon iconColor"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              ></div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              ></div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              ></div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ">
                  <li className="nav-item whiteColor ">
                    <Link
                      className=" active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item whiteColor">
                    <Link className="NavBtnLink" to="/department">
                      Department
                    </Link>
                  </li>
                  <li className="nav-item whiteColor ">
                    <Link to="/hospital" className="NavBtnLink">
                      Hospital
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
