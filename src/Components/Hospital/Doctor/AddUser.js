import React from "react";
import { connect } from "react-redux";
//import { addUser } from "../../Redux/Actions/UserActions";
import { register } from "../../../Redux/Actions/authActions";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fullname: "",
      role: "",
      status: "",
      department: "",
      speciality: "",
      days:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const creds = {
      email: this.state.email,
      password: this.state.password,
      fullname: this.state.fullname,
      role: this.state.role,
      status: this.state.status,
      department: this.state.department,
      speciality: this.state.speciality,
    };
    this.props.register(creds);
    document.getElementById("form").reset();
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 md-offset-2 col-lg-8 lg-offset-2 col-xl-8 offset-2 col-xxl-8 xxl-offset-2 card">
            <form onSubmit={this.handleSubmit} id="form">
            <div className="row">
            <div className="form-group col mb-2">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control inputsStyle"
                  id="email"
                  name="email"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col mb-2">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control inputsStyle"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
             </div>
              

              <div className="row">
                <div className="mb-2">
                  <label htmlFor="fullname" className="form-label">
                    fullname
                  </label>
                  <input
                    type="text"
                    className="form-control inputsStyle"
                    id="fullname"
                    name="fullname"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="department">Department</label>
                  <input
                    value={this.state.department}
                    onChange={this.handleChange}
                    type="text"
                    id="department"
                    name="department"
                    className="form-control inputsStyle"
                  />
                </div>
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="speciality">speciality</label>
                  <input
                    value={this.state.speciality}
                    onChange={this.handleChange}
                    type="text"
                    id="speciality"
                    name="speciality"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="fullname" className="form-label mr-3">
                  Status
                </label>
                <select
                  classNmae="form-select form-select-lg mb-3 inputsStyle"
                  aria-label="Default select example"
                  name="status"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option selected>Choose Doctor Status</option>
                  <option value="Quanrantined">Quanrantined Doctor</option>
                  <option value="Home">Work from Home</option>
                  <option value="Hospital">Availbable(In Hospital)</option>
                </select>
              </div>
              <div className="mb-2">
                <label htmlFor="role" className="form-label mr-3">
                  role
                </label>

                <select
                  classNmae="form-select form-select-lg mb-3 inputsStyle"
                  aria-label="Default select example"
                  name="role"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option selected>Choose role</option>
                  <option value="manager">manager</option>
                  <option value="doctor">doctor</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary navTabsBtn">
                ADD DOCTOR
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { register })(AddUser);
