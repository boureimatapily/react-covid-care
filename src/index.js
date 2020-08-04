import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./Config/fbconfig";
import Store from "./Redux/Store";
import { createFirestoreInstance } from "redux-firestore";

// react-redux-firebase config  from react-redux-firebase version 3 to store user profile
// const rrfConfig = {
//   userProfile: "users", // where profiles are stored in database
//   useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
//   // enableClaims: true, // Get custom claims along with the profile
//   // presence: "presence", // where list of online users is stored in database
//   sessions: "sessions"
// };

// creating react-redux-firebase Props from react-redux-firebase version 3
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {/* ADD BrowserRouter from react-router-dom */}
        <Router>
          <App />
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
