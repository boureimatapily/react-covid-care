import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import SinglePatient from "./SinglePatient";

class PatientList extends React.Component {
  render() {
    const { patients } = this.props;
    // console.log(patients);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Patient List </h1>
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">FolderId</th>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">age</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {patients &&
                  patients.map((patient) => (
                    <SinglePatient patient={patient} key={patient.folderId} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mStp = (state) => {
  // console.log(state);
  const patients = state.firestore.ordered.patients; // patients collection state
  return {
    patients: patients,
  };
};

export default compose(
  connect(mStp),
  firestoreConnect((ownProps) => [
    // listen and get data form the patients collection
    {
      collection: "patients",
      // where : ["authorId", "==", ownProps.uid],
      // where: [
      //   ['checked', '==', true],
      //   ['checked', '==', false],
      // ],
      orderBy: ["date", "desc"],
    },
  ])
)(PatientList);
