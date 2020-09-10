import React, { Component } from "react";
//import home css style file
import "../Components/Home/Home.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import DoctorAddUser from "../Components/Hospital/Doctor/DoctorAddUser";

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
      <div className="container-fluid homeBackground">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-left">
            <div className="covidText text-left">
              <h2 className="font-weight-bolder display-5">
                Fight COVID-19 With FlyDoctor Platform
              </h2>
              <p>
              <h2>Work From The Comfort Of Your Homes With FlyDoctor </h2>
              <h3 className="mt-5 ml-0 pl-0 font-weight-bolder">
                Already have an account ? Get Started 
              </h3>
              </p>
             
            </div>

            <div className="homebtmContainer">
              <Link
                to="/login"
                className="btn btn-primary navTabsBtnHome text-center"
              >
                <h4> Hospital Manager</h4>
              </Link>
              <Link
                to="/doctorlogin"
                className="btn btn-primary navTabsBtnHome text-center"
              >
                <h4> Doctor</h4>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center homeDoctorRegis">
            <h3>Doctor Registration</h3>
            <DoctorAddUser />
          </div>

          {/* <div className="col d-flex flex-row justify-content-evenly align-items-center ">
            <img
              src={require("../Images/bgO.jpg")}
              alt="covid"
              id="covid_img_Home"
              className="d-none d-md-block"
            />
          </div> */}
        </div>
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
