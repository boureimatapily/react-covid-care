import React from "react";
import { connect } from "react-redux";
import {
  updatePatient,
  addDoctorNote,
} from "../../../Redux/Actions/UserActions";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import "./patient.css";

class EditPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folderId: "",
      firstname: "",
      lastname: "",
      age: "",
      doctorNote: "",
      doctorName: "",
      consultDate: "",
      consultLink: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDoctorSubmit = this.handleDoctorSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({
      firstname: this.props.patient.firstname,
      lastname: this.props.patient.lastname,
      folderId: this.props.patient.folderId,
      age: this.props.patient.age,
      doctorNote: this.props.patient.doctorNote,
      doctorName: this.props.patient.doctorName,
      consultDate: this.props.patient.consultDate,
      consultLink: this.props.patient.consultLink,
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      age,
      folderId,
      doctorNote,
      doctorName,
      consultDate,
      consultLink,
    } = this.state;
    const newPatient = {
      folderId: folderId,
      firstname: firstname,
      lastname: lastname,
      age: age,
      doctorNote: doctorNote,
      doctorName: doctorName,
      consultDate: consultDate,
      consultLink: consultLink,
    };
    this.props.updatePatient(this.props.patientId, newPatient);
  };

  handleDoctorSubmit = (e) => {
    e.preventDefault();
    const { doctorNote, doctorName } = this.state;
    const adddoctorNote = {
      doctorNote: doctorNote,
      doctorName: doctorName,
    };
    this.props.addDoctorNote(this.props.patientId, adddoctorNote);
  };

  render() {
    const { patient, profile } = this.props;

    console.log(patient);

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col">
                  <Link
                    to={profile.role === "manager" ? "/hospital" : "/doctor"}
                  >
                    <button
                      type="submit"
                      className="btn btn-primary mt-3 navTabsBtnlogin"
                    >
                      Go Back
                    </button>
                  </Link>

                  <h2> Update Patient folder </h2>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="folderId">Patient Folder ID</label>
                  <input
                    value={this.state.folderId}
                    onChange={this.handleChange}
                    type="text"
                    id="folderId"
                    name="folderId"
                    className="form-control inputsStyle"
                  />
                </div>
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="consultDate">Consulting Date</label>
                  <input
                    value={this.state.consultDate}
                    onChange={this.handleChange}
                    type="date"
                    id="consultDate"
                    name="consultDate"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="firstname">firstname</label>
                  <input
                    value={this.state.firstname}
                    onChange={this.handleChange}
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="form-control inputsStyle"
                  />
                </div>
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="lastname">lastname</label>
                  <input
                    value={this.state.lastname}
                    onChange={this.handleChange}
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="form-control inputsStyle"
                  />
                </div>
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="age">age</label>
                  <input
                    value={this.state.age}
                    onChange={this.handleChange}
                    type="text"
                    id="age"
                    name="age"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="consultLink">Consult Link</label>
                  <input
                    value={this.state.consultLink}
                    onChange={this.handleChange}
                    type="text"
                    id="consultLink"
                    name="consultLink"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-3 navTabsBtnlogin"
              >
                Update Infos
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <form onSubmit={this.handleDoctorSubmit}>
            <div className="row">
            <div className="form-group col-md-4 mb-2">
              <label htmlFor="doctorName">Doctor Name</label>
              <input
                value={this.state.doctorName}
                onChange={this.handleChange}
                type="text"
                id="doctorName"
                name="doctorName"
                className="form-control inputsStyle"
              />
            </div>
            <div className="form-group col-md-6 mb-2">
              <textarea
                className="form-control is-invalid inputsStyle doctorNoteInput "
                id="validationTextarea"
                placeholder="Doctor Note"
                name="doctorNote"
                value={this.state.doctorNote}
                onChange={this.handleChange}
              ></textarea>
            </div>
            </div>
            
            <button
              type="submit"
              className="btn btn-primary mt-3 navTabsBtnlogin"
            >
              Add Doctor Note
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mStp = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const patients = state.firestore.ordered.patients; // patients collection state
  let patient = patients.find((item) => {
    return item.id === id;
  });
  const profile = state.firebase.profile;
  return {
    patientId: id,
    patient: patient,
    profile: profile,
  };
};

export default compose(
  connect(mStp, { updatePatient, addDoctorNote }),
  firestoreConnect((ownProps) => [
    // listen and get data form the patients collection
    {
      collection: "patients",
      // where : ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(EditPatient);
