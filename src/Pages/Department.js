import React from "react";
import PatientForm from "../Components/Department/patientForm";

function Department() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Department Dashboard</h1>
          <PatientForm />
        </div>
      </div>
    </div>
  );
}

export default Department;
