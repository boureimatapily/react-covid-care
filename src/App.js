import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Department from "./Pages/Department";
import Hospital from "./Pages/Hospital";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify"; // ToastContainer to acces to toast notify everywhere in the project
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Login";
import EditPatient from "./Components/Hospital/Patient/EditPatient";
import PatientList from "./Components/Hospital/Patient/PatientList";



function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/department" component={Department} />
        <Route exact path="/hospital" component={Hospital} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/edit/:id" component={EditPatient} />
        <Route exact path="/patientlist" component={PatientList} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
