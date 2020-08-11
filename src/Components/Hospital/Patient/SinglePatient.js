import React from "react";
import moment from "moment";
import trash from "../../../Images/icons/trash-fill.svg"
import pencil from "../../../Images/icons/pencil.svg"
import "./patient.css"
export default function SinglePatient({ patient }) {
  return (
    <>
      <tr>
        <th> {moment(patient.date.toDate()).calendar()} </th>
        <th>{patient.folderId}</th>
        <th>{patient.firstname}</th>
        <th>{patient.lastname}</th>
        <th>{patient.age}</th>
        <th>  
            <button type="button" class="btn btn-danger btnaction"> <img src={trash} alt="trash" id="trash" width="20" height="20" title="delete" /> </button>
            <button type="button" class="btn btn-secondary btnaction"><img src={pencil} alt="pencil" id="pencil" width="20" height="20" title="delete" /></button>
            <input class="form-check-input pcheckbox" type="checkbox"  value={patient.checked} id="checkbox" />
            
        </th>
      </tr>
      
    </>
  );
}
