import React from "react";
import { connect } from "react-redux";
import { login } from "../Redux/Actions/authActions";
import { Redirect } from "react-router-dom";
import DoctorAddUser from "../Components/Hospital/Doctor/DoctorAddUser";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const creds = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(creds);
  };
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
        <div className="row sectionOne">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center">
            <h2 className="font-weight-bolder">
              FIGHT COVID-19 WITH FlyDoctor PLATFORM
            </h2>
            <h5>WORK FROM THE COMFORT OF YOUR HOMES WITH FlyDoctor</h5>
          </div>
          <div className="col d-flex flex-row justify-content-evenly align-items-center ">
            <img
              src={require("../Images/phone.JPG")}
              alt="covid"
              id="covid_imgOne"
              className="d-none d-md-block"
            />

            <img
              src={require("../Images/phone.JPG")}
              alt="covid"
              id="covid_img"
              className="d-none d-md-block"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6  offset-md-3 col-lg-6  offset-lg-3 col-xl-6  offset-xl-3col-xxl-6  offset-xxl-3 ">
            <DoctorAddUser />
          </div>
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

export default connect(mStp, { login })(Signup);
