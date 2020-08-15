import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addDays } from "../../../Redux/Actions/UserActions";
import Alldays from "./Alldays";

class DoctorProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mondayopen: "",
      mondayclose: "",
      tuesdayopen: "",
      tuesdayclose: "",
      wednesdayopen: "",
      wednesdayclose: "",
      thursdayopen: "",
      thursdayclose: "",
      fridayopen: "",
      fridayclose: "",
      saturdayopen: "",
      saturdayclose: "",
      sundayopen: "",
      sundayclose: "",
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
    this.props.addDays(this.state);
    this.setState({
        mondayopen: "",
        mondayclose: "",
        tuesdayopen: "",
        tuesdayclose: "",
        wednesdayopen: "",
        wednesdayclose: "",
        thursdayopen: "",
        thursdayclose: "",
        fridayopen: "",
        fridayclose: "",
        saturdayopen: "",
        saturdayclose: "",
        sundayopen: "",
        sundayclose: "",
    })
  };

  render() {
    const { uid, profile } = this.props;
    if (!uid) return <Redirect to="/login" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <h3>Fullname: {profile.fullname} </h3>
              <h3>Role: {profile.role} </h3>
              <h3>Status: {profile.status} </h3>
              <h3>Department {profile.department} </h3>
              <h3>speciality: {profile.speciality} </h3>
            </div>
          </div>
          <div className="col-6">
              <Alldays day={profile}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="text-center">Availability </h1>
            <div className="row g-3 align-items-center">
              {/* Monday */}
              <div className="col-auto">
                <label htmlFor="monday" className="col-form-label">
                  <h3> Monday</h3>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="mondayopen"
                  name="mondayopen"
                  value={this.state.mondayopen}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="monday"
                />
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="mondayclose"
                  name="mondayclose"
                  value={this.state.mondayclose}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="monday"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center">
              {/* Tuesday */}
              <div className="col-auto">
                <label htmlFor="tuesday" className="col-form-label">
                  <h3> tuesday</h3>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="tuesdayopen"
                  name="tuesdayopen"
                  value={this.state.tuesdayopen}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="tuesday"
                />
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="tuesdayclose"
                  name="tuesdayclose"
                  value={this.state.tuesdayclose}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="tuesday"
                />
              </div>
            </div>
            <div className="row g-3 align-items-center">
              {/* Wednesday */}
              <div className="col-auto">
                <label htmlFor="wednesday" className="col-form-label">
                  <h3> wednesday</h3>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="wednesdayopen"
                  name="wednesdayopen"
                  value={this.state.wednesdayopen}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="wednesday"
                />
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="wednesdayclose"
                  name="wednesdayclose"
                  value={this.state.wednesdayclose}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="wednesday"
                />
              </div>
            </div>
            <div className="row g-3 align-items-center">
              {/* thursday */}
              <div className="col-auto">
                <label htmlFor="thursday" className="col-form-label">
                  <h3> thursday</h3>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="thursdayopen"
                  name="thursdayopen"
                  value={this.state.thursdayopen}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="thursday"
                />
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="thursdayclose"
                  name="thursdayclose"
                  value={this.state.thursdayclose}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="thursday"
                />
              </div>
            </div>
            <div className="row g-3 align-items-center">
              {/* Friday */}
              <div className="col-auto">
                <label htmlFor="firday" className="col-form-label">
                  <h3> firday</h3>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="fridayopen"
                  name="fridayopen"
                  value={this.state.fridayopen}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="firday"
                />
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="fridayclose"
                  name="fridayclose"
                  value={this.state.fridayclose}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="firday"
                />
              </div>
            </div>
            <div className="row g-3 align-items-center">
              {/*Saturday */}
              <div className="col-auto">
                <label htmlFor="saturday" className="col-form-label">
                  <h3> saturday</h3>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="saturdayopen"
                  name="saturdayopen"
                  value={this.state.saturdayopen}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="saturday"
                />
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="saturdayclose"
                  name="saturdayclose"
                  value={this.state.saturdayclose}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="saturday"
                />
              </div>
            </div>
            <div className="row g-3 align-items-center">
              {/* Sunday*/}
              <div className="col-auto">
                <label htmlFor="thursday" className="col-form-label">
                  <h3> sunday</h3>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="sundayopen"
                  name="sundayopen"
                  value={this.state.sundayopen}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="sunday"
                />
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="sundayclose"
                  name="sundayclose"
                  value={this.state.sundayclose}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="sunday"
                />
              </div>
            </div>
            <div className="row g-3 align-items-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Set times
              </button>
            </div>
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

export default connect(mStp, { addDays })(DoctorProfile);
