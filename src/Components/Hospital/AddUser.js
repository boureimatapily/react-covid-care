import React from "react";
import { connect } from "react-redux"
//import { addUser } from "../../Redux/Actions/UserActions";
import { register } from "../../Redux/Actions/authActions";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fullname: "",
      role: "",
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
    };
    this.props.register(creds);
    document.getElementById("form").reset();


  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit} id="form">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={this.state.value}
                  onChange={this.handleChange}
                  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  fullname
                </label>
                <input
                  type="fullname"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={this.state.value}
                  onChange={this.handleChange}
                  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  role
                </label>
                <input
                  type="role"
                  className="form-control"
                  id="role"
                  name="role"
                  value={this.state.value}
                  onChange={this.handleChange}
                  
                />
              </div>
              <button type="submit" className="btn btn-primary">
                ADD
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null,{register})(AddUser);
