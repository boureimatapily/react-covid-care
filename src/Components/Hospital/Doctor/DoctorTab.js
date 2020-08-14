import React from "react";
import AddUser from "./AddUser";

export default function DoctorTab() {
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
                href="#nav-home-doctor-tab"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                ADD Doctor
              </a>
              <a
                className="nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-doctor-list"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Doctor List
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home-doctor-tab"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <h3 className="text-center">ADD Patient</h3>
              <AddUser />
            </div>
            <div
              className="tab-pane fade"
              id="nav-doctor-list"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <h3 className="text-center">Doctor list...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
