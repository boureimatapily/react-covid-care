import React from "react";
import Alldays from "./Alldays";
import "./Doctor.css"


export default function SingleDoctor({ doctor }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card cardSize text-center">
            <div className="card-body">
              <h6 className="card-title">Fullname: {doctor.fullname} </h6>
              <h4 className="card-subtitle mb-2 text-muted">
                {" "}
                Status: {doctor.status}{" "}
              </h4>
              <div className="card-text">
                <h6>Email: {doctor.email}</h6>
                <h6>Department: {doctor.department}</h6>
                <h6>Role: {doctor.role}</h6>
                <h6>Speciality: {doctor.speciality}</h6>
              </div>
              <div className="mb-2">
              <Alldays day={doctor} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-6">
         
        </div> */}
      </div>
    </div>
  );
}
