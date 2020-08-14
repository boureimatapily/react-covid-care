import React from "react";

export default function SingleDoctor({doctor}) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Fullname: {doctor.fullname} </h3>
          <h4 className="card-subtitle mb-2 text-muted"> Status: {doctor.status} </h4>
          <p className="card-text">
           <h5>Department: {doctor.department}</h5>
           <h5>Role: {doctor.role}</h5>
           <h5>Speciality: {doctor.speciality}</h5>
          </p>
          {/* <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a> */}
        </div>
      </div>
    </div>
  );
}
