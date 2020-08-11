import React from "react";
import moment from "moment";
import trash from "../../../Images/"

export default function SinglePatient({ patient }) {
  return (
    <>
      <tr>
        <td> {moment(patient.date.toDate()).calendar()} </td>
        <td>{patient.folderId}</td>
        <td>{patient.firstname}</td>
        <td>{patient.lastname}</td>
        <td>{patient.age}</td>
        <td>  
        <img src="../" alt="" width="32" height="32" title="delete" />
            <button>edit</button>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            </div>
        </td>
      </tr>
      
    </>
  );
}
