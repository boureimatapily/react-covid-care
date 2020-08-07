import React, { Component } from "react";
import Input from "../../common/input";

class PatientForm extends Component {
  state = {
    formDetails: {
      fullname: "",
      age: "",
      temperature: "",
      height: "",
      weight: "",
      nextofkin: "",
      contact: "",
      status: "",
      report: "",
    },
    errors: {},
  };

  validate = () => {
    const errors = {};

    const { formDetails } = this.state;
    if (formDetails.fullname.trim() === "")
      errors.fullname = "fullname is required";

    if (formDetails.report.trim() === "")
      errors.report = "doctors report is required";

    if (formDetails.status.trim() === "")
      errors.status = "patients health status is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;

    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const formDetails = { ...this.state.formDetails };
    formDetails[input.name] = input.value;
    this.setState({ formDetails });
  };
  render() {
    const { formDetails, errors } = this.state;
    return (
      <div>
        <h1>patient Details</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="fullname">Fullname</label>
              <input
                value={formDetails.fullname}
                onChange={this.handleChange}
                type="text"
                id="fullname"
                name="fullname"
                className="form-control"
                error={errors.fullname}
              />
              {errors && (
                <div className="alert alert-danger"> {errors.fullname} </div>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="age">Age</label>
              <input
                value={formDetails.age}
                onChange={this.handleChange}
                type="text"
                id="age"
                name="age"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4 mb-2">
              <label htmlFor="temperature">temperature</label>
              <input
                value={formDetails.temperature}
                onChange={this.handleChange}
                type="text"
                id="temperature"
                name="temperature"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-4 mb-2">
              <label htmlFor="weight">weight</label>
              <input
                value={formDetails.weight}
                onChange={this.handleChange}
                type="text"
                id="weight"
                name="weight"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-4 mb-2">
              <label htmlFor="height">height</label>
              <input
                value={formDetails.height}
                onChange={this.handleChange}
                type="text"
                id="height"
                name="height"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-6">
              <label htmlFor="status">Patients health status</label>
              <input
                value={formDetails.status}
                onChange={this.handleChange}
                type="text"
                id="status"
                name="status"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="nextofkin">next of kin</label>
              <input
                value={formDetails.nextofkin}
                onChange={this.handleChange}
                type="text"
                id="nextofkin"
                name="nextofkin"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="contact">contact</label>
              <input
                value={formDetails.contact}
                onChange={this.handleChange}
                type="text"
                id="contact"
                name="contact"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-6">
              <label htmlFor="age">Doctors report</label>
              <input
                value={formDetails.report}
                onChange={this.handleChange}
                type="text"
                id="report"
                name="report"
                className="form-control"
              />
            </div>
          </div>
          <button className="btn-btn-primary mt-5">submit </button>
        </form>
      </div>
    );
  }
}

export default PatientForm;
