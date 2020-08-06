import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Department from "./Pages/Department";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/department" component={Department} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
