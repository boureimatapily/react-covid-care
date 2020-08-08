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
  ADD_DEPARTMENT_ERR
} from "../Type";


//Add new Department
export const addDepart = (newDepart) => {
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



// user authentification actions 
//Add new user
export const addUser = (account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid
    // const id = account.userId;
    firestore
      .collection("users")
      .add({
        ...account,
        authorId:authorId,
        date: new Date(),
      })
      .then(() => {
        dispatch({ type: ADD_USER_INFO, account });
      })
      .catch((err) => {
        dispatch({ type: ADD_USER_INFO_ERR, err });
      });
  };
};
      //Delete user
export const deleteUser = (account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;
    firestore
      .collection("users")
      .doc(account.id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_USER });
      })
      .catch((err) => {
        dispatch({ type: DELETE_USER_ERR, err });
      });
  };
};
    //Update user infos
export const updateUser = (account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;
    firestore
      .collection("users")
      .doc(account.id)
      .update(account)
      .then(() => {
        dispatch({ type: UPDATE_USER });
      })
      .catch((err) => {
        dispatch({ type: UPDATE_USER_ERR, err });
      });
  };
};


//check user user
export const toggleChecked = (account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;

    firestore
      .collection("users")
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
