import React, { Component } from "react";
import axios from "axios";
import FormSucessAlert from "../FormSucessAlert/FormSucessAlert";

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      project_details: ""
    };
  }
  nameChange = e => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  };
  emailChange = e => {
    this.setState({ email: e.target.value });
  };
  phoneChange = e => {
    this.setState({ phone: e.target.value });
  };
  projectDetailsChange = e => {
    this.setState({ project_details: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    Promise.all([
      axios({
        method: "POST",
        url: `${process.env.API_URL}api/addfeedback`,
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        },
        data: {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          project_details: this.state.project_details
        }
      })
    ]).then(response => {
      this.props.handler();
      window.location = "/";
    });
  };
  render() {
    return (
      <div>
        {/* <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Launch demo modal
        </button> */}
        {/* <FormSucessAlert /> */}

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="inputname"
              className="form-control"
              placeholder=""
              required
              onChange={e => this.nameChange(e)}
            />
            <label htmlFor="inputname">Name</label>
            <span className="border-span"></span>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              id="inputemail"
              className="form-control"
              placeholder=""
              required
              onChange={e => this.emailChange(e)}
            />
            <label htmlFor="inputemail">Email</label>
            <span className="border-span"></span>
          </div>

          <div className="form-group">
            <input
              type="number"
              name="phone"
              id="inputphone"
              className="form-control"
              placeholder=""
              required
              onChange={e => this.phoneChange(e)}
            />
            <label htmlFor="inputphone">Phone</label>
            <span className="border-span"></span>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="proj-details"
              id="inputtext"
              className="form-control"
              placeholder=""
              required
              onChange={e => this.projectDetailsChange(e)}
            />
            <label htmlFor="inputtext">Project Details</label>
            <span className="border-span"></span>
          </div>

          {/* <div className="form-floating-group">
                      <input type="text" className="form-control" id="name" placeholder="" required />
                      <label for="name">Name</label>
                    </div> */}

          <button type="submit" className="btn">
            Send
          </button>
        </form>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <FormSucessAlert />
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackForm;
