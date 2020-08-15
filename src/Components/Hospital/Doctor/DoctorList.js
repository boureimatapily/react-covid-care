import React from "react";
import firebase from "../../../Config/fbconfig"
import SingleDoctor from "./SingleDoctor";

class DoctorList extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      doctors:[]
    }
  }

  componentWillReceiveProps(nextProps) {
    // This will erase any local state updates!
    this.setState({doctors:nextProps.listItems})
  }
  componentDidMount() {
        firebase
          .firestore() //access firestore
          .collection("users") //access "items" collection
          // .where("checked", "==", true)
          .onSnapshot(snapshot => {
            //You can "listen" to a document with the onSnapshot() method.
            const listItems = snapshot.docs.map(doc => ({
              //map each document into snapshot
              id: doc.id, //id and data pushed into items array
              ...doc.data() //spread operator merges data to id.
            }));
            this.setState({doctors:listItems}) //items is equal to listItems
          });
  }

  render() {
    const { doctors } = this.state;
   
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-row flex-wrap">
           
            {doctors && doctors.map((doctor)=>(
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



export default DoctorList
