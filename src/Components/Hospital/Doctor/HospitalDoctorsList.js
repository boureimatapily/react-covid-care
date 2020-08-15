import React from "react";
import firebase from "../../../Config/fbconfig"
import SingleDoctor from "./SingleDoctor";

class HospitalDoctorsList extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      hospitaldoctors:[]
    }
  }

  componentWillReceiveProps(nextProps) {
    // This will erase any local state updates!
    this.setState({ hospitaldoctors:nextProps.listItems})
  }
  componentDidMount() {
        firebase
          .firestore() //access firestore
          .collection("users") //access "items" collection
          .where("status", "==", "Hospital")
          .onSnapshot(snapshot => {
            //You can "listen" to a document with the onSnapshot() method.
            const listItems = snapshot.docs.map(doc => ({
              //map each document into snapshot
              id: doc.id, //id and data pushed into items array
              ...doc.data() //spread operator merges data to id.
            }));
            this.setState({ hospitaldoctors:listItems}) //items is equal to listItems
          });
  }

  render() {
    const {  hospitaldoctors } = this.state;
   
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-row flex-wrap">
            
            { hospitaldoctors &&  hospitaldoctors.map((doctor)=>(
               <div key={doctor.fullname} className="col-4 mb-3">
              <SingleDoctor doctor={doctor} />
               </div>
    ))}
          </div>
        </div>
      </div>
    );
  }
}



export default HospitalDoctorsList
