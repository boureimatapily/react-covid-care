import React from "react";
import firebase from "../../../Config/fbconfig"
import SingleDoctor from "./SingleDoctor";

class QuarantinedDoctorsList extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      quanrantineddoctors:[]
    }
  }

  componentWillReceiveProps(nextProps) {
    // This will erase any local state updates!
    this.setState({quanrantineddoctors:nextProps.listItems})
  }
  componentDidMount() {
        firebase
          .firestore() //access firestore
          .collection("users") //access "items" collection
          .where("status", "==", "Quanrantined")
          .onSnapshot(snapshot => {
            //You can "listen" to a document with the onSnapshot() method.
            const listItems = snapshot.docs.map(doc => ({
              //map each document into snapshot
              id: doc.id, //id and data pushed into items array
              ...doc.data() //spread operator merges data to id.
            }));
            this.setState({quanrantineddoctors:listItems}) //items is equal to listItems
          });
  }

  render() {
    const { quanrantineddoctors } = this.state;
   
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            
            {quanrantineddoctors && quanrantineddoctors.map((doctor)=>(
               <div key={doctor.fullname}>
              <SingleDoctor doctor={doctor} />
               </div>
    ))}
          </div>
        </div>
      </div>
    );
  }
}



export default QuarantinedDoctorsList
