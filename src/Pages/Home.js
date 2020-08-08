import React, { Component } from "react";
//import home css style file
import "../Components/Home/Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container appContainer">
        <div className="row sectionOne">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center">
            <h2>Fight COVID-19 With Codetrain and Covid Care Platform</h2>
            <span>Work from home, do everything remotly</span>
          </div>
          <div className="col">
            <img
              src={require("../Images/covid.jpg")}
              alt="covid"
              id="covid_img"
              className="d-none d-md-block"
            />
          </div>
        </div>
        <div className="row sectionTwo">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex flex-row justify-content-end align-items-center">
            <div className="card cardstyle d-flex flex-column justify-content-center align-items-center">
              <img
                src={require("../Images/hospital.jpg")}
                className="card-img-top hospital"
                alt="hospital_img"
              />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Hospital Manager</h5>
                <p className="card-text">Hoaspital Manager Dashboard</p>
                <Link to="/department" className="getStartLink">
                  <button type="button" className="getStartBtn">
                    Get Start
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6  col-xxl-6 d-flex flex-row justify-content-start align-items-center">
            <div className="card cardstyle flex-column justify-content-center align-items-center">
              <img
                src={require("../Images/health1.jpg")}
                className="card-img-top hospital"
                alt="hospital_img"
              />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Department</h5>
                <p className="card-text">All Department</p>
                <Link to="/department" className="getStartLink">
                  <button type="button" className="getStartBtn">
                    Get Start
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
