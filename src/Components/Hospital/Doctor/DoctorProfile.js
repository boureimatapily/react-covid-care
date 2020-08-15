import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addDays, addDaysUpdate } from "../../../Redux/Actions/UserActions";
import Alldays from "./Alldays";
import "./Doctor.css"

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
    this.handleUpdate = this.handleUpdate.bind(this);

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
  handleUpdate = (e) =>{
    e.preventDefault();
    const alldata ={
        mondayopen: this.state.mondayopen,
        mondayclose: this.state.mondayclose,
        tuesdayopen:this.state.tuesdayopen,
        tuesdayclose: this.state.tuesdayclose,
        wednesdayopen:this.state.wednesdayopen,
        wednesdayclose: this.state.wednesdayclose,
        thursdayopen: this.state.thursdayopen,
        thursdayclose: this.state.thursdayclose,
        fridayopen:this.state.fridayopen,
        fridayclose:this.state.fridayclose,
        saturdayopen: this.state.saturdayopen,
        saturdayclose: this.state.saturdayclose,
        sundayopen:this.state.sundayopen,
        sundayclose:this.state.sundayclose,
    }
    this.props.addDaysUpdate(alldata);
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
  }


  render() {
    const { uid, profile } = this.props;
    if (!uid) return <Redirect to="/login" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="text-center"> Profile Information</h3>
            <div className="card">
            <h5>Email: {profile.email} </h5>
              <h5>Fullname: {profile.fullname} </h5>
              <h5>Role: {profile.role} </h5>
              <h5>Status: {profile.status} </h5>
              <h5>Department {profile.department} </h5>
              <h5>speciality: {profile.speciality} </h5>
            </div>
          </div>
          <div className="col-6">
              <Alldays day={profile}/>
          </div>
        </div>
        <div className="row">
        <div className="col">             
            <h1 className="text-center"> Availability </h1>
        </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row g-3 align-items-center">
              {/* Monday */}
              <div className="col-auto">
                <label htmlFor="monday" className="col-form-label">
                  <h6> Monday</h6>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="alldaystime"
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
                  id="alldaystime"
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
                  <h6> tuesday</h6>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="alldaystime"
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
                  id="alldaystime"
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
                  <h6> wednesday</h6>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="alldaystime"
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
                  id="alldaystime"
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
                  <h6> thursday</h6>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="alldaystime"
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
                  id="alldaystime"
                  name="thursdayclose"
                  value={this.state.thursdayclose}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="thursday"
                />
              </div>
            </div>
           </div>
          <div className="col-6">
          <div className="row g-3 align-items-center">
              {/* Friday */}
              <div className="col-auto">
                <label htmlFor="firday" className="col-form-label">
                  <h6> firday</h6>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="alldaystime"
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
                  id="alldaystime"
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
                  <h6> saturday</h6>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="alldaystime"
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
                  id="alldaystime"
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
                  <h6> sunday</h6>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="alldaystime"
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
                  id="alldaystime"
                  name="sundayclose"
                  value={this.state.sundayclose}
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="sunday"
                />
              </div>
            </div>
            <div className="align-items-center">
              <button
                type="submit"
                
                className="btn btn-primary alldaystimebtn"
                onClick={this.handleSubmit}
              >
                Set times
              </button>
              {/* <button
                type="submit"
                className="btn btn-primary alldaystimebtn"
                onClick={this.handleUpdate}
              >
                Update times
              </button> */}
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

export default connect(mStp, { addDays, addDaysUpdate })(DoctorProfile);
