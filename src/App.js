import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Department from "./Pages/Department";
import Hospital from "./Pages/Hospital";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify"; // ToastContainer to acces to toast notify everywhere in the project



function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/department" component={Department} />
        <Route exact path="/hospital" component={Hospital} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
