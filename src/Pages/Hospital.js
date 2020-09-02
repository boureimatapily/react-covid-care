import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
//import PatientTab from "../Components/Hospital/PatientTab"; // Tab to manage Patient adding and listing
import DoctorTab from "../Components/Hospital/Doctor/DoctorTab";

function Hospital({uid}) {
  if(!uid) return <Redirect to="/login" />
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Hospital Dashboard</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <DoctorTab />
        </div>
      </div>
    </div>
  );
}
const mStp = (state) => {
  const uid = state.firebase.auth.uid;
 // const profile = state.firebase.profile;
  return {
    uid: uid,
    //profile: profile
  };
};

export default connect(mStp)(Hospital);

