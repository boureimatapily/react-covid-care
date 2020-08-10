import React from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase"; // allow to access to a spesific collection and do realtime listening
import { connect } from "react-redux";
import SingleDeparts from "../Components/Department/SingleDeparts";
import { Redirect } from "react-router-dom";

function Department({ departs, uid }) {
  if(!uid) return <Redirect to="/login" />
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
           
              {departs &&
                departs.map((depart) => (
                  // <div className="d-flex flex-row justify-content-center align-items-center">

                  <SingleDeparts key={depart.department} depart={depart} />
                  // </div>
                ))}
           
          </div>
        </div>
      </div>
    </div>
  );
}

const mSTp = (state) => {
  console.log(state);
  const departs = state.firestore.ordered.departments;
  //const users = state.firestore.ordered.users;
  const uid = state.firebase.auth.uid
  return {
    departs: departs,
    uid: state.firebase.auth.uid
  };
};

export default compose(
  connect(mSTp),
  firestoreConnect((ownProps) => [
    // access and realtime listening
    {
      collection: "departments",
      orderBy: ["date", "desc"],
    },
  ])
)(Department);
