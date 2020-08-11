import React from "react";
//import PatientForm from "../Department/patientForm";
import AddPatient from "./AddPatient";
import PatientForm from "../Department/patientForm";

export default function PatientTab() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                className="nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home-patient"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                ADD Patient
              </a>
              <a
                className="nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile-patient"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
               .... Patient List
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home-patient"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <h1>ADD Patient</h1>
              <AddPatient />
              <PatientForm />
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile-patient"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <h1>Patient List </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
