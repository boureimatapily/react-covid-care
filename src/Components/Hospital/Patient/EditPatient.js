import React from "react";
import { connect } from "react-redux";
import { updatePatient } from "../../../Redux/Actions/UserActions";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import "./patient.css"

class EditPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folderId: "",
      firstname: "",
      lastname: "",
      age: "",
      file: null,
      doctorNote: "",
      doctorName: "",
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    console.log(this.props);
    this.setState({
      firstname: this.props.patient.firstname,
      lastname: this.props.patient.lastname,
      folderId: this.props.patient.folderId,
      age: this.props.patient.age,
      doctorNote: this.props.patient.doctorNote,
      doctorName: this.props.patient.doctorName,
      
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, age, folderId, doctorNote, doctorName } = this.state;
    const newPatient = {
      folderId: folderId,
      firstname: firstname,
      lastname: lastname,
      age: age,
      doctorNote: doctorNote,
      doctorName: doctorName,
     
    };
    this.props.updatePatient(this.props.patientId, newPatient);
  };
  fileChangedHandler = event => {
    this.setState({ file: event.target.files[0] })
  }
  
  uploadHandler = () => {
    console.log(this.state.file)
  }
  render() {
    const { patient } = this.props;

    console.log(patient);

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-md-4 mb-2">
                  <Link to="/patientList">
                    <button type="submit" className="btn btn-primary m-20">
                      Go Back
                    </button>
                  </Link>
                  <h2> Update Patient folder </h2>
                  <label htmlFor="folderId">Patient Folder ID</label>
                  <input
                    value={this.state.folderId}
                    onChange={this.handleChange}
                    type="text"
                    id="folderId"
                    name="folderId"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="doctorName">Doctor Name</label>
                  <input
                    value={this.state.doctorName}
                    onChange={this.handleChange}
                    type="text"
                    id="doctorName"
                    name="doctorName"
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <textarea
                    className="form-control is-invalid"
                    id="validationTextarea"
                    placeholder="Doctor Note"
                    name="doctorNote"
                    value={this.state.doctorNote}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
              </div>
              {/* <div className="row">
                <div className="form-file col-md-4 p-10 ">
                  <input
                    type="file"
                    value={this.state.file}
                    onChange={this.fileChangedHandler}
                    name="file"
                    className="form-file-input"
                    id="customFile"
                  />
                  <label className="form-file-label" for="customFile">
                    <span className="form-file-text">Choose file...</span>
                    <span className="form-file-button">Browse</span>
                  </label>
                </div>
                <button onClick={this.uploadHandler}>Upload!</button>
              </div> */}

              <button type="submit" className="btn btn-primary m-20">
                Update Patient Infos
              </button>
            </form>
          </div>
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

  return {
    patientId: id,
    patient: patient,
  };
};

export default compose(
  connect(mStp, { updatePatient }),
  firestoreConnect((ownProps) => [
    // listen and get data form the patients collection
    {
      collection: "patients",
      // where : ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(EditPatient);
