import React, { Component } from "react";
//import home css style file
import "../Components/Home/Home.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { uid, profile } = this.props;
    if (uid) {
      if (profile.role === "manager") {
        return <Redirect to="/hospital" />;
      } else {
        return <Redirect to="/doctor" />;
      }
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center">
            <div className="covidText">
              <h2 className="font-weight-bolder display-5">
                Fight COVID-19 with Covid Care Platform
              </h2>
              <span>Work from home, do everything remotly</span>
            </div>

            <div>
              <Link
                to="/login"
                className="btn btn-primary navTabsBtnHome text-center"
              >
                Hospital Manager
              </Link>
              <Link
                to="/doctorlogin"
                className="btn btn-primary navTabsBtnHome text-center"
              >
                Docotor
              </Link>
            </div>
          </div>
          <div className="col d-flex flex-row justify-content-evenly align-items-center ">
            <img
              src={require("../Images/bgO.jpg")}
              alt="covid"
              id="covid_img_Home"
              className="d-none d-md-block"
            />
          </div>
        </div>
        {/* <div className="row sectionTwo">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 col-xxl-12 d-flex flex-row justify-content-center align-items-center">
              <div className="card cardstyle d-flex flex-column justify-content-center align-items-center">
                <img
                  src={require("../Images/hospital.jpg")}
                  className="card-img-top hospital"
                  alt="hospital_img"
                />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">Hospital Manager</h5>
                  <p className="card-text">Hoaspital Manager Dashboard</p>
                  <Link to="/hospital" className="getStartLink">
                    <button type="button" className="getStartBtn">
                      Get Start
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    );
  }
}
const mStp = (state) => {
  const uid = state.firebase.auth.uid;
  const profile = state.firebase.profile;
  return {
    uid: uid,
    profile: profile,
  };
};

export default connect(mStp)(Home);
