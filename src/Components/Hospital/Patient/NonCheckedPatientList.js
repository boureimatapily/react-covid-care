import React from "react";
import SinglePatient from "./SinglePatient";
import firebase from "../../../Config/fbconfig"


class NonCheckedPatientList extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      nonchecked:[]
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   // This will erase any local state updates!
  
  //   this.setState({nonchecked:nextProps.listItems})
  // }
  componentDidMount() {
        firebase
          .firestore() //access firestore
          .collection("patients") //access "items" collection
          .where("checked", "==", false)
          .onSnapshot(snapshot => {
            //You can "listen" to a document with the onSnapshot() method.
            const listItems = snapshot.docs.map(doc => ({
              //map each document into snapshot
              id: doc.id, //id and data pushed into items array
              ...doc.data() //spread operator merges data to id.
            }));
            this.setState({nonchecked:listItems}) //items is equal to listItems
          });
  }

  
  // const listItem = useItems();
  // console.log(listItem)
  render() {
    const { nonchecked } = this.state;
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Patient List </h1>
            <table className="table table-striped">
              <thead>
                <tr>
                 <th scope="col">Date</th>
                  <th scope="col">FolderId</th>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Age</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Consult Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {nonchecked  &&
                  nonchecked.map((patient) => (
                    <SinglePatient patient={patient} key={patient.folderId} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


export default NonCheckedPatientList
