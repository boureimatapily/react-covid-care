import React from 'react'
import AddUser from '../Components/Hospital/AddUser'
import AddDepartment from '../Components/Hospital/AddDepartment'

 function Hospital() {
    return (
        <div className="container">
        <div className="row">
          <div className="col">
            <h1>Hospital Dashboard</h1>
            {/* <AddUser /> */}
            <AddDepartment />
            
          </div>
        </div>
      </div>
    )
}

export default Hospital