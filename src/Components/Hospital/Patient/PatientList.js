import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import SinglePatient from "./SinglePatient";

class PatientList extends React.Component {
  render() {
    const { patients } = this.props;
    console.log(patients);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Patient List </h1>
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
  console.log(state);
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
      orderBy: ["date", "desc"],
    },
  ])
)(PatientList);
