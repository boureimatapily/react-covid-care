import {
  ADD_USER_INFO,
  ADD_USER_INFO_ERR,
  DELETE_USER,
  DELETE_USER_ERR,
  TOGGLE_CHECKED_ERR,
  TOGGLE_CHECKED,
  UPDATE_USER,
  UPDATE_USER_ERR,
  ADD_DEPARTMENT,
  ADD_DEPARTMENT_ERR,
} from "../Type";

// export const checkedPatient = () => {
//   return(dispatch, getState, { getFirebase }) =>{
//     const firestore = getFirebase().firestore()
//     firestore.collection("departments").where("checked", "==", true)
//     .get()
//     .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//     });
//   }
// }

//Add new Department
export const AddDepart = (newDepart) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const authorId = getState().firebase.auth.uid
    firestore
      .collection("departments")
      .add({
        ...newDepart,
        // authorId:authorId,
        date: new Date(),
      })
      .then(() => {
        dispatch({ type: ADD_DEPARTMENT, newDepart });
      })
      .catch((err) => {
        dispatch({ type: ADD_DEPARTMENT_ERR, err });
      });
  };
};

//Add new user
export const addPatient = (account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid;
    // const id = account.userId;
    firestore
      .collection("patients")
      .add({
        ...account,
        authorId: authorId,
        date: new Date(),
      })
      .then(() => {
        dispatch({ type: ADD_USER_INFO }, account);
      })
      .catch((err) => {
        dispatch({ type: ADD_USER_INFO_ERR }, err);
      });
  };
};
//Delete user
export const deletePatient = (account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;
    firestore
      .collection("patients")
      .doc(account.id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_USER });
      })
      .catch((err) => {
        dispatch({ type: DELETE_USER_ERR, err });
        console.log(err);
      });
  };
};

//Update user infos
export const updatePatient = (id, account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;
    firestore
      .collection("patients")
      .doc(id)
      .set(
        {
          ...account,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: UPDATE_USER });
      })
      .catch((err) => {
        dispatch({ type: UPDATE_USER_ERR, err });
      });
  };
};

//mark patient consultation as don
export const toggleChecked = (account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;

    firestore
      .collection("patients")
      .doc(account.id)
      .set(
        {
          ...account,
          checked: !account.checked,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: TOGGLE_CHECKED, account });
      })
      .catch((err) => {
        dispatch({ type: TOGGLE_CHECKED_ERR, err });
      });
  };
};


//ADD Doctor consult date
export const addDays= (account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;
      const id = getState().firebase.auth.uid
    firestore
      .collection("users")
      .doc(id)
      .set(
        {
          ...account,
          
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: TOGGLE_CHECKED, account });
      })
      .catch((err) => {
        dispatch({ type: TOGGLE_CHECKED_ERR, err });
      });
  };
};
