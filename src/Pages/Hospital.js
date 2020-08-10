import React from "react";
import AddUser from '../Components/Hospital/AddUser'
 import AddDepartment from "../Components/Hospital/AddDepartment";
import Department from "./Department";

function Hospital() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Hospital Dashboard</h1>
        </div>
      </div>
      <div className="row">
          <div className="col">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Patient</a>
              <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Doctor</a>
              <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">ADD User</a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <AddDepartment/>
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <Department/>
            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <AddUser/>
            </div>
          </div>
                      
          </div>
        </div>
      
    </div>
  );
}

export default Hospital;
