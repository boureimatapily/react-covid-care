import React from "react";
import AddPatient from "./Patient/AddPatient"; // Adding patient
import PatientList from "./Patient/PatientList"; // Patient list
import NonCheckedPatientList from "./Patient/NonCheckedPatientList";
import CheckedPatientList from "./Patient/CheckedPatientList";

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
                All Patient
              </a>
              <a
                className="nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile-non-patient"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Non-Checked Patient
              </a>
              <a
                className="nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile-checkedpatient"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Checked Patient
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
              <h3 className="text-center">ADD Patient</h3>
              <AddPatient />
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile-patient"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <h3 className="text-center"> All Patient </h3>
              <PatientList />
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile-non-patient"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <h3 className="text-center"> Non-Checked Patient </h3>
                <NonCheckedPatientList />
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile-checkedpatient"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <h3 className="text-center"> Checked Patient </h3>
                <CheckedPatientList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
