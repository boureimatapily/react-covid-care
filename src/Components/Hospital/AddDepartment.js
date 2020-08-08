import React from "react";

class AddDepartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      
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
    const newDepart = {
      department: this.state.department,
      
    };
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3">
                <label for="department" className="form-label">
                  Department Name
                </label>
                <input
                  type="department"
                  className="form-control"
                  id="department"
                  name="department"
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

export default AddDepartment;
